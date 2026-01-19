import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Departments from "./Departments";
import ASE from "./ASE";
import AIML from "./AIML";
import CSE from "./CSE";
import ECE from "./ECE";
import BT from "./BT";
import CH from "./CH";
import CV from "./CV";
import ISE from "./ISE";
import ME from "./ME";
import CY from "./CY";
import DS from "./DS";
import EEE from "./EEE";
import EIE from "./EIE";
import IEM from "./IEM";
import ETE from "./ETE";
import Placements from "./Placements";


import useVoiceNavigation from "./useVoiceNavigation"; 


import Admission from "./Admission";


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
        <Route path="/departments/bt" element={<BT />} />
        <Route path="/departments/ch" element={<CH />} />
        <Route path="/departments/cv" element={<CV />} />
        <Route path="/departments/ise" element={<ISE />} />
        <Route path="/departments/me" element={<ME />} />
        <Route path="/departments/cyber" element={<CY />} />
        <Route path="/departments/ds" element={<DS />} />
        <Route path="/departments/eee" element={<EEE />} />
        <Route path="/departments/eie" element={<EIE />} />
        <Route path="/departments/iem" element={<IEM />} />
        <Route path="/departments/ete" element={<ETE />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/admissions" element={<Admission />} />
        
      </Routes>
    </Router>
  );
}


export default App;
