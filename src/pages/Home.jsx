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
    <>
      <SEOHead 
        title="Otzi Bot - Bot IA para Reservas de Tatuajes"
        description="Automatiza las reservas de tu estudio de tatuajes con IA. Reduce consultas repetitivas y aumenta conversiones con nuestro bot asistente inteligente."
        canonical="https://www.otzibot.com/"
      />
      <Header />
      <main role="main">
        <section aria-label="Sección principal">
          <HeroSection />
        </section>
        <section aria-label="Problemas que resolvemos">
          <ProblemsSection />
        </section>
        <section aria-label="Nuestra solución">
          <SolutionSection />
        </section>
        <section aria-label="Capacidades del bot">
          <CapabilitiesSection />
        </section>
        <section aria-label="Características principales">
          <FeaturesSection />
        </section>
        <section aria-label="Proceso de implementación">
          <ProcessSection />
        </section>
        <section aria-label="Llamada a la acción">
          <FinalCTA />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;