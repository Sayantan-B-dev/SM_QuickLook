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

const AppRoutes = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dbms" element={<DatabaseManagementSystem />} />
        <Route path="/computer_network" element={<ComputerNetwork />} />
        <Route path="/os" element={<OperatingSystem />} />
        <Route path="/software_engineering" element={<SoftwareEngineering />} />
        <Route path="/java" element={<Java />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
