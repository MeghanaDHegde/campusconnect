import React from "react";
import BackButton from "./BackButton";

const Mechanical = () => {
  return (
    <div className="dept-detail-page">
      <BackButton />

      <h1 className="dept-name">
        Mechanical Engineering
      </h1>

      <p className="dept-intro">
        The Department of Mechanical Engineering at RV College of Engineering,
        Bengaluru, established in 1963, is one of the oldest and most prestigious
        departments of the institution. It has played a pivotal role in RVCE’s
        legacy and is renowned for academic excellence, research, and strong
        industry collaborations.
      </p>

      <p className="dept-intro">
        The department offers a four-year B.E. program in Mechanical Engineering
        along with M.Tech programs in Product Design & Manufacturing (36 intake)
        and Machine Design (18 intake), each spanning two years.
      </p>

      <p className="dept-intro">
        In addition, the department provides MS (by Research) and Ph.D. programs
        with active research opportunities in Materials, Design, and
        Mechatronics, continuing its tradition of innovation and engineering
        advancement.
      </p>

      {/* PLACEMENT STATS */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>39</h2>
          <p>Companies Visited</p>
        </div>

        <div className="stat-card">
          <h2>86</h2>
          <p>Offers Made</p>
        </div>

        <div className="stat-card">
          <h2>80</h2>
          <p>Students Selected</p>
        </div>

        <div className="stat-card">
          <h2>9.22 LPA</h2>
          <p>Average Salary</p>
        </div>

        <div className="stat-card highlight">
          <h2>18.33 LPA</h2>
          <p>Maximum Salary</p>
        </div>
      </div>

      {/* RECRUITERS */}
      <div className="recruiters">
        <h3>Top Recruiters & Industry Collaboration</h3>
        <p>Baxter · Airbus · Hyundai · UD Trucks.Schneider Electric</p>
      </div>
    </div>
  );
};

export default Mechanical;