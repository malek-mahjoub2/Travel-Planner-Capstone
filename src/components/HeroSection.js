import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
import nature from '../videos/nature.mp4'; 
const HeroSection = () => {
  const navigate = useNavigate();

 
  const handlePlanClick = () => {
    navigate('/plan-your-trip');
  };

  return (
    <div className="hero-container">
      <video autoPlay loop playsInline className="hero-video">
        <source src={nature} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <p className="hero-subtitle">
          Discover tranquil rivers, green valleys, and sun-kissed coasts.
        </p>
        <button className="hero-btn" onClick={handlePlanClick}>
          Plan Your Natural Escape
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
