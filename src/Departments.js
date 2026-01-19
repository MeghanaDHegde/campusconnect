import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import "./Admission.css";
function Departments() {
  const navigate = useNavigate();

  const pageStyle = {
    minHeight: "100vh",
    background: "black",
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
    maxWidth: "1100px",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.12)",
    borderRadius: "16px",
    padding: "24px",
    textAlign: "center",
    fontSize: "16px",
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

  const departments = [
    { name: "✈️ B.E. in Aerospace Engineering", route: "/departments/ase" },
    { name: "🧬 B.E. in Biotechnology", route: "/departments/bt" },
    { name: "⚗️ B.E. in Chemical Engineering", route: "/departments/ch" },
    { name: "🏗️ B.E. in Civil Engineering", route: "/departments/cv" },
    { name: "💻 B.E. in Computer Science and Engineering", route: "/departments/cse" },
    { name: "🤖 B.E. in CSE (Artificial Intelligence & ML)", route: "/departments/aiml" },
    { name: "🛡️ B.E. in CSE (Cyber Security)", route: "/departments/cyber" },
    { name: "📊 B.E. in CSE (Data Science)", route: "/departments/ds" },
    { name: "⚡ B.E. in Electrical & Electronics Engineering", route: "/departments/eee" },
    { name: "📡 B.E. in Electronics & Communication Engineering", route: "/departments/ece" },
    { name: "🎛️ B.E. in Electronics & Instrumentation Engineering", route: "/departments/eie" },
    { name: "🏭 B.E. in Industrial Engineering & Management", route: "/departments/iem" },
    { name: "🖥️ B.E. in Information Science & Engineering", route: "/departments/ise" },
    { name: "⚙️ B.E. in Mechanical Engineering", route: "/departments/me" },
    { name: "📶 B.E. in Electronics & Telecommunication Engineering", route: "/departments/ete" },
  ];

  return (
    <div style={pageStyle}>
      <BackButton />

      <h2 style={titleStyle}>Departments</h2>

      <div style={listStyle}>
        {departments.map((dept, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, cardStyle)}
            onClick={() => navigate(dept.route)}
          >
            {dept.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;
