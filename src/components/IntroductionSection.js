
import React from 'react';
import './IntroductionSection.css'; 
import hiking from '../images/hiking.jpg';
import river from '../images/river.jpg';
import wildlife from '../images/wildlife.jfif'; 

const IntroductionSection = () => {
  return (
    <div className="intro-container">
      <h2 className="intro-title">Discover the Mediterranean Beyond the Beaches</h2>
      <p className="intro-text">
        From the tranquil rivers of Tunisia to the green hills of Italy, the Mediterranean offers breathtaking landscapes that await your discovery. Join us as we explore nature's hidden gems across the Mediterranean.
      </p>
      
      <div className="intro-icons">
        <div className="icon-item">
          <img src={hiking} alt="Hiking" className="icon-img"/>
          <p>Hiking Trails</p>
        </div>
        <div className="icon-item">
          <img src={river} alt="River Tours" className="icon-img"/>
          <p>River Tours</p>
        </div>
        <div className="icon-item">
          <img src={wildlife} alt="Vineyards" className="icon-img"/>
          <p>Vineyard Visits</p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
