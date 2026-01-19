import React from "react";
import BackButton from "./BackButton";

const ETE = () => {
  return (
    <div className="dept-detail-page">
      <BackButton to="/departments"/>

      <h1 className="dept-name">
        Electronics & Telecommunication Engineering
      </h1>

      <p className="dept-intro">
        The Electronics and Telecommunication Engineering (ETE) programme focuses
        on providing a strong foundation in the core areas of telecommunication
        engineering through a systematically designed curriculum delivered by
        eminent faculty members.
      </p>

      <p className="dept-intro">
        The curriculum follows the Outcome Based Education (OBE) framework and
        emphasizes not only core domain knowledge but also practical skills
        through interdisciplinary projects, industry internships, and hands-on
        laboratory work.
      </p>

      <p className="dept-intro">
        In addition, the programme enhances professional and ethical skills
        through specialized courses. Graduates of ETE are employed in diverse
        roles such as R&D Engineer, Hardware Engineer, Software Engineer, and
        Embedded Engineer across leading global organizations.
      </p>

      {/* PLACEMENT STATS */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>210</h2>
          <p>Companies Visited</p>
        </div>

        <div className="stat-card">
          <h2>54</h2>
          <p>Offers Made</p>
        </div>

        <div className="stat-card">
          <h2>40</h2>
          <p>Students Selected</p>
        </div>

        <div className="stat-card">
          <h2>11.13 LPA</h2>
          <p>Average Salary</p>
        </div>

        <div className="stat-card highlight">
          <h2>50 LPA</h2>
          <p>Maximum Salary</p>
        </div>
      </div>

      {/* RECRUITERS */}
      <div className="recruiters">
        <h3>Top Recruiters & Industry Collaboration</h3>
        <p>
          Texas Instruments · Western Digital Corporation · Qualcomm ·
          Sigmoid Analytics · SAP India
        </p>
      </div>
    </div>
  );
};

export default ETE;