import React from "react";
import BackButton from "./BackButton";

const CSEDataScience = () => {
  return (
    <div className="dept-detail-page">
      <BackButton to="/departments"/>

      <h1 className="dept-name">
        Computer Science & Engineering (Data Science)
      </h1>

      <p className="dept-intro">
        The B.E. in Computer Science and Engineering – Data Science is a four-year
        undergraduate program thoughtfully developed to meet the increasing
        demands of the data-centric world. The program was established in the
        academic year 2022–23 with an initial intake of 60 students.
      </p>

      <p className="dept-intro">
        This program integrates foundational computer science concepts with data
        science technologies including machine learning, artificial intelligence,
        data mining, big data analytics, and cloud computing.
      </p>

      <p className="dept-intro">
        Students gain a strong foundation in core computing while developing
        expertise in data analysis, statistical modeling, and intelligent
        systems. The curriculum emphasizes real-world learning through industry
        projects, internships, and hands-on exposure to modern tools and
        platforms.
      </p>

      {/* PLACEMENT / INTERNSHIP STATS */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>15</h2>
          <p>Offers Made</p>
        </div>

        <div className="stat-card">
          <h2>₹1,00,000</h2>
          <p>Maximum Stipend</p>
        </div>

        <div className="stat-card highlight">
          <h2>₹46,500</h2>
          <p>Average Stipend</p>
        </div>
      </div>

      {/* RECRUITERS */}
      <div className="recruiters">
        <h3>Top Recruiters & Industry Collaboration</h3>
        <p>SAP · Arcesium · Microsoft · Texas Instruments</p>
      </div>
    </div>
  );
};

export default CSEDataScience;