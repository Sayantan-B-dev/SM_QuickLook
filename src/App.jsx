// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import "./App.css";

// Import your components
import Home from './components/Home';
import Navbar from './components/Navbar';
import ComputerNetwork from './components/Subject Routes/ComputerNetwork';
import DatabaseManagementSystem from './components/Subject Routes/DatabaseManagementSystem';
import OperatingSystem from './components/Subject Routes/OperatingSystem';
import SoftwareEngineering from './components/Subject Routes/SoftwareEngineering';
import Java from './components/Subject Routes/Java';

function App() {
  return (
    <div className="w-full h-screen">
    <Router>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dbms" element={<DatabaseManagementSystem />} />
          <Route path="/computer_network" element={<ComputerNetwork />} />
          <Route path="/os" element={<OperatingSystem />} />
          <Route path="/software_engineering" element={<SoftwareEngineering />} />
          <Route path="/java" element={<Java />} />
        </Routes>
      </div>  
    </Router>
    </div>
  );
}

export default App;
