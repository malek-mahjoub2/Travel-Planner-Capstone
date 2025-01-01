import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import './HeroSection.css'; // Import the CSS file for styling
import nature from '../videos/nature.mp4'; // Import the video

const HeroSection = () => {
  const videoRef = useRef(null); // Create a reference for the video element
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Handle video play/pause on click
  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play(); // Play the video if it's paused
    } else {
      videoRef.current.pause(); // Pause the video if it's playing
    }
  };

  // Handle button click to navigate to the "Plan Your Trip" page
  const handlePlanClick = () => {
    navigate('/plan-your-trip'); // Navigate to the travel planner page
  };

  return (
    <div className="hero-container">
      <video
        ref={videoRef} // Attach the reference to the video element
        autoPlay
        loop
        playsInline
        className="hero-video"
        onClick={handleVideoClick} 
      >
        <source src={nature} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content-top">
        <h3 className="hero-title-top">Escape to the Heart of Nature – The Mediterranean Awaits</h3>
      </div>
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
