import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import KeyHighlightsSection from './components/KeyHighlightsSection';
import PopularDestinations from './components/PopularDestinations';
import TravelOptions from './components/TravelOptions';
import TopDestinations from './components/TopDestinations';
import ClientReviews from './components/ClientReviews';


import TunisiaPage from './pages/TunisiaPage';
import GreecePage from './pages/GreecePage';
import ItalyPage from './pages/ItalyPage';
import SpainPage from './pages/SpainPage';
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <KeyHighlightsSection />
      <Routes>
        <Route path="/tunisia" element={<TunisiaPage />} />
        <Route path="/greece" element={<GreecePage />} />
        <Route path="/italy" element={<ItalyPage />} />
        <Route path="/spain" element={<SpainPage />} />
        {/* Add more routes for each country's page if needed */}
      </Routes>
      <PopularDestinations />
      <TravelOptions />
      <TopDestinations />
      <ClientReviews />
    </div>
  );
}

export default App;
