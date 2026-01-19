import React from "react";
import BackButton from "./BackButton";

const CSECybersecurity = () => {
  return (
    <div className="dept-detail-page">
      <BackButton to="/departments"/>

      <h1 className="dept-name">
        Computer Science & Engineering (Cybersecurity)
      </h1>

      <p className="dept-intro">
        The CSE (Cybersecurity) programme provides specialized training designed
        to equip students with the skills required to reshape and strengthen an
        organization’s security strategy in an increasingly digital world.
      </p>

      <p className="dept-intro">
        The comprehensive curriculum covers cryptography, API security,
        encryption, software security, network security, identity and access
        management, cloud security, and hardware security.
      </p>

      <p className="dept-intro">
        Students also gain expertise in malware analysis, ransomware defense,
        vulnerability assessment, and penetration testing. Graduates are
        well-prepared to tackle evolving cybersecurity challenges and safeguard
        organizational assets against cyber threats.
      </p>

      {/* PLACEMENT / INTERNSHIP STATS */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>13</h2>
          <p>Offers Made</p>
        </div>

        <div className="stat-card">
          <h2>₹50,000</h2>
          <p>Maximum Stipend</p>
        </div>

        <div className="stat-card highlight">
          <h2>₹41,250</h2>
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

export default CSECybersecurity;