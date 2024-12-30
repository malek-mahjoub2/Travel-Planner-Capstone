import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router here
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import KeyHighlightsSection from './components/KeyHighlightsSection';
import TunisiaPage from './pages/TunisiaPage';
import GreecePage from './pages/GreecePage';
import ItalyPage from './pages/ItalyPage';
import SpainPage from './pages/SpainPage';
import DestinationPage from './components/DestinationPage'; // Import DestinationPage
import FlightSearch from './components/FlightSearch'; // Import FlightSearch
import AttractionList from './components/AttractionList'; // Import AttractionList

function App() {
  const [destination, setDestination] = useState('');
  
  // This is a simple list of destinations
  const destinations = [
    { name: 'Tunisia', id: 'TunisiaID' },
    { name: 'Greece', id: 'GreeceID' },
    { name: 'Spain', id: 'SpainID' },
    { name: 'Italy', id: 'ItalyID' }
  ];

  return (
    <Router> {/* Wrap everything inside Router */}
      <div className="app-container">
        <Navbar />
        <HeroSection />
        <IntroductionSection />
        <KeyHighlightsSection />

        {/* Conditionally render the DestinationPage where the user can select a destination */}
        <DestinationPage 
          destinations={destinations} 
          onDestinationSelect={setDestination} 
        />

        {/* Once the user selects a destination, show Flight and Attraction data */}
        {destination && (
          <>
            <FlightSearch destination={destination} />
            <AttractionList destination={destination} />
          </>
        )}

        {/* Routes for the different countries' pages */}
        <Routes>
          <Route path="/tunisia" element={<TunisiaPage />} />
          <Route path="/greece" element={<GreecePage />} />
          <Route path="/italy" element={<ItalyPage />} />
          <Route path="/spain" element={<SpainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
