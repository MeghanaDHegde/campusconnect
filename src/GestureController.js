//no zoom in or out
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Hands } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";

const PINCH_DELAY_MS = 250;

const GestureController = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const cursorRef = useRef(null);

  const handsRef = useRef(null);
  const cameraRef = useRef(null);

  const scrollInterval = useRef(null);
  const scrollDirection = useRef(null);
  const zoomInterval = useRef(null);
  const zoomLevel = useRef(1);
  const zoomDirection = useRef(null);
  const clickLock = useRef(false);
  const backTriggered = useRef(false);

  const pinchState = useRef({
    isPinched: false,
    pinchChangeTimeout: null,
  });

  const [gesture, setGesture] = useState(null);

  /* ================= INIT ================= */
  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.6,
      minTrackingConfidence: 0.6,
    });

    hands.onResults(onResults);
    handsRef.current = hands;

    if (videoRef.current) {
      const camera = new Camera(videoRef.current, {
        onFrame: async () => {
          await handsRef.current.send({ image: videoRef.current });
        },
        width: 640,
        height: 480,
      });
      camera.start();
      cameraRef.current = camera;
    }

    return () => {
      stopScrolling();
      cameraRef.current?.stop();
      handsRef.current?.close();
    };
  }, []);

  /* ================= RESULTS ================= */
  const onResults = (results) => {
    if (results.multiHandLandmarks?.length) {
      detectGesture(results.multiHandLandmarks[0]);
    } else {
      resetAll();
    }
  };

  const resetAll = () => {
    setGesture(null);
    stopScrolling();
    stopZooming();
    hideCursor();
    clearPinchTimeout();
    pinchState.current.isPinched = false;
  };

  /* ================= GESTURE DETECTION ================= */
  const detectGesture = (landmarks) => {
    const wrist = landmarks[0];
    const thumbMCP = landmarks[2];
    const thumbIP = landmarks[3];
    const thumbTip = landmarks[4];
    const indexTip = landmarks[8];

    const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

    const isFingerCurled = (tip, pip) =>
      dist(landmarks[tip], wrist) < dist(landmarks[pip], wrist);

    const indexCurled = isFingerCurled(8, 6);
    const middleCurled = isFingerCurled(12, 10);
    const ringCurled = isFingerCurled(16, 14);
    const pinkyCurled = isFingerCurled(20, 18);
    const thumbCurled = isFingerCurled(4, 3);

    /* ---------- PINCH (NO ACTION) ---------- */
    const pinchedNow = isProperPinch(
      landmarks,
      middleCurled,
      ringCurled,
      pinkyCurled
    );

    const wasPinched = pinchState.current.isPinched;

    if (pinchedNow !== wasPinched && !pinchState.current.pinchChangeTimeout) {
      pinchState.current.pinchChangeTimeout = setTimeout(() => {
        pinchState.current.isPinched = pinchedNow;
        pinchState.current.pinchChangeTimeout = null;
        if (!pinchedNow) backTriggered.current = false;
      }, PINCH_DELAY_MS);
    }

    if (pinchedNow === wasPinched) {
      clearPinchTimeout();
      if (pinchedNow) {
        setGesture("Pinch (Back)");
        stopScrolling();
        stopZooming();
        hideCursor();
        if (!backTriggered.current) {
          navigate(-1);
          backTriggered.current = true;
        }
        return;
      }
    }

    /* ---------- PALM (STOP) ---------- */
    if (!indexCurled && !middleCurled && !ringCurled && !pinkyCurled) {
      setGesture("Palm (Stop)");
      stopScrolling();
      stopZooming();
      hideCursor();
      return;
    }

    /* ---------- ZOOM IN (ROCK ON) ---------- */
    if (!indexCurled && middleCurled && ringCurled && !pinkyCurled) {
      setGesture("Zoom In");
      stopScrolling();
      startZoomingIn();
      hideCursor();
      return;
    }

    /* ---------- ZOOM OUT (SHAKA) ---------- */
    if (!thumbCurled && indexCurled && middleCurled && ringCurled && !pinkyCurled) {
      setGesture("Zoom Out");
      stopScrolling();
      startZoomingOut();
      hideCursor();
      return;
    }

    /* ---------- AIR MOUSE MOVE ---------- */
    if (!indexCurled && middleCurled && ringCurled && pinkyCurled) {
      setGesture("Air Mouse");
      stopZooming();
      moveCursor(indexTip);
      stopScrolling();
      clickLock.current = false;
      return;
    }

    /* ---------- AIR MOUSE CLICK ---------- */
    if (!indexCurled && !middleCurled && ringCurled && pinkyCurled) {
      setGesture("Click");
      stopZooming();
      moveCursor(indexTip);

      if (!clickLock.current) {
        const x = (1 - indexTip.x) * window.innerWidth;
        const y = indexTip.y * window.innerHeight;
        document.elementFromPoint(x, y)?.click();
        clickLock.current = true;
      }
      return;
    }

    /* ---------- THUMB SCROLL ---------- */
    const onlyThumbOpen =
      indexCurled && middleCurled && ringCurled && pinkyCurled;

    const thumbsUp =
      onlyThumbOpen &&
      thumbTip.y < thumbIP.y &&
      thumbIP.y < thumbMCP.y &&
      thumbTip.y < wrist.y;

    const thumbsDown =
      onlyThumbOpen &&
      thumbTip.y > thumbIP.y &&
      thumbIP.y > thumbMCP.y &&
      thumbTip.y > wrist.y;

    if (thumbsUp) {
      setGesture("Thumbs Up");
      startScrolling("up");
      stopZooming();
      hideCursor();
      return;
    }

    if (thumbsDown) {
      setGesture("Thumbs Down");
      startScrolling("down");
      stopZooming();
      hideCursor();
      return;
    }

    resetAll();
  };

  /* ================= PINCH HELPERS ================= */
  const isProperPinch = (landmarks, middleCurled, ringCurled, pinkyCurled) => {
    const thumbTip = landmarks[4];
    const indexTip = landmarks[8];

    const dx = Math.abs(thumbTip.x - indexTip.x);
    const dy = Math.abs(thumbTip.y - indexTip.y);
    const dz = Math.abs(thumbTip.z - indexTip.z);

    return dx < 0.08 && dy < 0.08 && dz < 0.11 &&
      middleCurled && ringCurled && pinkyCurled;
  };

  const clearPinchTimeout = () => {
    clearTimeout(pinchState.current.pinchChangeTimeout);
    pinchState.current.pinchChangeTimeout = null;
  };

  /* ================= ACTIONS ================= */
  const startScrolling = (dir) => {
    if (!scrollInterval.current) {
      scrollDirection.current = dir;
      scrollInterval.current = setInterval(() => {
        window.scrollBy({ top: dir === "down" ? 6 : -6 });
      }, 20);
    }
  };

  const stopScrolling = () => {
    clearInterval(scrollInterval.current);
    scrollInterval.current = null;
    scrollDirection.current = null;
  };

  const startZoomingIn = () => {
    if (zoomDirection.current === "out") stopZooming();
    if (!zoomInterval.current) {
      zoomDirection.current = "in";
      zoomInterval.current = setInterval(() => {
        zoomLevel.current = Math.min(zoomLevel.current + 0.01, 3);
        document.documentElement.style.zoom = zoomLevel.current;
      }, 50);
    }
  };

  const startZoomingOut = () => {
    if (zoomDirection.current === "in") stopZooming();
    if (!zoomInterval.current) {
      zoomDirection.current = "out";
      zoomInterval.current = setInterval(() => {
        zoomLevel.current = Math.max(zoomLevel.current - 0.01, 0.5);
        document.documentElement.style.zoom = zoomLevel.current;
      }, 50);
    }
  };

  const stopZooming = () => {
    clearInterval(zoomInterval.current);
    zoomInterval.current = null;
    zoomDirection.current = null;
  };

  const resetZoom = () => {
    stopZooming();
    zoomLevel.current = 1;
    document.documentElement.style.zoom = 1;
  };

  const moveCursor = (point) => {
    cursorRef.current.style.display = "block";
    // Adjust cursor position to account for zoom level
    cursorRef.current.style.left = `${((1 - point.x) * window.innerWidth) / zoomLevel.current}px`;
    cursorRef.current.style.top = `${(point.y * window.innerHeight) / zoomLevel.current}px`;
  };

  const hideCursor = () => {
    cursorRef.current.style.display = "none";
    clickLock.current = false;
  };

  /* ================= UI ================= */
  return (
    <>
      <div ref={cursorRef} style={styles.cursor}></div>

      <div style={styles.container}>
        <video ref={videoRef} autoPlay muted playsInline style={styles.video} />
        {gesture && <div style={styles.feedback}>{gesture}</div>}
      </div>
    </>
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: 20,
    right: 20,
    zIndex: 9999,
    textAlign: "center",
  },
  video: {
    width: 160,
    height: 120,
    borderRadius: 10,
    transform: "scaleX(-1)",
    border: "2px solid #333",
    background: "#000",
  },
  feedback: {
    marginTop: 6,
    padding: "6px 10px",
    background: "rgba(0,0,0,0.8)",
    color: "#fff",
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 14,
  },
  cursor: {
    position: "fixed",
    width: 20,
    height: 20,
    background: "rgba(255,0,0,0.7)",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    zIndex: 10000,
    display: "none",
  },
};

export default GestureController;