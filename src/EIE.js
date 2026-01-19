import React from "react";
import BackButton from "./BackButton";

const EIE = () => {
  return (
    <div className="dept-detail-page">
      <BackButton to="/departments"/>

      <h1 className="dept-name">
        Electronics & Instrumentation Engineering
      </h1>

      <p className="dept-intro">
        The B.E. programme in Electronics and Instrumentation Engineering,
        formerly known as Instrumentation Technology, was introduced in 1981
        with an initial intake of 40 students and currently admits 60 students
        annually.
      </p>

      <p className="dept-intro">
        Renamed in 2014 to reflect its expanding scope, the programme features
        an industry-aligned curriculum that is regularly updated and supports
        advanced research through Ph.D. opportunities.
      </p>

      <p className="dept-intro">
        Modern laboratories equipped with cutting-edge technology enable
        hands-on learning and innovation. The programme has received multiple
        NBA accreditations, with the most recent accreditation granted in 2024,
        reaffirming its academic excellence and industry relevance.
      </p>

      {/* PLACEMENT STATS */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>27</h2>
          <p>Companies Visited</p>
        </div>

        <div className="stat-card">
          <h2>53</h2>
          <p>Offers Made</p>
        </div>

        <div className="stat-card">
          <h2>46</h2>
          <p>Students Selected</p>
        </div>

        <div className="stat-card">
          <h2>11.77 LPA</h2>
          <p>Average Salary</p>
        </div>

        <div className="stat-card highlight">
          <h2>37 LPA</h2>
          <p>Maximum Salary</p>
        </div>
      </div>

      {/* RECRUITERS */}
      <div className="recruiters">
        <h3>Top Recruiters & Industry Collaboration</h3>
        <p>Baxter · IBM · Société Générale · Airbus.Oracle</p>
      </div>
    </div>
  );
};

export default EIE;