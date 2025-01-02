import React, { useState, useEffect } from 'react';
import './PlanYourTrip.css';
import { getWeather, getPricing, getHotels } from './api'; // Import the API functions

const PlanYourTrip = () => {
  const [destination, setDestination] = useState('');
  const [activity, setActivity] = useState('');
  const [days, setDays] = useState(1);
  const [weather, setWeather] = useState(null);
  const [pricing, setPricing] = useState(null);
  const [hotels, setHotels] = useState([]);

  // Fetch weather data when destination changes
  useEffect(() => {
    if (destination) {
      getWeather(destination)
        .then(data => setWeather(data))
        .catch(error => console.error('Error fetching weather:', error));
    }
  }, [destination]);

  // Function to fetch pricing and hotel details
  const handlePlanSubmit = () => {
    getPricing(destination, activity, days)
      .then(data => setPricing(data))
      .catch(error => console.error('Error fetching pricing:', error));

    getHotels(destination)
      .then(data => setHotels(data))
      .catch(error => console.error('Error fetching hotels:', error));
  };

  return (
    <div className="plan-container">
      <h1>Plan Your Dream Mediterranean Vacation</h1>
      <div className="form-group">
        <label>Select Destination</label>
        <select onChange={(e) => setDestination(e.target.value)} value={destination}>
          <option value="">Choose a destination</option>
          <option value="Tunisia">Tunisia</option>
          <option value="Greece">Greece</option>
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
        </select>
      </div>

      <div className="form-group">
        <label>Activity</label>
        <select onChange={(e) => setActivity(e.target.value)} value={activity}>
          <option value="">Select Activity</option>
          <option value="beach">Beach Relaxation</option>
          <option value="hiking">Mountain Hiking</option>
          <option value="culture">Cultural Tour</option>
        </select>
      </div>

      <div className="form-group">
        <label>Number of Days</label>
        <input type="number" min="1" value={days} onChange={(e) => setDays(e.target.value)} />
      </div>

      <button onClick={handlePlanSubmit}>Get Travel Plan</button>

      {weather && (
        <div className="weather-info">
          <h3>Weather Forecast</h3>
          {/* Render weather data here */}
        </div>
      )}

      {pricing && (
        <div className="pricing-info">
          <h3>Pricing Details</h3>
          <p>Price: ${pricing.price}</p>
        </div>
      )}

      {hotels && (
        <div className="hotel-info">
          <h3>Hotel Recommendations</h3>
          <ul>
            {hotels.map(hotel => (
              <li key={hotel.id}>{hotel.name} - ${hotel.price}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlanYourTrip;
