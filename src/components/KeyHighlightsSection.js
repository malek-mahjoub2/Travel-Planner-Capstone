// src/components/KeyHighlightsSection.js

import React from 'react';
import './KeyHighlightsSection.css'; // CSS for styling
import { Link } from 'react-router-dom'; // To navigate to other sections

const KeyHighlightsSection = () => {
  return (
    <div className="highlights-container">
      <h2 className="highlights-title">Key Natural Highlights of the Mediterranean</h2>
      
      <div className="country-grid">
        <div className="country-item">
          <h3>Tunisia</h3>
          <p>Explore the beaches, tranquil rivers, and national parks like Ichkeul National Park and Chott el Jerid.</p>
          <Link to="/tunisia" className="explore-btn">Explore Tunisia's Wonders</Link>
        </div>
        
        <div className="country-item">
          <h3>Greece</h3>
          <p>Discover the stunning mountain trails of Crete and Pelion, perfect for trekking and nature exploration.</p>
          <Link to="/greece" className="explore-btn">Discover Greece's Trails</Link>
        </div>

        <div className="country-item">
          <h3>Italy</h3>
          <p>Venture through the rugged mountains and nature reserves of the Dolomites and Amalfi Coast.</p>
          <Link to="/italy" className="explore-btn">Explore Italy’s Natural Beauty</Link>
        </div>

        <div className="country-item">
          <h3>Spain</h3>
          <p>Visit the Sierra Nevada mountains, the coastal forests of Costa Brava, and the natural beauty of the Balearic Islands.</p>
          <Link to="/spain" className="explore-btn">Discover Spain's Natural Wonders</Link>
        </div>
      </div>
    </div>
  );
};

export default KeyHighlightsSection;
