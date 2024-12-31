import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HotelSearch({ destination, people }) {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (destination) {
      fetchHotelData(destination);
    }
  }, [destination]);

  const fetchHotelData = async (dest) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://your-hotel-api-endpoint.com/searchHotels`, {
        params: {
          destination: dest,
          people: people,
        },
        headers: {
          'x-rapidapi-key': 'your-api-key',
        },
      });
      setHotels(response.data.hotels);
    } catch (err) {
      setError('Failed to fetch hotel data');
    }
    setLoading(false);
  };

  return (
    <div>
      {loading && <p>Loading hotels...</p>}
      {error && <p>{error}</p>}
      {hotels.length > 0 ? (
        <div>
          <h2>Hotels in {destination}</h2>
          <ul>
            {hotels.map((hotel, index) => (
              <li key={index}>
                <p><strong>{hotel.name}</strong></p>
                <p>Price per night: ${hotel.price}</p>
                <p>Rating: {hotel.rating} stars</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No hotels available.</p>
      )}
    </div>
  );
}

export default HotelSearch;
