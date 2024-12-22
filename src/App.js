import React, { useState } from 'react';
import Navbar from './components/Navbar';
import InfoBar from './components/InfoBar';
import CountryVideo from './components/CountryVideo';  // Correct path to your CountryVideo component
import TravelOptions from './components/TravelOptions';
import Background from './components/Background';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PopularDestinations from './components/PopularDestinations';

function App() {
  const [searchResult, setSearchResult] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [videoVisible, setVideoVisible] = useState(false);
  const handleCountryClick = (country) => {
    setSelectedCountry(country);  // Set the selected country when clicked
    setVideoVisible(true)
  };
  const handleCloseVideo = () => {
    setVideoVisible(false); // Close the video when clicking the close button
    setSelectedCountry(''); // Clear the selected country
  };

  const countries = [
    { name: 'Tunisia' },
    { name: 'Algeria' },
    { name: 'Morocco' },
    { name: 'UAE' },
    { name: 'Qatar' },
    { name: 'Saudi Arabia' },
  ];

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
      <Navbar />
      <Background />
      <InfoBar onSearch={handleSearch} searchResult={searchResult} />
      <PopularDestinations onCountryClick={handleCountryClick} />
      
      {videoVisible && selectedCountry && (
        <div className="video-overlay" onClick={handleCloseVideo}>
          <CountryVideo country={selectedCountry} />
        </div>
      )}

      <TravelOptions />
    </div>
  );
}



export default App;
