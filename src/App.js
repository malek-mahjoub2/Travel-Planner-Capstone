import React, { useState } from 'react';
import Navbar from './components/Navbar';
import InfoBar from './components/InfoBar';
import SearchBar from './components/SearchBar';
import Background from './components/Background';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [destination, setDestination] = useState('');

  const handleSearch = (destination) => {
    setDestination(destination);
    // Here you can integrate the API call to fetch weather, location, and date for the destination
    console.log(`Searching for destination: ${destination}`);
  };

  return (
    <div className="App">
      <Navbar />
      <Background />
      <SearchBar onSearch={handleSearch} />
      <InfoBar />
    </div>
  );
}

export default App;
