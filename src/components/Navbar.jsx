// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Navbar.css";
import "../CSS/Button.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className='logo-container'>
        <h1 className='logo'>DBMS (Relational)</h1>
      </div>
      <div className='routes'>
        <Link className='nav-link' to="/"><button className='btn'>Home</button></Link> | 
        <Link className='nav-link' to="/about"><button className='btn'>About</button></Link> | 
        <Link className='nav-link' to="/contact"><button className='btn'>Contact</button></Link>
      </div>

    </nav>
  );
}

export default Navbar;



