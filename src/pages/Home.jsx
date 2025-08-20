import React from 'react';
import SEOHead from '../common/SEOHead';
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
      <SEOHead 
        title="Otzi Bot - Asistente de IA para Reservas en Estudios de Tatuajes"
        description="Otzi Bot es tu asistente de inteligencia artificial especializado en automatizar reservas y gestionar citas para estudios de tatuajes. Mejora tu productividad con IA avanzada."
        canonical="https://www.otzibot.com"
      />
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