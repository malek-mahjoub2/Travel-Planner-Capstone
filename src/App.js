import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Activities from './components/Activities';
import Footer from './components/Footer'; // Ensure this file exists
import About from './components/About';
import ItinerarySection from './components/ItineraryPlanner';
import Contact from './components/Contact';

import TunisiaPlan from './components/TunisiaPlan';
import SpainPlan from './components/SpainPlan';
import ItalyPlan from './components/ItalyPlan';
import GreecePlan from './components/GreecePlan';

import TunisiaPage from './pages/TunisiaPage';
import GreecePage from './pages/GreecePage';
import ItalyPage from './pages/ItalyPage';
import SpainPage from './pages/SpainPage';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar is always visible */}
        <Navbar />

        {/* Routes */}
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <section id="Activities">
                  <Activities />
                </section>
              </>
            }
          />

          {/* Destination Pages */}
          <Route path="tunisia" element={<TunisiaPage />} />
          <Route path="greece" element={<GreecePage />} />
          <Route path="italy" element={<ItalyPage />} />
          <Route path="spain" element={<SpainPage />} />

          {/* Itinerary, About, and Contact Pages */}
          <Route path="itinerary" element={<ItinerarySection />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Plan Pages */}
          <Route path="plan/tunisia" element={<TunisiaPlan />} />
          <Route path="plan/spain" element={<SpainPlan />} />
          <Route path="plan/italy" element={<ItalyPlan />} />
          <Route path="plan/greece" element={<GreecePlan />} />
        </Routes>

        <About />
        <Footer />
      </div>
    </Router>
  );
}

export default App;