import React from 'react';
import logo from '../images/logo.jpg'; 
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Tours</a></li>
        <li><a href="#">Destinations</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Sign Up</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
