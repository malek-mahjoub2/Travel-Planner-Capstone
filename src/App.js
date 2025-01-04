// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import KeyHighlightsSection from './components/KeyHighlightsSection';
import TunisiaPlan from './components/TunisiaPlan'; 
import SpainPlan from './components/SpainPlan';
import ItalyPlan from './components/ItalyPlan';
import GreecePlan from './components/GreecePlan'; 
import TunisiaPage from './pages/TunisiaPage';
import GreecePage from './pages/GreecePage';
import ItalyPage from './pages/ItalyPage';
import SpainPage from './pages/SpainPage';
import ItinerarySection from './components/ItineraryPlanner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<KeyHighlightsSection />} />
          <Route path="tunisia" element={<TunisiaPage />} />
          <Route path="greece" element={<GreecePage />} />
          <Route path="italy" element={<ItalyPage />} />
          <Route path="spain" element={<SpainPage />} />
        </Route>
      </Routes>
      <section id="Itinerary">
        <Routes>
          <Route path="/" element={<ItinerarySection />} />
          <Route path="/plan/tunisia" element={<TunisiaPlan />} />
          <Route path="/plan/spain" element={<SpainPlan />} />
          <Route path="/plan/italy" element={<ItalyPlan />} />
          <Route path="/plan/greece" element={<GreecePlan />} />
        </Routes>
      </section>
      
    </Router>
  );
}

export default App;