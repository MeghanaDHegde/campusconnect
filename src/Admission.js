import React from "react";
import BackButton from "./BackButton";

const AdmissionsUG = () => {
  return (
    <div className="dept-detail-page">
      <BackButton />

      <h1 className="dept-name">Undergraduate Programmes – Admissions</h1>

      {/* ACADEMIC ELIGIBILITY */}
      <div className="info-card">
        <h3 className="section-title">Academic Eligibility – B.E. Programmes</h3>
      </div>

      <div className="horizontal-card">
        <h4 className="sub-title">General Merit Candidates</h4>
        <ul className="dept-list">
          <li>Passed 2nd PUC / 12th Standard / equivalent with English</li>
          <li>
            Minimum <strong>45% aggregate</strong> in Physics & Mathematics
            (compulsory) plus one optional subject:
            Chemistry / Biotechnology / Biology / Computer Science / Electronics
          </li>
        </ul>
      </div>

      <div className="horizontal-card">
        <h4 className="sub-title">SC / ST & OBC (Karnataka)</h4>
        <ul className="dept-list">
          <li>Passed 2nd PUC / 12th Standard / equivalent with English</li>
          <li>
            Minimum <strong>40% aggregate</strong> in Physics & Mathematics
            (compulsory) plus one optional subject
          </li>
          <li>
            If Chemistry marks are low, marks from Biotechnology / Biology /
            Computer Science / Electronics may be considered
          </li>
        </ul>
      </div>

      {/* ADMISSION CHANNELS */}
      <div className="info-card">
        <h3 className="section-title">Admission Channels</h3>
      </div>

      <div className="admission-grid">
        <div className="stat-card">
          <h3>KEA Quota</h3>
          <p>Government Quota</p>
          <span className="link-text">Visit KEA Website</span>
        </div>

        <div className="stat-card">
          <h3>COMED-K</h3>
          <p>Consortium Quota</p>
          <span className="link-text">Visit COMED-K Website</span>
        </div>

        <div className="stat-card">
          <h3>Management</h3>
          <p>Management Quota</p>
          <span className="link-text">Visit Official Website</span>
        </div>

        <div className="stat-card">
          <h3>CIWG / NRI</h3>
          <p>OCI / PIO / Nepal</p>
          <span className="link-text">Visit Admissions Website</span>
        </div>
      </div>

      {/* DOCUMENTS */}
      <div className="info-card">
        <h3 className="section-title">
          Required Documents – Supernumerary Quotas
        </h3>
      </div>

      <div className="horizontal-card">
        <h4 className="sub-title">PIO Quota</h4>
        <ul className="dept-list">
          <li>10th & 12th Marks Cards</li>
          <li>Transfer Certificate (TC)</li>
          <li>Migration Certificate</li>
          <li>Student Passport & Visa</li>
          <li>OCI Card</li>
        </ul>
      </div>

      <div className="horizontal-card">
        <h4 className="sub-title">Nepal Citizen Quota</h4>
        <ul className="dept-list">
          <li>10th & 12th Marks Cards</li>
          <li>Transfer Certificate (TC)</li>
          <li>Migration Certificate</li>
          <li>Student Passport & Visa</li>
          <li>Nepal Citizenship Card / Passport</li>
          <li>OCI Card</li>
        </ul>
      </div>

      <div className="horizontal-card">
        <h4 className="sub-title">GULF / CIWG Quota</h4>
        <ul className="dept-list">
          <li>10th & 12th Marks Cards</li>
          <li>Transfer Certificate & Migration Certificate</li>
          <li>Parent Employment Proof (Original)</li>
          <li>Parent NRI Certificate from Embassy</li>
          <li>Parent Passport, Visa / Iqama</li>
          <li>Student Passport</li>
        </ul>
      </div>

      {/* NOTE */}
      <div className="info-card highlight-card">
        <p className="dept-desc">
          <strong>Note:</strong> Foreign board students must submit an
          Equivalence Certificate issued by the Association of Indian
          Universities (AIU), New Delhi (if applicable).
        </p>
      </div>
    </div>
  );
};

export default AdmissionsUG;
