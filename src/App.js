import React, { useState } from 'react';
import Navbar from './components/Navbar';
import InfoBar from './components/InfoBar';
import SearchBar from './components/SearchBar';
import Background from './components/Background';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PopularDestinations from './components/PopularDestinations';


function App() {
  const [destination, setDestination] = useState('');

  const handleSearch = (destination) => {
    setDestination(destination);
    console.log(`Searching for destination: ${destination}`);
  };

  return (
    <div className="App">
      <Navbar />
      <Background />
      <SearchBar onSearch={handleSearch} />
      <InfoBar />
      <PopularDestinations />

    </div>
  );
}

export default App;
