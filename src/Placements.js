import React from "react";
import BackButton from "./BackButton";
import "./Placements.css";

const Placements = () => {
  return (
    <div className="dept-detail-page">
      <BackButton />

      <h1 className="dept-name">Placement & Training Department</h1>

      {/* INTRO */}
      <p className="dept-intro">
        The academic excellence at RV College of Engineering is reflected in its
        students’ exemplary placement record in corporate and engineering
        sectors.
      </p>

      <p className="dept-intro">
        The department acts as a seamless conduit between industry and institute,
        supplying high-quality technical manpower.
      </p>

      {/* ABOUT */}
      <h3 className="section-title">About Placement & Training</h3>

      <div className="placard-row">
        <div className="placard-card">
          <h4>Establishment & Role</h4>
          <p>
            Established in 1997, the department functions as a dedicated unit for
            student career development and industry collaboration.
          </p>
        </div>

        <div className="placard-card">
          <h4>Industry Reach</h4>
          <p>
            Coordinates with over 200 leading organizations recruiting Engineers,
            GETs and PGETs across multiple domains.
          </p>
        </div>

        <div className="placard-card">
          <h4>Recruitment Scale</h4>
          <p>
            From 30 companies initially, RVCE now hosts nearly 200 recruiters
            annually with more than 1200 offers.
          </p>
        </div>

        <div className="placard-card">
          <h4>Infrastructure</h4>
          <p>
            A dedicated Placement & Training block with seminar halls, interview
            rooms and discussion spaces ensures smooth recruitment.
          </p>
        </div>
      </div>

      {/* SOFT SKILLS */}
      <h3 className="section-title">Soft Skill Training Programme</h3>

      <div className="placard-row">
        <div className="placard-card">
          <h4>Life Skills & Career Orientation</h4>
          <p>
            A structured 72-hour programme across 2nd and 3rd years focuses on
            communication, attitude and workplace readiness.
          </p>
        </div>

        <div className="placard-card">
          <h4>Expert-Led Training</h4>
          <p>
            36 hours of professional training delivered by experienced partners
            in personality development and career readiness.
          </p>
        </div>
      </div>

      {/* VALUE ADDED */}
      <h3 className="section-title">Value-Added Activities</h3>

      <div className="placard-row">
        <div className="placard-card">
          <h4>Skill Enhancement</h4>
          <p>
            Personality development, technology training and bridge courses
            aligned with current industry needs.
          </p>
        </div>

        <div className="placard-card">
          <h4>Pre-Placement Training</h4>
          <p>
            Industry talks, mock tests, interview preparation, senior mentoring
            and guidance for CAT, GMAT and aptitude exams.
          </p>
        </div>
      </div>

      {/* CAREER GUIDANCE */}
      <h3 className="section-title">Career Guidance & Higher Education</h3>

      <div className="placard-row">
        <div className="placard-card">
          <h4>Higher Education Support</h4>
          <p>
            Acts as a nodal agency for higher education guidance with frequent
            international university visits.
          </p>
        </div>

        <div className="placard-card">
          <h4>Mentoring & Opportunities</h4>
          <p>
            Guidance for higher studies, entrepreneurship, internships and
            research pathways.
          </p>
        </div>
      </div>

      {/* SCHOLARSHIPS */}
      <h3 className="section-title">Scholarships</h3>

      <div className="placard-row">
        <div className="placard-card">
          <h4>Merit-Cum-Means Support</h4>
          <p>
            Corporate-sponsored scholarships worth ₹72,00,000 awarded annually to
            nearly 110 students.
          </p>
        </div>

        <div className="placard-card">
          <h4>Corporate Partners</h4>
          <p>
            ABB, CTS, FFE, Devon, Boeing and other reputed organizations.
          </p>
        </div>
      </div>

      {/* CONTACT */}
      <h3 className="section-title">Contact Details</h3>

      <div className="placard-row">
        <div className="placard-card">
          <h4>Dr. D. Ranganath</h4>
          <p>
            Dean – Placement & Training <br />
            📞 9886130504 <br />
            ☎️ 080-6818-8269
          </p>
        </div>

        <div className="placard-card">
          <h4>Dr. Shilpa D. R</h4>
          <p>
            Associate Dean – Placement & Training <br />
            📞 8310360414 <br />
            ☎️ 080-6818-8269 / 8270
          </p>
        </div>

        <div className="placard-card">
          <h4>Dr. Ramaa A</h4>
          <p>
            Associate Dean – Placement & Training <br />
            📞 9886846831 <br />
            ☎️ 080-6818-8269 / 8270
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>262</h2>
          <p>B.E. Companies Visited</p>
        </div>
        <div className="stat-card">
          <h2>826</h2>
          <p>B.E. Offers Made</p>
        </div>
        <div className="stat-card">
          <h2>735</h2>
          <p>B.E. Students Selected</p>
        </div>
        <div className="stat-card">
          <h2>15.24 LPA</h2>
          <p>B.E. Average Salary</p>
        </div>
        <div className="stat-card highlight">
          <h2>67 LPA</h2>
          <p>B.E. Maximum Salary</p>
        </div>
      </div>

      {/* RECRUITERS */}
      <div className="recruiters">
        <h3>Placements Ongoing</h3>
        <p>
          Microsoft · Oracle · Boeing India · Arcesium · Dell · Deutsche Bank ·
          HPE · JPMC · Qualcomm · Samsung · SAP · Texas Instruments · Walmart
        </p>
      </div>
    </div>
  );
};

export default Placements;