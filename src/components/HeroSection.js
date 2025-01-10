import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
import background from '../videos/background.mp4'; 

const HeroSection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    };
        
        
    const handleSearchSubmit = (event) => {
      event.preventDefault();
      
      
      switch (searchQuery.toLowerCase()) {
        case 'tunisia':
          navigate('/tunisia');
          break;
        case 'greece':
          navigate('/greece');
          break;
        case 'spain':
          navigate('/spain');
          break;
        case 'italy':
          navigate('/italy');
          break;
        default:
          alert('Oops! We don\'t have information on that destination yet. Please try another destination or contact us for personalized recommendations!');
      }};
  
  // Handle navigation to itinerary section
  const handlePlanClick = () => {
    navigate('/itinerary'); 
  };

  const handleContactClick = () => {
    navigate('/contact'); 
  };

  return (
    <div className="hero-container">
      <video autoPlay loop playsInline className="hero-video">
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-search">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search destinations..."
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <div className="hero-content">
        <h3 className="hero-subtitle">
          Live Your Dream Travel With Us
        </h3>
        <button className="hero-btn" onClick={handlePlanClick}>
          Plan Your Natural Escape
        </button>
        <button className="hero-btn-transparent" onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
