import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PlanYourTrip from './components/PlanYourTrip';  
import IntroductionSection from './components/IntroductionSection';
import KeyHighlightsSection from './components/KeyHighlightsSection';
import ItineraryPlanner from './components/ItineraryPlanner';

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

        <Switch>
          {/* Route for Home */}
          <Route path="/" exact component={HeroSection} />

          {/* Route for plan your trip page */}
          <Route path="/plan-your-trip" component={PlanYourTrip} />
          
          {/* Route for each country page */}
          <Route path="/tunisia" component={TunisiaPage} />
          <Route path="/greece" component={GreecePage} />
          <Route path="/italy" component={ItalyPage} />
          <Route path="/spain" component={SpainPage} />
          
          {/* Route for itinerary planner and country details */}
          <Route path="/itinerary" component={ItineraryPlanner} />
          <Route path="/:country-page" component={CountryDetails} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;