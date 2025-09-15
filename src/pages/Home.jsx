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
        description="Asistente de IA para automatizar reservas y gestionar citas en estudios de tatuajes. Mejora tu productividad."
        canonical="https://www.otzibot.com"
      />
      <Header />
      <HeroSection />
      <section className="bg-darkBg border-y border-gold/20">
        <div className="container mx-auto px-6 py-8">
          <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Caso de éxito</h3>
              <p className="text-gray-300 mt-1">
                Implementación operativa en 
                <a href="https://blackmambatattoo.es/" target="_blank" rel="noopener noreferrer" className="text-gold font-semibold hover:text-yellow-400 ml-1">
                  Black Mamba Tattoo & Remove
                </a>
                : reservas automatizadas y gestión de citas en producción.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gold text-black">Live</span>
              <a href="#contacto" onClick={(e) => { e.preventDefault(); window.location.href = '/contacto'; }} className="text-gold hover:text-yellow-400 underline-offset-4 hover:underline">Quiero resultados similares</a>
            </div>
          </div>
        </div>
      </section>
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