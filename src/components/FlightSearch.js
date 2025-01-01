import React from 'react';

const FlightSearch = ({ departureCountry, destination, flightData }) => {
  if (!flightData || flightData.length === 0) return <div>Loading flights...</div>;

  return (
    <div className="flight-search">
      <h3>Available Flights from {departureCountry} to {destination}</h3>
      
      {flightData.map((flight, index) => (
        <div key={index}>
          <h4>{flight.airline} - ${flight.price}</h4>
          <p>Departure: {flight.from} &rarr; Destination: {flight.to}</p>
          <p>Flight Date: {flight.date}</p>
        </div>
      ))}
    </div>
  );
};

export default FlightSearch;
