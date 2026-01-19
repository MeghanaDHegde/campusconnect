import React from "react";
import BackButton from "./BackButton";

const IEM = () => {
  return (
    <div className="dept-detail-page">
      <BackButton to="/departments"/>

      <h1 className="dept-name">
        Industrial Engineering & Management
      </h1>

      <p className="dept-intro">
        The Industrial Engineering and Management programme at RV College of
        Engineering was introduced in 1980 and gained its identity as an
        independent discipline in 1985. Renamed in 1992, the programme blends
        engineering principles with management practices to meet evolving
        industry demands.
      </p>

      <p className="dept-intro">
        The programme is offered as an autonomous undergraduate programme under
        Visvesvaraya Technological University (VTU) and is accredited by the
        National Board of Accreditation. Postgraduate and research opportunities
        include M.Sc (Engg.) and Ph.D. programmes under VTU.
      </p>

      <p className="dept-intro">
        Strong industry linkages are fostered through associations with
        professional bodies such as IIIE, ORSI, IIMM, SIVAM, NIQR, QCFI, and ISQ.
        These collaborations enhance practical learning and industry readiness
        among students.
      </p>

      {/* PLACEMENT STATS */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>12</h2>
          <p>Companies Visited</p>
        </div>

        <div className="stat-card">
          <h2>30</h2>
          <p>Offers Made</p>
        </div>

        <div className="stat-card">
          <h2>27</h2>
          <p>Students Selected</p>
        </div>

        <div className="stat-card">
          <h2>12.46 LPA</h2>
          <p>Average Salary</p>
        </div>

        <div className="stat-card highlight">
          <h2>21.45 LPA</h2>
          <p>Maximum Salary</p>
        </div>
      </div>

      {/* RECRUITERS */}
      <div className="recruiters">
        <h3>Top Recruiters & Industry Collaboration</h3>
        <p>
          Deloitte · Micron · Licious · Skyworks · JPMC
        </p>
      </div>
    </div>
  );
};

export default IEM;