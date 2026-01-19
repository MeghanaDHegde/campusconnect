import React from "react";
import BackButton from "./BackButton";

const CSE = () => {
  return (
    <div className="dept-detail-page">
      <BackButton to="/departments"/>

      <h1 className="dept-name">
        Computer Science & Engineering (CSE)
      </h1>

      <p className="dept-intro">
        The Department of Computer Science & Engineering at RV College of
        Engineering offers B.E. and M.Tech. programmes that combine strong
        theoretical foundations with hands-on learning. Backed by IEEE-CS, the
        department features a modern curriculum and state-of-the-art
        infrastructure.
      </p>

      <p className="dept-intro">
        Faculty actively integrate research into teaching, enriching the student
        learning experience. With over INR 1 Crore in research funding and nearly
        550 publications in the last five years, the department stands as a hub
        of innovation and academic excellence.
      </p>

      <p className="dept-intro">
        As part of the Dean’s CSE Cluster, the department fosters a dynamic
        learning environment bridging cutting-edge technology with real-world
        problem-solving through AI, ML, Cyber Security, Data Science and more.
      </p>


      {/* PLACEMENT STATS */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>81</h2>
          <p>Companies Visited</p>
        </div>

        <div className="stat-card">
          <h2>190</h2>
          <p>Offers Made</p>
        </div>

        <div className="stat-card">
          <h2>166</h2>
          <p>Students Selected</p>
        </div>

        <div className="stat-card">
          <h2>19.73 LPA</h2>
          <p>Average Salary</p>
        </div>

        <div className="stat-card highlight">
          <h2>67 LPA</h2>
          <p>Maximum Salary</p>
        </div>
      </div>

      {/* RECRUITERS */}
      <div className="recruiters">
        <h3>Top Recruiters & Industry Collaboration</h3>
        <p>Texas Instruments · SAP · Microsoft</p>
      </div>
    </div>
  );
};

export default CSE;
