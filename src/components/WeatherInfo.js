import React, { useState, useEffect } from 'react';

const WeatherInfo = ({ lat, lon }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://meteostat.p.rapidapi.com/point/monthly?lat=${lat}&lon=${lon}&start=2020-01-01&end=2020-12-31`, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '6c0197e667mshe3ae4cf333d67a8p178ee6jsnbe828bef6ac9',
            'X-RapidAPI-Host': 'meteostat.p.rapidapi.com',
          },
        });
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [lat, lon]);

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div>
      <h3>Weather Forecast</h3>
      <p>Average Temperature: {weatherData.data[0].temperature} °C</p>
      <p>Precipitation: {weatherData.data[0].precipitation} mm</p>
    </div>
  );
};

export default WeatherInfo;
