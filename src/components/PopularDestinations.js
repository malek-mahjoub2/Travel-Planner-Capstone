import React from 'react';
import './PopularDestinations.css'; 
import tunisImage from '../images/tunis.jpg';
import algerImage from '../images/alger.jpg';
import marocImage from '../images/maroc.jpg';
import uaeImage from '../images/uae.jpg';
import qatarImage from '../images/qatar.jpg';
import saudiImage from '../images/saudi.jpg';


function PopularDestinations() {
  // Define the countries and their images
  const countries = [
    { name: 'Tunisia', imageUrl: tunisImage },
    { name: 'Algeria', imageUrl: algerImage },
    { name: 'Morocco', imageUrl: marocImage },
    { name: 'UAE', imageUrl: uaeImage },
    { name: 'Qatar', imageUrl: qatarImage },
    { name: 'Saudi Arabia', imageUrl: saudiImage },
  ];

  const handleClick = (countryName) => {
    alert(`You clicked on ${countryName}`);
    // You can replace the alert with other actions, like navigating to a country details page
  };

  return (
    <div className="popular-destinations">
      <h2>Popular Destinations</h2>
      <div className="country-grid">
        {countries.map((country, index) => (
          <div
            key={index}
            className="country-card"
            onClick={() => handleClick(country.name)}
          >
            <img src={country.imageUrl} alt={country.name} />
            <div className="country-name">{country.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularDestinations;