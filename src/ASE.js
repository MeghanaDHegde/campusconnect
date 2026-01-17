import React from "react";
import BackButton from "./BackButton";
import "./DeptDetail.css";
const ASE = () => {
  return (
    <div className="dept-detail-page">
      <BackButton />

      <h1 className="dept-name">
        Aerospace Engineering (ASE)
      </h1>

      <p className="dept-intro">
        Designed for the future of flight, the Aerospace Engineering programme at
        RV College of Engineering offers a rigorous blend of core engineering
        principles and emerging technologies. Key focus areas include
        Aerodynamics, Propulsion, Flight Mechanics, Aerospace Structures and
        Avionics with emerging fields like Artificial Intelligence and Machine
        Learning.
      </p>

      <p className="dept-intro">
        Students gain hands-on experience through advanced laboratories such as
        Supersonic and Subsonic Wind Tunnels, a 250 kN Universal Testing Machine,
        and the exclusive Crawford Bomb Testing Facility. A key highlight is the
        Boeing India–backed elective on Product Design and Development, adding
        strong industry relevance.
      </p>

      {/* PLACEMENT STATS */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>11</h2>
          <p>Companies Visited</p>
        </div>

        <div className="stat-card">
          <h2>17</h2>
          <p>Offers Made</p>
        </div>

        <div className="stat-card">
          <h2>16</h2>
          <p>Students Selected</p>
        </div>

        <div className="stat-card">
          <h2>9.55 LPA</h2>
          <p>Average Salary</p>
        </div>

        <div className="stat-card highlight">
          <h2>18.33 LPA</h2>
          <p>Maximum Salary</p>
        </div>
      </div>

      {/* RECRUITERS */}
      <div className="recruiters">
        <h3>Major Recruiters</h3>
        <p>
          AIRBUS · BOEING · AMAZON · STELLANTIS · SAFRAN
        </p>
        <p className="placement-note">Placements Ongoing</p>
      </div>
    </div>
  );
};

export default ASE;
