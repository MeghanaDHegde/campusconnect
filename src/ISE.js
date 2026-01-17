import React from "react";
import BackButton from "./BackButton";

const InformationScience = () => {
  return (
    <div className="dept-detail-page">
      <BackButton />

      <h1 className="dept-name">
        Information Science & Engineering
      </h1>

      <p className="dept-intro">
        The Information Science and Engineering programme at RVCE offers
        B.E. (Intake: 135), M.Tech. programmes in Software Engineering and
        Information Technology, and research degrees including M.Sc. (Engg.),
        Ph.D. and Integrated Ph.D., fostering a strong academic and research
        ecosystem.
      </p>

      <p className="dept-intro">
        With a focus on Artificial Intelligence, Internet of Things (IoT),
        Cloud Computing, and Cybersecurity, the programme blends academic
        rigour with strong industry relevance. It is supported by a
        VTU-recognised research centre and industry partnerships with
        Microsoft, Nvidia, and HP.
      </p>

      <p className="dept-intro">
        Students gain hands-on experience through centres of excellence,
        real-world projects, and global exposure opportunities. The department
        boasts excellent placement outcomes, with graduates placed in top
        organizations across the globe.
      </p>

      {/* PLACEMENT STATS */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>43</h2>
          <p>Companies Visited</p>
        </div>

        <div className="stat-card">
          <h2>71</h2>
          <p>Offers Made</p>
        </div>

        <div className="stat-card">
          <h2>61</h2>
          <p>Students Selected</p>
        </div>

        <div className="stat-card">
          <h2>19.11 LPA</h2>
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
        <p>JPMC · SAP · Apple · Microsoft.Phonepe</p>
      </div>
    </div>
  );
};

export default InformationScience;