import React, { useState, useEffect } from 'react';
import axios from 'axios';
const countryCoordinates = {
    Tunisia: { lat: 33.8869, lon: 9.5375 },
    Qatar: { lat: 25.3548, lon: 51.1839 },
    SaudiArabia: { lat: 23.8859, lon: 45.0792 },
    Morocco: { lat: 31.7917, lon: -7.0926 },
    UAE: { lat: 23.4241, lon: 53.8478 },
    };

function WeatherDetails({ country }) {
    const [weatherData, setWeatherData] = useState(null);
    const coordinates = countryCoordinates[country];
    useEffect(() => {
        if (!coordinates) return; // If no coordinates for country, do nothing

    const fetchWeather = async () => {
      const API_KEY = '882b2b6ab1a34777a093d74c5bbdfa6c'; // Replace with your WeatherBit API key
    const url = `https://api.weatherbit.io/v2.0/current?lat=${coordinates.lat}&lon=${coordinates.lon}&key=${API_KEY}`;

        try {
        const response = await axios.get(url);
        setWeatherData(response.data.data[0]);
        } catch (error) {
        console.error("Error fetching weather data:", error);
        }
    };

    fetchWeather();
        }, [coordinates]);

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Weather in {country}</h2>
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
