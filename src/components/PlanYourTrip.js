import React, { useState, useEffect } from 'react';
import { searchFlights, searchHotels, searchAttractions } from './api'; // Import API functions
import FlightSearch from './FlightSearch'; 

const PlanYourTrip = () => {
  const [destination, setDestination] = useState(''); // State for selected destination
  const [flightData, setFlightData] = useState([]); // State to store flight data
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const destinations = [
    { name: 'Tunisia', id: 'TunisiaID' },
    { name: 'Greece', id: 'GreeceID' },
    { name: 'Spain', id: 'SpainID' },
    { name: 'Italy', id: 'ItalyID' }
  ];

  useEffect(() => {
    if (!destination) return; // Exit if no destination is selected

    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Reset error

      try {
        // Fetch flight data for the selected destination
        const flightResults = await searchFlights('USA', destination, '2025-01-01');
        setFlightData(flightResults);

        // Fetch hotel and attraction data for the selected destination
        const hotelResults = await searchHotels(destination, '2025-01-01', '2025-01-07');
        // Assuming you will use hotelResults somewhere

        const attractionResults = await searchAttractions(destination);
        // Assuming you will use attractionResults somewhere
      } catch (err) {
        setError('Failed to fetch data. Please try again later.'); // Set error message
      } finally {
        setIsLoading(false); // Set loading state to false once data is fetched
      }
    };

    fetchData();
  }, [destination]);

  return (
    <div className="travel-planner-container">
      <h1>Plan Your Natural Escape</h1>
      
      {/* Destination Selection */}
      <div className="destination-selection">
        <label>Select Your Destination: </label>
        <select onChange={(e) => setDestination(e.target.value)} value={destination}>
          <option value="">Select Destination</option>
          {destinations.map((dest) => (
            <option key={dest.id} value={dest.name}>{dest.name}</option>
          ))}
        </select>
      </div>

      {/* Loading and Error Messages */}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Display the flight search */}
      {destination && !isLoading && !error && (
        <FlightSearch 
          departureCountry="USA"  // Set the home country directly
          destination={destination} 
          flightData={flightData}
        />
      )}

      {/* You can add hotel and attraction components if needed */}
    </div>
  );
};

export default PlanYourTrip;
