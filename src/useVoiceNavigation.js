import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function useVoiceNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const lastPath = useRef(location.pathname);
  const lastCommandTime = useRef(0);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-IN";

    const speak = (text) => {
      speechSynthesis.cancel();
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = "en-IN";
      speechSynthesis.speak(msg);
    };

    recognition.onresult = (event) => {
      const cmd =
        event.results[event.results.length - 1][0]
          .transcript.toLowerCase()
          .trim();

      console.log("VOICE:", cmd);

      /* ---------- Debounce ---------- */
      const now = Date.now();
      if (now - lastCommandTime.current < 1200) return;
      lastCommandTime.current = now;

      let targetPath = null;
      let message = null;

      /* ---------- Detect specific departments ---------- */
      const mentionsSpecificDept =
        cmd.includes("computer science") ||
        cmd.includes("computer")
        cmd.includes("cse") ||
        cmd.includes("electronics") ||
        cmd.includes("electronics and communication") ||
        cmd.includes("ece") ||
        cmd.includes("mechanical") ||
        cmd.includes("mech") ||
        cmd.includes("artificial intelligence") ||
        cmd.includes("machine learning") ||
        cmd.includes("artificial intelligence and machine learning") ||
        cmd.includes("aiml") ||
        cmd.includes("aerospace") ||
        cmd.includes("ase");

      /* ========== MAIN PAGES ========== */

      if (cmd.includes("home")) {
        targetPath = "/";
        message = "Going to home page";
      }

      else if (cmd.includes("admission") || cmd.includes("admissions")) {
        targetPath = "/admissions";
        message = "Opening admissions";
      }

      else if (cmd.includes("placement") || cmd.includes("placements")) {
        targetPath = "/placements";
        message = "Opening placements";
      }

      else if (cmd.includes("department") && !mentionsSpecificDept) {
        targetPath = "/departments";
        message = "Opening departments";
      }

      /* ========== DEPARTMENTS ========== */

      else if (cmd.includes("computer science") || cmd.includes("cse")) {
        targetPath = "/departments/cse";
        message = "Opening Computer Science Engineering ";
      }

      else if (cmd.includes("electronics") || cmd.includes("ece")) {
        targetPath = "/departments/ece";
        message = "Opening Electronics and Communication ";
      }

      else if (cmd.includes("mechanical") || cmd.includes("mech")) {
        targetPath = "/departments/mech";
        message = "Opening Mechanical Engineering ";
      }

      else if (
        cmd.includes("artificial intelligence") ||
        cmd.includes("machine learning") ||
        cmd.includes("aiml")
      ) {
        targetPath = "/departments/aiml";
        message = "Opening Artificial Intelligence and Machine Learning ";
      }

      else if (cmd.includes("aerospace") || cmd.includes("ase")) {
        targetPath = "/departments/ase";
        message = "Opening Aerospace Engineering ";
      }

      /* ========== SCROLLING ========== */

      else if (cmd.includes("scroll down")) {
        window.scrollBy({ top: 400, behavior: "smooth" });
        return;
      }

      else if (cmd.includes("scroll up")) {
        window.scrollBy({ top: -400, behavior: "smooth" });
        return;
      }

      else if (cmd.includes("top")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      else if (cmd.includes("bottom")) {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
        return;
      }

      /* ========== NAVIGATE ========== */

      if (targetPath && targetPath !== lastPath.current) {
        speak(message);
        navigate(targetPath);
        lastPath.current = targetPath;
      }
    };

    recognition.start();
    return () => recognition.stop();

  }, [navigate, location.pathname]);
}
