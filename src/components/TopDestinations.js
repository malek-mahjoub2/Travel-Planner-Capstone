import React, { useState } from 'react';
import './TopDestinations.css';
import beja from '../images/beja.jpg';
import dubai from '../images/dubai.jpeg';
import mann from '../images/mann.jpg';

const destinations = [
  {
    name: 'Tunisia - 7 Days',
    cities: ['Tunis', 'Sousse', 'Beja'],
    duration: '7 days',
    image: beja,
    description: 'Experience Tunisia in 7 days exploring Tunis, Sousse, and Beja.',
    label: 'Special Offer',
    labelClass: 'tunisia-offer', // Class for Tunisia special offer
  },
  {
    name: 'UAE - 7 Days',
    cities: ['Abu Dhabi', 'Dubai'],
    duration: '7 days',
    image: dubai,
    description: 'Discover the UAE in 7 days with Abu Dhabi and Dubai highlights.',
    label: 'Special Offer',
    labelClass: 'tunisia-offer',
  },
  {
    name: 'Morocco - 5 Days',
    cities: ['Chefchaouen', 'Marrakech'],
    duration: '5 days',
    image: mann,
    description: 'Experience the charm of Morocco in 5 days with Chefchaouen and Marrakech.',
    label: '20% Off',
    labelClass: 'morocco-discount', // Class for Morocco discount offer
  },
];

function TopDestinations() {
  const [activeDestination, setActiveDestination] = useState(null);

  // Function to handle click event (we can show more details in the future if needed)
  const handleDestinationClick = (index) => {
    // Currently just logs the destination name for now
    console.log('Clicked destination:', destinations[index].name);
  };

  return (
    <section className="top-destinations">
      {destinations.map((destination, index) => (
        <div
          className="destination-card"
          key={index}
          onClick={() => handleDestinationClick(index)}
        >
          <img src={destination.image} alt={destination.name} />
          {destination.label && (
            <div className={`label ${destination.labelClass}`}>
              {destination.label}
            </div>
          )}
          <div className="destination-info">
            <p>{destination.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default TopDestinations;
