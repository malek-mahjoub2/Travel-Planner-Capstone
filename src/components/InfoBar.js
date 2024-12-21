import React, { useState } from 'react';

function InfoBar() {
  // State for SearchBar
  const [destination, setDestination] = useState('');

  const handleChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search action (you can call a parent function or process it here)
    console.log("Searching for:", destination);
  };

  return (
    <div className="info-bar">
      {/* InfoBar Section */}
      <div className="date-location-weather">
        <span><i className="fas fa-calendar-day"></i> <strong>Date</strong></span>
        <span><i className="fas fa-map-pin"></i> <strong>Location</strong></span>
        <span><i className="fas fa-cloud-sun"></i> <strong>Weather</strong></span>
      </div>

      {/* SearchBar Section */}
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default InfoBar;
