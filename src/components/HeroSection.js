// src/components/HeroSection.js

import React, { useRef } from 'react';
import './HeroSection.css'; // Import the CSS file for styling
import nature from '../videos/nature.mp4'; // Import the video

const HeroSection = () => {
  const videoRef = useRef(null); // Create a reference for the video element

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play(); // Play the video if it's paused
    } else {
      videoRef.current.pause(); // Pause the video if it's playing
    }
  };

  return (
    <div className="hero-container">
      <video
        ref={videoRef} // Attach the reference to the video element
        autoPlay
        loop
        playsInline
        className="hero-video"
        onClick={handleVideoClick} // Add the click event handler
      >
        <source src={nature} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content-top">
        <h3 className="hero-title-top">Escape to the Heart of Nature – The Mediterranean Awaits</h3>
      </div>
      <div className="hero-content">
        
        <p className="hero-subtitle">Discover tranquil rivers, green valleys, and sun-kissed coasts.</p>
        <button className="hero-btn">Plan Your Natural Escape</button>
      </div>
    </div>
  );
};

export default HeroSection; // Ensure this is included at the bottom
