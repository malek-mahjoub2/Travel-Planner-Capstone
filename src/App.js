import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PlanYourTrip from './components/PlanYourTrip';  
import IntroductionSection from './components/IntroductionSection';
import KeyHighlightsSection from './components/KeyHighlightsSection';


import TunisiaPage from './pages/TunisiaPage';
import GreecePage from './pages/GreecePage';
import ItalyPage from './pages/ItalyPage';
import SpainPage from './pages/SpainPage';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <HeroSection />
        <IntroductionSection />
        <KeyHighlightsSection />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/plan-your-trip" element={<PlanYourTrip />} />
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
