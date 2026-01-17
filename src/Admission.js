import React, { useEffect } from "react";
import BackButton from "./BackButton";
import "./Admission.css";

const Admission = () => {
  useEffect(() => {
    const app = document.getElementById("app");
    if (!app) return;

    app.innerHTML = `
      <!-- HERO -->
      <section class="hero">
        <span class="badge">🎓 Academic Year 2025–26</span>
        <h1>Undergraduate Programmes</h1>
        <p>Admissions Information Kiosk</p>

        <div class="hero-cards">
          <div class="mini-card">📘 B.E. Engineering</div>
        </div>
      </section>

      <!-- ELIGIBILITY -->
      <section class="section">
        <h2>Academic Eligibility</h2>
        <p class="subtitle">B.E. Programmes Requirements</p>

        <div class="card-grid">
          <div class="card">
            <span class="tag blue">45% Aggregate</span>
            <h3>General Merit Candidates</h3>
            <ul>
              <li>Passed 2nd PUC / 12th / equivalent with English</li>
              <li>Minimum 45% in Physics & Mathematics</li>
              <li>
                One optional subject:
                Chemistry / Biotechnology / Biology / CS / Electronics
              </li>
            </ul>
          </div>

          <div class="card">
            <span class="tag orange">40% Aggregate</span>
            <h3>SC / ST & OBC (Karnataka)</h3>
            <ul>
              <li>Passed 2nd PUC / 12th / equivalent with English</li>
              <li>Minimum 40% in Physics & Mathematics</li>
              <li>One optional subject from approved list</li>
            </ul>
            <p class="note">
              <i>If Chemistry marks are low, other optional subjects may be considered</i>
            </p>
          </div>
        </div>
      </section>

      <!-- ADMISSION CHANNELS -->
      <section class="section">
        <h2>Admission Channels</h2>
        <p class="subtitle">The different admission pathways</p>

        <div class="list">
          <div class="list-item">
            <div>
              <small>GOVERNMENT QUOTA</small>
              <h4>KEA Quota</h4>
              <p>Karnataka Examinations Authority</p>
            </div>
          </div>

          <div class="list-item">
            <div>
              <small>CONSORTIUM QUOTA</small>
              <h4>COMED-K</h4>
              <p>Consortium of Medical, Engineering & Dental Colleges</p>
            </div>
          </div>

          <div class="list-item">
            <div>
              <small>MANAGEMENT QUOTA</small>
              <h4>Management</h4>
              <p>Direct institutional admission</p>
            </div>
          </div>

          <div class="list-item">
            <div>
              <small>OCI / PIO / NEPAL</small>
              <h4>CIWG / NRI</h4>
              <p>International admissions</p>
            </div>
          </div>
        </div>
      </section>

      <!-- DOCUMENTS -->
      <section class="section">
        <h2>Required Documents</h2>
        <p class="subtitle">Supernumerary Quotas Documentation</p>

        <div class="tabs">
          <button class="tab active" data-type="pio">PIO Quota</button>
          <button class="tab" data-type="nepal">Nepal Citizen</button>
          <button class="tab" data-type="gulf">GULF / CIWG</button>
        </div>

        <div class="docs"></div>
      </section>

      <!-- NOTE -->
      <section class="section">
        <strong>Important Note</strong>
        <p>
          Foreign board students must submit an
          <b> Equivalence Certificate </b>
          issued by the
          <b> Association of Indian Universities (AIU)</b>, New Delhi.
        </p>
      </section>

      <!-- FOOTER -->
      <footer>
        For more information, please contact the Admissions Office
      </footer>
    `;

    const docsData = {
      pio: [
        "10th & 12th Marks Cards",
        "Transfer Certificate (TC)",
        "Migration Certificate",
        "Student Passport & Visa",
        "OCI Card"
      ],
      nepal: [
        "10th & 12th Marks Cards",
        "Transfer Certificate (TC)",
        "Migration Certificate",
        "Student Passport & Visa",
        "Nepal Citizenship Card / Passport",
        "OCI Card"
      ],
      gulf: [
        "10th & 12th Marks Cards",
        "Transfer & Migration Certificate",
        "Parent Employment Proof (Original)",
        "Parent NRI Certificate from Embassy",
        "Parent Passport, Visa / Iqama",
        "Student Passport"
      ]
    };

    const docsContainer = app.querySelector(".docs");
    const tabs = app.querySelectorAll(".tab");

    function renderDocs(type) {
      docsContainer.innerHTML = docsData[type]
        .map(item => `<div class="doc">${item}</div>`)
        .join("");
    }

    // Default load
    renderDocs("pio");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const type = tab.getAttribute("data-type");
        renderDocs(type);
      });
    });
  }, []);

  return (
  <>
    <BackButton />
    <div id="app"></div>
  </>
);

  
};

export default Admission;
