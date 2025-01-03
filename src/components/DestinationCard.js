import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DestinationCard = ({ country }) => {
  const [weather, setWeather] = useState(null); // To store weather data
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To handle errors

  // Static country details including places, hotel info
  const countryDetails = {
    Tunisia: {
      places: "Tunis, Carthage, Sidi Bou Said",
      days: "5-7 days",
      hotels: [
        { type: "Luxury", prices: { Summer: "$250 - $500", Autumn: "$200 - $400", Winter: "$150 - $300" } },
        { type: "Medium", prices: { Summer: "$100 - $250", Autumn: "$90 - $200", Winter: "$60 - $150" } }
      ],
      image: "tunisia.jpg",
      city: "Tunis", // Use the city name for weather API
    },
    Spain: {
      places: "Madrid, Barcelona, Seville",
      days: "7-10 days",
      hotels: [
        { type: "Luxury", prices: { Summer: "$300 - $600", Autumn: "$250 - $500", Winter: "$200 - $400" } },
        { type: "Medium", prices: { Summer: "$150 - $300", Autumn: "$120 - $250", Winter: "$80 - $180" } }
      ],
      image: "spain.jpg",
      city: "Madrid",
    },
    Greece: {
      places: "Athens, Santorini, Mykonos",
      days: "5-7 days",
      hotels: [
        { type: "Luxury", prices: { Summer: "$300 - $700", Autumn: "$250 - $600", Winter: "$200 - $450" } },
        { type: "Medium", prices: { Summer: "$120 - $300", Autumn: "$100 - $250", Winter: "$70 - $180" } }
      ],
      image: "greece.jpg",
      city: "Athens",
    },
    Italy: {
      places: "Rome, Venice, Florence",
      days: "7-10 days",
      hotels: [
        { type: "Luxury", prices: { Summer: "$250 - $600", Autumn: "$220 - $500", Winter: "$180 - $400" } },
        { type: "Medium", prices: { Summer: "$120 - $250", Autumn: "$100 - $230", Winter: "$70 - $180" } }
      ],
      image: "italy.jpg",
      city: "Rome",
    }
  };

  // Fetch weather data based on country/city
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://sky-scanner3.p.rapidapi.com/flights/search-multi-city `, {
          params: {
            key: '6c0197e667mshe3ae4cf333d67a8p178ee6jsnbe828bef6ac9', 
            q: countryDetails[country].city,
            aqi: 'no', // No air quality info
          }
        });
        setWeather(response.data); // Store weather data in state
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    fetchWeather();
  }, [country]);

  // Handle loading, error, and weather display
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="country-card">
      <h2>{country}</h2>
      <img src={countryDetails[country].image} alt={country} />
      <p>{countryDetails[country].places}</p>
      <p>{countryDetails[country].days}</p>

      <div className="hotel-info">
        {/* Render Luxury and Medium hotels only */}
        {countryDetails[country].hotels.map((hotel, index) => (
          <div key={index} className="hotel-category">
            <h3>{hotel.type}</h3>
            {/* Display the price ranges for each season */}
            <p>Summer: {hotel.prices.Summer}</p>
            <p>Autumn: {hotel.prices.Autumn}</p>
            <p>Winter: {hotel.prices.Winter}</p>
          </div>
        ))}
      </div>

      {/* Display weather info */}
      <div className="weather-info">
        {weather && (
          <>
            <h3>Weather in {weather.location.name}</h3>
            <p>Temperature: {weather.current.temp_c}°C</p>
            <p>Condition: {weather.current.condition.text}</p>
            <img
              src={`http://${weather.current.condition.icon}`} // Weather icon URL
              alt={weather.current.condition.text}
            />
          </>
        )}
      </div>

      <Link to={`/${country.toLowerCase()}-page`}>
        <button>Let's Plan Your Trip</button>
      </Link>
    </div>
  );
};

export default DestinationCard;
