import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import ItinerarySection from './components/ItineraryPlanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

import TunisiaPlan from './components/TunisiaPlan';
import SpainPlan from './components/SpainPlan';
import ItalyPlan from './components/ItalyPlan';
import GreecePlan from './components/GreecePlan';

import TunisiaPage from './pages/TunisiaPage';
import GreecePage from './pages/GreecePage';
import ItalyPage from './pages/ItalyPage';
import SpainPage from './pages/SpainPage';
import HeroSection from './components/HeroSection';  // Import HeroSection

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Layout Route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HeroSection />} />
          <Route path="tunisia" element={<TunisiaPage />} />
          <Route path="greece" element={<GreecePage />} />
          <Route path="italy" element={<ItalyPage />} />
          <Route path="spain" element={<SpainPage />} />
          
          {/* Other Sections */}
          <Route path="itinerary" element={<ItinerarySection />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Nested Plan Routes */}
          <Route path="plan/tunisia" element={<TunisiaPlan />} />
          <Route path="plan/spain" element={<SpainPlan />} />
          <Route path="plan/italy" element={<ItalyPlan />} />
          <Route path="plan/greece" element={<GreecePlan />} />
          
          {/* About and Footer */}
          <Route path="about" element={<About />} />
          <Route path="footer" element={<Footer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
