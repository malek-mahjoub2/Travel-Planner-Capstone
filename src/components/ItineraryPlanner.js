import React from 'react';
import './styles.css';
import DestinationCard from './DestinationCard';

const ItineraryPlanner = () => {
  return (
    <div className="itinerary-container">
      <h1>Choose Your Mediterranean Adventure!</h1>
      <p>Click on a country to start planning your dream trip!</p>
      <div className="countries">
        <DestinationCard country="Tunisia" />
        <DestinationCard country="Spain" />
        <DestinationCard country="Greece" />
        <DestinationCard country="Italy" />
      </div>
    </div>
  );
};

export default ItineraryPlanner;
