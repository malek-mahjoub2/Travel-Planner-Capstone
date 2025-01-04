import React, { useState } from 'react';
import TunisiaPlan from './TunisiaPlan';
import ItalyPlan from './ItalyPlan';
import GreecePlan from './GreecePlan';
import SpainPlan from './SpainPlan';

const ItineraryPlanner = () => {
  const [selectedCountry, setSelectedCountry] = useState('Tunisia');

  // Function to handle country change
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div id="Itinerary">
      <h2>Plan Your Trip</h2>

      {/* Country Selection Menu */}
      <div className="menu">
        <button onClick={() => handleCountryChange('Tunisia')}>Tunisia</button>
        <button onClick={() => handleCountryChange('Italy')}>Italy</button>
        <button onClick={() => handleCountryChange('Greece')}>Greece</button>
        <button onClick={() => handleCountryChange('Spain')}>Spain</button>
      </div>

      {/* Display the selected country's itinerary */}
      <div className="itinerary-content">
        {selectedCountry === 'Tunisia' && <TunisiaPlan />}
        {selectedCountry === 'Italy' && <ItalyPlan />}
        {selectedCountry === 'Greece' && <GreecePlan />}
        {selectedCountry === 'Spain' && <SpainPlan />}
      </div>
    </div>
  );
};

export default ItineraryPlanner;
