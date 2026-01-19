import React from "react";
import BackButton from "./BackButton";

const Chemical = () => {
  return (
    <div className="dept-detail-page">
      <BackButton to="/departments"/>

      <h1 className="dept-name">
        Chemical Engineering
      </h1>

      <p className="dept-intro">
        The Undergraduate Program (B.E. in Chemical Engineering) was started in
        1982 to address the growing demands of the evolving field of Chemical
        Engineering. The program has consistently received NBA accreditation
        across multiple cycles and is currently accredited for six years since
        2022.
      </p>

      <p className="dept-intro">
        The program provides a strong foundation in core principles such as
        chemical process engineering, equipment design, and process and product
        design, while integrating modern technological advancements including
        the Internet of Things (IoT), Artificial Intelligence (AI), and Big Data.
      </p>

      <p className="dept-intro">
        Students are encouraged to explore both traditional and emerging areas
        such as energy, environment, biotechnology, and sustainable process
        design. The curriculum nurtures critical thinking, innovation, and
        environmental responsibility to prepare graduates for diverse industrial
        careers.
      </p>

      {/* PLACEMENT STATS */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>10</h2>
          <p>Companies Visited</p>
        </div>

        <div className="stat-card">
          <h2>21</h2>
          <p>Offers Made</p>
        </div>

        <div className="stat-card">
          <h2>18</h2>
          <p>Students Selected</p>
        </div>

        <div className="stat-card">
          <h2>9.94 LPA</h2>
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
        <p>Veolia · Aveva · Deloitte · Dalmia Cement.Siemens</p>
      </div>
    </div>
  );
};

export default Chemical;