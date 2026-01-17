import React from "react";
import BackButton from "./BackButton";

const Biotechnology = () => {
  return (
    <div className="dept-detail-page">
      <BackButton />

      <h1 className="dept-name">
        Biotechnology Engineering
      </h1>

      <p className="dept-intro">
        Biotechnology is transforming how we understand and shape life—driving
        solutions in health, food, energy, and the environment. At the Department
        of Biotechnology, we don’t just follow this change—we help lead it.
      </p>

      <p className="dept-intro">
        Since its inception in 2002, the department has evolved into a dynamic
        hub for cutting-edge research and transformative education. Affiliated
        with Visvesvaraya Technological University (VTU), Belagavi, the department
        offers undergraduate, postgraduate, and doctoral programmes.
      </p>

      <p className="dept-intro">
        Backed by modern infrastructure, advanced laboratories, and strong
        research funding, students and faculty collaborate at the frontiers of
        science to create meaningful and lasting impact across healthcare,
        industry, and environmental sustainability.
      </p>

      {/* PLACEMENT STATS */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>5</h2>
          <p>Companies Visited</p>
        </div>

        <div className="stat-card">
          <h2>8</h2>
          <p>Offers Made</p>
        </div>

        <div className="stat-card">
          <h2>8</h2>
          <p>Students Selected</p>
        </div>

        <div className="stat-card">
          <h2>9.28 LPA</h2>
          <p>Average Salary</p>
        </div>

        <div className="stat-card highlight">
          <h2>14.81 LPA</h2>
          <p>Maximum Salary</p>
        </div>
      </div>

      {/* RECRUITERS */}
      <div className="recruiters">
        <h3>Top Recruiters & Industry Collaboration</h3>
        <p>Baxter · Musigma · String Bio Pvt. Ltd · Labcorp</p>
      </div>
    </div>
  );
};

export default Biotechnology;