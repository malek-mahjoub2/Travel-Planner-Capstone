// Imports should be at the top level
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css'; // Importing styles
import nature from '../videos/nature.mp4'; // Importing video

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Handle the navigation to the "Plan Your Trip" page
  const handlePlanClick = () => {
    navigate('/plan-your-trip'); // Navigate to the Plan Your Trip page
  };

  return (
    <div className="hero-container">
      <video autoPlay loop playsInline className="hero-video">
        <source src={nature} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <p className="hero-subtitle">Discover tranquil rivers, green valleys, and sun-kissed coasts.</p>
        <button className="hero-btn" onClick={handlePlanClick}>
          Plan Your Natural Escape
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
