import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AttractionList({ destination, activities }) {
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (destination) {
      fetchAttractions(destination, activities);
    }
  }, [destination, activities]);

  const fetchAttractions = async (dest, activities) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions`, {
        params: {
          id: dest,
          activities: activities.join(','),
        },
        headers: {
          'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
          'x-rapidapi-key': '6c0197e667mshe3ae4cf333d67a8p178ee6jsnbe828bef6ac9',
        },
      });
      setAttractions(response.data);
    } catch (err) {
      setError('Failed to fetch attractions');
    }
    setLoading(false);
  };

  return (
    <div>
      {loading && <p>Loading attractions...</p>}
      {error && <p>{error}</p>}
      {attractions.length > 0 ? (
        <div>
          <h2>Top Attractions in {destination}</h2>
          <ul>
            {attractions.map((attraction, index) => (
              <li key={index}>
                <p><strong>{attraction.name}</strong></p>
                <p>{attraction.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No attractions found.</p>
      )}
    </div>
  );
}

export default AttractionList;
