import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Departments from "./Departments";
import ASE from "./ASE";
import AIML from "./AIML";
import CSE from "./CSE";
import ECE from "./ECE";
import Placements from "./Placements";
import Admission from "./Admission";
import useVoiceNavigation from "./useVoiceNavigation"; 

import "./App.css";
function VoiceController() {
  useVoiceNavigation();
  return null;
}

function App() { 
  return (
    <Router>
      <VoiceController /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/ase" element={<ASE />} />
        <Route path="/departments/aiml" element={<AIML />} />
        <Route path="/departments/cse" element={<CSE />} />
        <Route path="/departments/ece" element={<ECE />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/admissions" element={<Admission />} />
      </Routes>
    </Router>
  );
}

export default App;
