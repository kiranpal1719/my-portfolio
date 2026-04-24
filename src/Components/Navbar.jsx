import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">PORTFOLIO</div>
      
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#home">HOME</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;