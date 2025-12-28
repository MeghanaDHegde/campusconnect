import React from "react";
import BackButton from "./BackButton";

const ECE = () => {
  return (
    <div className="dept-detail-page">
      <BackButton />

      <h1 className="dept-name">
        Electronics & Communication Engineering (ECE)
      </h1>

      <p className="dept-intro">
        Established in 1972, the autonomous Electronics & Communication
        Engineering Department at RV College of Engineering, affiliated with VTU
        Belagavi, prepares industry-ready graduates for higher education and
        professional careers through a rigorous and interdisciplinary
        curriculum.
      </p>

      <p className="dept-intro">
        The Outcome-Based Education programme spans eight semesters and includes
        mandatory projects, internships, industrial visits and co-curricular
        activities, ensuring holistic student development aligned with evolving
        industry needs.
      </p>

      <p className="dept-intro">
        The department offers B.E. in Electronics & Communication Engineering,
        M.Tech in VLSI Design & Embedded Systems, M.Tech in Communication Systems,
        and PhD/MS programmes through research. All programmes are AICTE approved
        and VTU affiliated, with multiple NBA accreditations.
      </p>

      {/* HOD SECTION */}
      <div className="hod-section">
        <h3>Head of the Department</h3>
        <p>Dr. Ravish Aradhya H V</p>
        <p>HoD, Electronics & Communication Engineering, RVCE</p>
      </div>

      {/* PLACEMENT STATS */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>65</h2>
          <p>Companies Visited</p>
        </div>

        <div className="stat-card">
          <h2>148</h2>
          <p>Offers Made</p>
        </div>

        <div className="stat-card">
          <h2>136</h2>
          <p>Students Selected</p>
        </div>

        <div className="stat-card">
          <h2>16.47 LPA</h2>
          <p>Average Salary</p>
        </div>

        <div className="stat-card highlight">
          <h2>37 LPA</h2>
          <p>Maximum Salary</p>
        </div>
      </div>

      {/* RECRUITERS */}
      <div className="recruiters">
        <h3>Top Recruiters</h3>
        <p>
          TEXAS INSTRUMENTS · ANSYS · BHARTI AIRTEL · ARM SYSTEMS · WIPRO ·
          QUALCOMM · NXP SEMICONDUCTOR
        </p>
      </div>
    </div>
  );
};

export default ECE;
