// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className='logo-container'>
        <h1 className='logo'>DBMS (Relational)</h1>
      </div>
      <div className='routes'>
        <Link className='nav-link' to="/">Home</Link> | 
        <Link className='nav-link' to="/about">About</Link> | 
        <Link className='nav-link' to="/contact">Contact</Link>
      </div>

    </nav>
  );
}

export default Navbar;



