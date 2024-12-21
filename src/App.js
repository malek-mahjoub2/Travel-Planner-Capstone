import React, { useState } from 'react';
import Navbar from './components/Navbar';
import InfoBar from './components/InfoBar';

import Background from './components/Background';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PopularDestinations from './components/PopularDestinations';


function App() {
  const [searchResult, setSearchResult] = useState('');

  // List of countries for search validation
  const countries = [
    { name: 'Tunisia' },
    { name: 'Algeria' },
    { name: 'Morocco' },
    { name: 'UAE' },
    { name: 'Qatar' },
    { name: 'Saudi Arabia' },
  ];

  // Handle the country search
  const handleSearch = (destination) => {
    const country = countries.find(c => c.name.toLowerCase() === destination.toLowerCase());
    if (country) {
      setSearchResult(`You selected ${country.name}`);
    } else {
      setSearchResult('Invalid country');
    }
  };

  return (
    <div className="app-container">
      <Navbar />  {/* Navbar component */}
      <Background />
      <InfoBar onSearch={handleSearch} searchResult={searchResult} /> {/* InfoBar component */}
      <PopularDestinations /> {/* PopularDestinations component */}
    </div>
);
}

export default App;
