import React from 'react';

function DestinationPage({ destinations, onDestinationSelect }) {
  const handleDestinationChange = (event) => {
    onDestinationSelect(event.target.value);
  };

  return (
    <div>
      <h2>Select your destination</h2>
      <select onChange={handleDestinationChange}>
        <option value="">--Choose a destination--</option>
        {destinations.map((place) => (
          <option key={place.id} value={place.name}>
            {place.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DestinationPage;
