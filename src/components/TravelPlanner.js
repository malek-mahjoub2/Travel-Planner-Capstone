import React, { useState } from 'react';
import axios from 'axios';
import './TravelPlanner.css'; // Import the styles

const TravelPlanner = () => {
  // States to handle form data and results
  const [departureCountry, setDepartureCountry] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [numTravelers, setNumTravelers] = useState(1);
  const [activities, setActivities] = useState([]);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // API keys (Replace with your actual keys)
  const skyApiKey = 'YOUR_SKYSCANNER_API_KEY';
  const viatorApiKey = 'YOUR_VIATOR_API_KEY';

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Fetch flight data from Skyscanner API
      const flightUrl = `https://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/US/USD/en-US/${departureCountry}/${destinationCountry}/2024-12-25?apiKey=${skyApiKey}`;
      const flightResponse = await axios.get(flightUrl);

      // Limit to top 3 flight options
      setFlights(flightResponse.data.Quotes.slice(0, 3));

      // Fetch activities from Viator API
      const activityUrl = `https://viatorapi.viator.com/v1/activities?destination=${destinationCountry}&apiKey=${viatorApiKey}`;
      const activityResponse = await axios.get(activityUrl);

      // Store the top activities in state
      setActivities(activityResponse.data.slice(0, 3));
    } catch (err) {
      setError('There was an error fetching flight or activity data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="travel-planner-container">
      <h1>Plan Your Trip</h1>
      
      <form onSubmit={handleSubmit} className="travel-form">
        <div className="form-group">
          <label>Departure Country</label>
          <select
            value={departureCountry}
            onChange={(e) => setDepartureCountry(e.target.value)}
            required
          >
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="IN">India</option>
            {/* Add more options */}
          </select>
        </div>

        <div className="form-group">
          <label>Destination Country</label>
          <select
            value={destinationCountry}
            onChange={(e) => setDestinationCountry(e.target.value)}
            required
          >
            <option value="">Select Country</option>
            <option value="IT">Italy</option>
            <option value="ES">Spain</option>
            <option value="GR">Greece</option>
            {/* Add more countries */}
          </select>
        </div>

        <div className="form-group">
          <label>Number of Travelers</label>
          <input
            type="number"
            value={numTravelers}
            onChange={(e) => setNumTravelers(Number(e.target.value))}
            min="1"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Find Flights and Activities</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="results-container">
        <h2>Top Flight Options</h2>
        {flights.length > 0 ? (
          flights.map((flight, index) => (
            <div key={index} className="flight-option">
              <p>Airline: {flight.MinPrice}</p>
              <p>Price: ${flight.MinPrice}</p>
            </div>
          ))
        ) : (
          <p>No flights available.</p>
        )}

        <h2>Top Activities</h2>
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <div key={index} className="activity-option">
              <h4>{activity.name}</h4>
              <p>{activity.description}</p>
              <p>Price: ${activity.price}</p>
            </div>
          ))
        ) : (
          <p>No activities found for this destination.</p>
        )}

        {/* Optionally, show the total price */}
        <div className="total-price">
          <h3>Estimated Total Price: ${numTravelers * 1000} (for example)</h3>
        </div>
      </div>
    </div>
  );
};

export default TravelPlanner;
