// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import "./App.css";
import "./CSS/imagePopUp.css"


// Import your components
import Navbar from './components/Navbar';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <div className="main">

      <Router>
        <Navbar/>
        <AppRoutes /> 
      </Router>
    </div>
  );
}

export default App;
