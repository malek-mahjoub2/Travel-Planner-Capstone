import React, { useState, useEffect } from 'react';
import DestinationPage from './DestinationPage';
import FlightSearch from './FlightSearch';
import AttractionList from './AttractionList';
import HotelSearch from './HotelSearch'; // Add hotel search feature
import './PlanYourTrip.css'; // CSS for this page

const PlanYourTrip = () => {
  const [destination, setDestination] = useState('');
  const [people, setPeople] = useState(1); // Number of people
  const [activities, setActivities] = useState([]); // Activities user selects

  const destinations = [
    { name: 'Tunisia', id: 'TunisiaID' },
    { name: 'Greece', id: 'GreeceID' },
    { name: 'Spain', id: 'SpainID' },
    { name: 'Italy', id: 'ItalyID' }
  ];

  // Prices for demonstration (these could come from an API)
  const prices = {
    flightPerPerson: 200, // Example flight price per person
    hotelPerNight: 100, // Example hotel price per night
    activityCost: 50 // Example activity price per activity
  };

  // Handle activities selection
  const handleActivityChange = (activity) => {
    setActivities(prev => prev.includes(activity) ? prev.filter(item => item !== activity) : [...prev, activity]);
  };

  // Calculate flight price based on number of people
  const calculateFlightPrice = () => {
    return prices.flightPerPerson * people;
  };

  // Calculate hotel price based on destination and number of people (assuming 7 nights stay for simplicity)
  const calculateHotelPrice = () => {
    const nights = 7; // Default nights stay (you can make this dynamic)
    return prices.hotelPerNight * nights * people;
  };

  // Calculate activity price based on selected activities
  const calculateActivityPrice = () => {
    return prices.activityCost * activities.length;
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return calculateFlightPrice() + calculateHotelPrice() + calculateActivityPrice();
  };

  return (
    <div className="travel-planner-container">
      <h1>Plan Your Natural Escape</h1>
      <DestinationPage destinations={destinations} onDestinationSelect={setDestination} />
      
      {/* Select Number of People */}
      <div className="people-selection">
        <label htmlFor="people">Number of people: </label>
        <input
          type="number"
          id="people"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          min="1"
        />
      </div>

      {/* Activities Selection */}
      <div className="activities-selection">
        <h3>Select Activities</h3>
        <label>
          <input type="checkbox" onChange={() => handleActivityChange('hiking')} /> Hiking
        </label>
        <label>
          <input type="checkbox" onChange={() => handleActivityChange('swimming')} /> Swimming
        </label>
        <label>
          <input type="checkbox" onChange={() => handleActivityChange('sightseeing')} /> Sightseeing
        </label>
        {/* Add more activities as needed */}
      </div>

      {/* Show flight, hotel, and attractions only when a destination is selected */}
      {destination && (
        <>
          <FlightSearch destination={destination} people={people} />
          <HotelSearch destination={destination} people={people} />
          <AttractionList destination={destination} activities={activities} />
        </>
      )}

      {/* Display Final Price */}
      {destination && (
        <div className="final-price">
          <h3>Estimated Total Price</h3>
          <p><strong>Flight Cost: </strong>${calculateFlightPrice()}</p>
          <p><strong>Hotel Cost: </strong>${calculateHotelPrice()}</p>
          <p><strong>Activities Cost: </strong>${calculateActivityPrice()}</p>
          <h2><strong>Total Price: </strong>${calculateTotalPrice()}</h2>
          <button className="book-now-btn">Book Now</button>
        </div>
      )}
    </div>
  );
};

export default PlanYourTrip;
