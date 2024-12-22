import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherDetails({ city, lat, lon }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const API_KEY = 'YOUR_API_KEY'; // Replace with your WeatherBit API key
      const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${API_KEY}`;

      try {
        const response = await axios.get(url);
        setWeatherData(response.data.data[0]);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Weather in {city}</h2>
      <p><strong>Temperature:</strong> {weatherData.temp}°C</p>
      <p><strong>Weather:</strong> {weatherData.weather.description}</p>
      <p><strong>Wind Speed:</strong> {weatherData.wind_spd} m/s</p>
      <p><strong>Humidity:</strong> {weatherData.rh}%</p>
      <p><strong>Pressure:</strong> {weatherData.pres} mb</p>
      <p><strong>Sunrise:</strong> {weatherData.sunrise}</p>
      <p><strong>Sunset:</strong> {weatherData.sunset}</p>
    </div>
  );
}

export default WeatherDetails;
