import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemsSection from '../components/ProblemsSection';
import SolutionSection from '../components/SolutionSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import FeaturesSection from '../components/FeaturesSection';
import ProcessSection from '../components/ProcessSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <CapabilitiesSection />
      <FeaturesSection />
      <ProcessSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Home;