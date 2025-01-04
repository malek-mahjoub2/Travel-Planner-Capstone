
import React, { useState } from 'react';
import logo from '../images/logo.jpg'; 
import './Navbar.css'; 
import { Link } from 'react-scroll';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="destinations" smooth={true} duration={500}>Destinations</Link>
        </li>
        <li>
          <Link to="Activities" smooth={true} duration={500}>Activities</Link>
        </li>
        <li>
          <Link to="Itinerary" smooth={true} duration={500}>Itinerary Planner</Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      
      {/* Hamburger icon for mobile */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
