import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // 🔹 extra logic

  return (
    <div className="home-container">
      <h1 className="title">CampusConnect</h1>
      <p className="subtitle">
        Contactless Gesture & Voice Enabled University Kiosk
      </p>

      <div className="button-container">
        <button
          className="nav-button"
          onClick={() => navigate("/departments")} // 🔹 selection logic
        >
          Departments
        </button>

        <button className="nav-button" onClick={() => navigate("/admissions")}>
          Admissions
        </button>

        <button className="nav-button" onClick={() => navigate("/placements")}>
  Placements
</button>

      </div>
    </div>
  );
};

export default Home;
