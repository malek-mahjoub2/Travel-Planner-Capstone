import React from 'react';

function InfoBar() {
  return (
    <div className="info-bar">
      <div className="date-location-weather">
      <span><i className="fas fa-calendar-day"></i> <strong>Date</strong></span>
        <span><i className="fas fa-map-pin"></i> <strong>Location</strong></span>
        <span><i className="fas fa-cloud-sun"></i> <strong>Weather</strong></span>
      </div>
    </div>
  );
}

export default InfoBar;
