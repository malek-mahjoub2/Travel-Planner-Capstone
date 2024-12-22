// TravelOptions.js
import React from 'react';
import './TravelOptions.css'; // Import the CSS file

const TravelOptions = () => {
return (
    <section className="travel-options">
      <div className="travel-option">
        <i class="fa-solid fa-ship"></i>
        <h2>Luxury Tours & Travel</h2>
        <p>Discover the luxury of sailing across the seas</p>
        <button>Book Now</button>
      </div>

      <div className="travel-option">
        <i className="fa-solid fa-plane-departure"></i>
        <h2>Luxury Tours & Travel</h2>
        <p>Take off to your dream destinations</p>
        <button>Book Now</button>
      </div>

      <div className="travel-option">
        <i class="fa-solid fa-bus-simple"></i>
        <h2>Luxury Tours & Travel</h2>
        <p>Explore the world in comfort</p>
        <button>Book Now</button>
      </div>
    </section>
  );
}

export default TravelOptions;
