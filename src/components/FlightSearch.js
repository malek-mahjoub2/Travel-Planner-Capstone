import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FlightSearch({ destination }) {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (destination) {
      fetchFlightData(destination);
    }
  }, [destination]);

  const fetchFlightData = async (dest) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://your-flight-api-endpoint.com/search?origin=anywhere&destination=${dest}`);
      setFlights(response.data);
    } catch (err) {
      setError('Failed to fetch flight data');
    }
    setLoading(false);
  };

  return (
    <div>
      {loading && <p>Loading flights...</p>}
      {error && <p>{error}</p>}
      {flights.length > 0 ? (
        <div>
          <h2>Available Flights to {destination}</h2>
          <ul>
            {flights.map((flight, index) => (
              <li key={index}>
                <p><strong>Flight {index + 1}</strong></p>
                <p>Price: ${flight.price}</p>
                <p>Departure: {flight.departure}</p>
                <p>Arrival: {flight.arrival}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No flights available.</p>
      )}
    </div>
  );
}

export default FlightSearch;
