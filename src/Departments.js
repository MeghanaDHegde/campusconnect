import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";

function Departments() {
  const navigate = useNavigate();

  const pageStyle = {
    minHeight: "100vh",
    background: "#1e3c72",
    padding: "40px 20px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "30px",
    letterSpacing: "1px",
  };

  const listStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    width: "100%",
    maxWidth: "900px",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.12)",
    borderRadius: "16px",
    padding: "24px",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.2)",
  };

  const hoverStyle = {
    transform: "translateY(-6px)",
    background: "rgba(255, 255, 255, 0.22)",
  };

  return (
    <div style={pageStyle}>
      <BackButton />

      <h2 style={titleStyle}>Departments</h2>

      <div style={listStyle}>
        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, cardStyle)}
          onClick={() => navigate("/departments/ase")}
        >
          ✈️ Aerospace Engineering (ASE)
        </div>

        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, cardStyle)}
          onClick={() => navigate("/departments/aiml")}
        >
          🤖 Artificial Intelligence & ML (AIML)
        </div>

        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, cardStyle)}
          onClick={() => navigate("/departments/cse")}
        >
          💻 Computer Science (CSE)
        </div>

        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, cardStyle)}
          onClick={() => navigate("/departments/ece")}
        >
          📡 Electronics & Communication (ECE)
        </div>
      </div>
    </div>
  );
}

export default Departments;