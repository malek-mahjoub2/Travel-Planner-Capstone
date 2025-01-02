import React from 'react';
import './KeyHighlightsSection.css'; // CSS for styling
import { Link } from 'react-router-dom'; // For navigation
import { FaArrowRight } from 'react-icons/fa'; // For the arrow icon

const KeyHighlightsSection = () => {
  return (
    <div className="highlights-container">
      <h1 className="highlights-main-title">Discover the Mediterranean's Best Natural Highlights</h1>
      
      <div className="country-grid">
        <div className="country-item">
          <div className="country-image">
            <img src="images/tunisiaBeach.jpg" alt="Tunisia Beach" />
          </div>
          <div className="country-info">
            <h3>Tunisia</h3>
            <p>Explore the stunning beaches and tranquil rivers, such as Ichkeul National Park and Chott el Jerid.</p>
            <div className="rating">
              <span>★★★★☆</span>
              <span>4.5/5</span>
            </div>
            <Link to="/tunisia" className="explore-btn">
              View Details <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="country-item">
          <div className="country-image">
            <img src="images/greeceBeach.jpg" alt="Greece Beach" />
          </div>
          <div className="country-info">
            <h3>Greece</h3>
            <p>Discover the stunning mountain trails of Crete and Pelion, perfect for trekking and nature exploration.</p>
            <div className="rating">
              <span>★★★★★</span>
              <span>5/5</span>
            </div>
            <Link to="/greece" className="explore-btn">
              View Details <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="country-item">
          <div className="country-image">
            <img src="images/italyBeach.jpg" alt="Italy Beach" />
          </div>
          <div className="country-info">
            <h3>Italy</h3>
            <p>Venture through the rugged mountains and breathtaking reserves, like the Dolomites and Amalfi Coast.</p>
            <div className="rating">
              <span>★★★★☆</span>
              <span>4.2/5</span>
            </div>
            <Link to="/italy" className="explore-btn">
              View Details <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="country-item">
          <div className="country-image">
            <img src="images/spainBeach.jpg" alt="Spain Beach" />
          </div>
          <div className="country-info">
            <h3>Spain</h3>
            <p>Explore the Sierra Nevada mountains, Costa Brava's coastal forests, and the natural beauty of the Balearic Islands.</p>
            <div className="rating">
              <span>★★★★☆</span>
              <span>4.3/5</span>
            </div>
            <Link to="/spain" className="explore-btn">
              View Details <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyHighlightsSection;
