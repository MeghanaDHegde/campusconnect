import React from "react";
import BackButton from "./BackButton";

const AIML = () => {
  return (
    <div className="dept-detail-page">
      <BackButton />

      <h1 className="dept-name">
        Artificial Intelligence & Machine Learning (AIML)
      </h1>

      <p className="dept-intro">
        Founded in 2021, the Department of Artificial Intelligence & Machine
        Learning at RV College of Engineering provides a strong foundation in
        Computer Science with a focus on AI, ML, NLP and emerging technologies.
        In 2024, the programme was renamed Computer Science Engineering
        (Artificial Intelligence & Machine Learning) to align with industry and
        academic developments.
      </p>

      <p className="dept-intro">
        The programme was launched with an intake of 60 students and was expanded
        to 120 students from 2023 onwards due to high demand. The curriculum
        covers Machine Learning, Deep Learning, Reinforcement Learning, Natural
        Language Processing, Data Science, Computer Vision and more.
      </p>

      <div className="hod-section">
        <h3>Head of Department</h3>
        <p>Dr. Sathish Babu B</p>
        <p>Professor & HoD, Dept. of AI & ML</p>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h2>47</h2>
          <p>Companies Visited</p>
        </div>
        <div className="stat-card">
          <h2>63</h2>
          <p>Offers Made</p>
        </div>
        <div className="stat-card">
          <h2>54</h2>
          <p>Students Selected</p>
        </div>
        <div className="stat-card">
          <h2>17.29 LPA</h2>
          <p>Average Salary</p>
        </div>
        <div className="stat-card highlight">
          <h2>53 LPA</h2>
          <p>Maximum Salary</p>
        </div>
      </div>

      <div className="recruiters">
        <h3>Major Recruiters</h3>
        <p>Microsoft · Oracle · Qualcomm · Fivetran · PhonePe</p>
      </div>
    </div>
  );
};

export default AIML;
