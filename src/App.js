import React, { useState } from 'react';
import Navbar from './components/Navbar';
import InfoBar from './components/InfoBar';
import CountryVideo from './components/CountryVideo';  // Correct path to your CountryVideo component
import TravelOptions from './components/TravelOptions';
import  HeroSection from './components/HeroSection';
import ClientReviews from './components/ClientReviews'
import IntroductionSection from './components/IntroductionSection';  // Importing the new section
import KeyHighlightsSection from './components/KeyHighlightsSection';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PopularDestinations from './components/PopularDestinations';
import TopDestinations from './components/TopDestinations';
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
      <HeroSection/>
      <IntroductionSection />  {/* Placing the Introduction Section here */}
      <KeyHighlightsSection /> 
      <InfoBar onSearch={handleSearch} searchResult={searchResult} />
      <PopularDestinations onCountryClick={handleCountryClick} />
      
      {videoVisible && selectedCountry && (
        <div className="video-overlay" onClick={handleCloseVideo}>
          <CountryVideo country={selectedCountry} />
        </div>
      )}

      <TravelOptions />
      <TopDestinations />
      <ClientReviews />
    </div>
  );
}



export default App;
