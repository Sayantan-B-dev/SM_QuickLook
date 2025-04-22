// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Navbar.css";
import "../CSS/Button.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className='logo-container'>
        <h1 className='logo'>Study Materials</h1>
      </div>
      <div className='routes'>
        <Link className='nav-link' to="/"><button className='btn'>Home</button></Link> |
        <Link className='nav-link' to="/dbms"><button className='btn'>DBMS</button></Link> | 
        <Link className='nav-link' to="/computer_network"><button className='btn'>CN</button></Link> |
        <Link className='nav-link' to="/os"><button className='btn'>OS</button></Link> |
        <Link className='nav-link' to="/software_engineering"><button className='btn'>SE</button></Link> |
        <Link className='nav-link' to="/java"><button className='btn'>JAVA</button></Link>
      </div>

    </nav>
  );
}

export default Navbar;



