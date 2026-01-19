import React from "react";
import BackButton from "./BackButton";

const EEE = () => {
  return (
    <div className="dept-detail-page">
      <BackButton to="/departments"/>

      <h1 className="dept-name">
        Electrical & Electronics Engineering
      </h1>

      <p className="dept-intro">
        The B.E. in Electrical and Electronics Engineering (EEE) programme,
        affiliated with Visvesvaraya Technological University (VTU), provides a
        strong foundation in core electrical sciences complemented by modern
        electronics and emerging technologies.
      </p>

      <p className="dept-intro">
        Designed to meet evolving industry requirements, the programme equips
        students with practical skills through advanced laboratories, hands-on
        learning, and strong industry collaborations.
      </p>

      <p className="dept-intro">
        The department has witnessed exceptional placement outcomes, with a
        strong presence of leading global companies offering diverse career
        opportunities in core engineering, semiconductor, and technology
        domains.
      </p>

      {/* PLACEMENT STATS */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>31</h2>
          <p>Companies Visited</p>
        </div>

        <div className="stat-card">
          <h2>40</h2>
          <p>Offers Made</p>
        </div>

        <div className="stat-card">
          <h2>36</h2>
          <p>Students Selected</p>
        </div>

        <div className="stat-card">
          <h2>12.45 LPA</h2>
          <p>Average Salary</p>
        </div>

        <div className="stat-card highlight">
          <h2>30 LPA</h2>
          <p>Maximum Salary</p>
        </div>
      </div>

      {/* RECRUITERS */}
      <div className="recruiters">
        <h3>Top Recruiters & Industry Collaboration</h3>
        <p>
          Tektronix · Boeing · Cisco · Blue Yonder · Walmart · Micron · KPMG ·
          Capgemini · Soroco · Flipkart · Leadsquared · Lilly
        </p>
      </div>
    </div>
  );
};

export default EEE;