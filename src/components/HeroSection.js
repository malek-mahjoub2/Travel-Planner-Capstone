import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
import background from '../videos/background.mp4'; 

const HeroSection = () => {
  const navigate = useNavigate();

  // Handle navigation to itinerary section
  const handlePlanClick = () => {
    navigate('/itinerary'); // This will take you to the itinerary section
  };

  return (
    <div className="hero-container">
      <video autoPlay loop playsInline className="hero-video">
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <p className="hero-subtitle">
          Discover tranquil rivers, green valleys, and sun-kissed coasts.
        </p>
        <button className="hero-btn" onClick={handlePlanClick}>
          Plan Your Natural Escape
        </button>
        <button className="hero-btn-transparent">Discover More</button>
        <button className="hero-btn-white">Contact Us</button>
      </div>
    </div>
  );
};

export default HeroSection;
