import React from 'react';
import './KeyHighlightsSection.css'; // CSS for styling
import { Link } from 'react-router-dom'; // For navigation
import { FaArrowRight } from 'react-icons/fa'; // For the right arrow icon

// Importing images
import TunisiaBeach from '../images/tunisiaBeach.jpg';
import GreeceBeach from '../images/greeceBeach.jpg';
import ItalyBeach from '../images/italyBeach.jpg';
import SpainBeach from '../images/spainBeach.jpg';

const KeyHighlightsSection = () => {
  return (
    <div className="highlights-container">
      <h1 className="highlights-title">Explore the Natural Wonders of the Mediterranean</h1>
      
      <div className="country-flex">
        <div className="country-item">
          <div className="image-box">
            <img src={TunisiaBeach} alt="Tunisia Beach" className="country-image" />
          </div>
          <h3>Tunisia</h3>
          <p>Explore the beaches, tranquil rivers, and natural parks like Ichkeul National Park and Chott el Jerid.</p>
          <div className="rating">
            <span>⭐⭐⭐⭐</span>
          </div>
          <a href="/tunisia" target="_blank" className="explore-btn">
            View Details <FaArrowRight />
          </a>
        </div>
        
        <div className="country-item">
          <div className="image-box">
            <img src={GreeceBeach} alt="Greece Beach" className="country-image" />
          </div>
          <h3>Greece</h3>
          <p>Discover the stunning mountain trails of Crete and Pelion, ideal for trekking and nature exploration.</p>
          <div className="rating">
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <Link to="/greece" className="explore-btn">
            View Details <FaArrowRight />
          </Link>
        </div>

        <div className="country-item">
          <div className="image-box">
            <img src={ItalyBeach} alt="Italy Beach" className="country-image" />
          </div>
          <h3>Italy</h3>
          <p>Venture through rugged mountains, nature reserves, and the Amalfi Coast’s scenic beauty.</p>
          <div className="rating">
            <span>⭐⭐⭐⭐</span>
          </div>
          <Link to="/italy" className="explore-btn">
            View Details <FaArrowRight />
          </Link>
        </div>

        <div className="country-item">
          <div className="image-box">
            <img src={SpainBeach} alt="Spain Beach" className="country-image" />
          </div>
          <h3>Spain</h3>
          <p>From the Sierra Nevada to Costa Brava, explore the natural beauty and cultural heritage of Spain.</p>
          <div className="rating">
            <span>⭐⭐⭐⭐</span>
          </div>
          <Link to="/spain" className="explore-btn">
            View Details <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KeyHighlightsSection;
