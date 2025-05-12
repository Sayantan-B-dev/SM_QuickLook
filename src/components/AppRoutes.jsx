// AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import DatabaseManagementSystem from '../pages/DatabaseManagementSystem';
import ComputerNetwork from '../pages/ComputerNetwork';
import OperatingSystem from '../pages/OperatingSystem';
import SoftwareEngineering from '../pages/SoftwareEngineering';
import Java from '../pages/Java';
import "../CSS/AppRoutes.css";

import DiplomaJAVA from "../features/subjects/java/notes/DiplomaJAVA"

const AppRoutes = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dbms" element={<DatabaseManagementSystem />} />
        <Route path="/cn" element={<ComputerNetwork />} />
        <Route path="/os" element={<OperatingSystem />} />
        <Route path="/se" element={<SoftwareEngineering />} />
        <Route path="/java" element={<Java />} />
        <Route path="/diploma-java" element={<DiplomaJAVA />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
