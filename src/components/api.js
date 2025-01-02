// api.js
import axios from 'axios';

// Fetch weather data based on destination
export const getWeather = async (destination) => {
  try {
    const lat = getLatitude(destination);
    const lon = getLongitude(destination);

    const response = await axios.get('https://meteostat.p.rapidapi.com/point/monthly', {
      headers: {
        'X-RapidAPI-Key': 'your-api-key',
        'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
      },
      params: {
        lat,
        lon,
        start: '2023-01-01',
        end: '2023-01-31'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

// Fetch pricing details
export const getPricing = async (destination, activity, days) => {
  try {
    const response = await axios.get('https://api.example.com/getPricing', { 
      params: { destination, activity, days }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching pricing data:', error);
    throw error;
  }
};

// Fetch hotels based on destination
export const getHotels = async (destination) => {
  try {
    const response = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/search', {
      headers: {
        'X-RapidAPI-Key': 'your-api-key',
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
      },
      params: { location: destination, checkin: '2025-01-10', checkout: '2025-01-15' }
    });
    return response.data.hotels;
  } catch (error) {
    console.error('Error fetching hotels data:', error);
    throw error;
  }
};

// Helper functions for getting lat/lon based on destination
const getLatitude = (destination) => {
  const locations = {
    Tunisia: 33.8869,
    Greece: 39.0742,
    Italy: 41.8719,
    Spain: 40.4637
  };
  return locations[destination] || 0;
};

const getLongitude = (destination) => {
  const locations = {
    Tunisia: 9.5375,
    Greece: 21.8243,
    Italy: 12.5674,
    Spain: -3.7038
  };
  return locations[destination] || 0;
};
