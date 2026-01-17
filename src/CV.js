import React from "react";
import BackButton from "./BackButton";

const Civil = () => {
  return (
    <div className="dept-detail-page">
      <BackButton />

      <h1 className="dept-name">
        Civil Engineering
      </h1>

      <p className="dept-intro">
        The Department of Civil Engineering, established in 1963, has grown into
        a full-fledged department offering specializations across all major
        branches of civil engineering. The department offers one Undergraduate
        program (B.E. in Civil Engineering) and two Postgraduate programs
        (M.Tech in Structural Engineering and M.Tech in Highway Technology).
      </p>

      <p className="dept-intro">
        All programs are accredited by NBA. Recognized as a Research Centre under
        Visvesvaraya Technological University (VTU), the department supports
        research leading to M.Sc (Engg) and Ph.D. degrees, fostering advanced
        academic and industrial research.
      </p>

      <p className="dept-intro">
        Faculty members actively guide doctoral research for both full-time
        scholars and in-service engineers, and consistently publish research
        papers in reputed national and international journals and conferences,
        contributing significantly to the advancement of civil engineering.
      </p>

      {/* PLACEMENT STATS */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>14</h2>
          <p>Companies Visited</p>
        </div>

        <div className="stat-card">
          <h2>38</h2>
          <p>Offers Made</p>
        </div>

        <div className="stat-card">
          <h2>35</h2>
          <p>Students Selected</p>
        </div>

        <div className="stat-card">
          <h2>7.03 LPA</h2>
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
        <p>Fischer · Fluidyn · TCE · Dar Al · Sobha</p>
      </div>
    </div>
  );
};

export default Civil;