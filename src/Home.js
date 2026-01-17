import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const slides = [
  {
    title: "Welcome to",
    highlight: "RVCE",
    subtitle: "Shaping Tomorrow's Engineers Since 1963",
    badge: "NAAC A++ Accredited",
    image: "/images/bg-campus.jpg",
  },
  {
    title: "Innovation",
    highlight: "Hub",
    subtitle: "State-of-the-art laboratories and research facilities",
    badge: "15+ Research Centers",
    image: "/images/bg-lab.jfif",
  },
  {
    title: "Success",
    highlight: "Stories",
    subtitle: "95% placement rate with top global companies",
    badge: "₹92 LPA Highest Package",
    image: "/images/bg-success.jfif",
  },
];

const achievements = [
  { icon: "⭐", title: "NAAC A++ Accreditation", desc: "Highest grade awarded by National Assessment and Accreditation Council", year: "2024" },
  { icon: "🏅", title: "NIRF Rank #99", desc: "Consistently ranked among top 100 engineering institutions in India", year: "2024" },
  { icon: "🌐", title: "₹92 LPA Highest Package", desc: "Top recruiters include Google, Microsoft, Amazon, and leading MNCs", year: "2024" },
  { icon: "🚀", title: "VTU Autonomous Status", desc: "Academic freedom to design curriculum and conduct examinations", year: "Since 2007" },
  { icon: "📖", title: "62 Years of Excellence", desc: "Established in 1963, pioneering engineering education in Karnataka", year: "Since 1963" },
  { icon: "👥", title: "Distinguished Alumni Network", desc: "Graduates leading innovation at global tech giants and startups", year: "50,000+" },
];

const stats = [
  { val: "#99", label: "NIRF Ranking 2024", color: "#FFC107" },
  { val: "A++", label: "NAAC Accreditation", color: "#00A3FF" },
  { val: "5,800+", label: "Students", color: "#00C853" },
  { val: "15", label: "UG Programs", color: "#9C27B0" },
  { val: "400+", label: "Recruiting Companies", color: "#FF5722" },
  { val: "95%", label: "Placement Rate", color: "black" },
];

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-container">
      {/* --- HERO SECTION --- */}
      <div className="home-wrapper" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
        <div className="overlay"></div>
        <header className="top-bar">
          <div className="logo-section">
          </div>
          <div className="header-info">
            <span>📍 Mysuru Road, Bengaluru</span>
            <span>🕒 Est. 1963</span>
          </div>
        </header>

        <main className="hero-content">
          <div className="info-badge">{slides[currentSlide].badge}</div>
          <h1 className="hero-title">
            {slides[currentSlide].title} <span className="yellow-text">{slides[currentSlide].highlight}</span>
          </h1>
          <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
          <div className="button-group">
            <button className="btn-primary" onClick={() => navigate("/departments")}>Departments</button>
            <button className="btn-secondary" onClick={() => navigate("/placements")}>Placements</button>
            <button className="btn-secondary" onClick={() => navigate("/admissions")}>Admissions</button>
          </div>
        </main>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <div key={index} className={`dot ${index === currentSlide ? "active" : ""}`} onClick={() => setCurrentSlide(index)}></div>
          ))}
        </div>
      </div>

      {/* --- EXCELLENCE IN NUMBERS SECTION --- */}
      <section className="stats-section">
        <h2 className="section-title"><span className="yellow-text">Excellence in Numbers</span></h2>
        <p className="section-subtitle">Six decades of shaping engineers who transform industries</p>
        <div className="stats-grid">
          {stats.map((item, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: item.color }}>{item.icon}</div>
              <h3>{item.val}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ACHIEVEMENTS SECTION --- */}
      <section className="achievements-section">
        <h2 className="section-title"><span className="yellow-text">Achievements & Accolades </span> </h2>
        <p className="section-subtitle">Recognitions that validate our commitment to excellence</p>
        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <div key={i} className="achievement-card">
              <div className="card-header">
                <div className="icon-box">{item.icon}</div>
                <span className="year-tag">{item.year}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;