// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Activities from './Activities';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section id="Activities">
        <Activities />
      </section>
      
      <Outlet />
    </div>
  );
};

export default Layout;