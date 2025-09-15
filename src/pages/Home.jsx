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
          <div className="relative overflow-hidden bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-2xl p-6 md:p-8">
            {/* Fondo decorativo difuminado */}
            <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden>
              <img src="https://blackmambatattoo.es/wp-content/uploads/logo-1.jpg" alt="Black Mamba Tattoo & Remove" className="absolute -right-10 -top-10 w-[380px] max-w-none blur-md opacity-60" />
            </div>

            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <img src="https://blackmambatattoo.es/wp-content/uploads/logo-1.jpg" alt="Black Mamba Tattoo & Remove" className="h-10 mb-3 opacity-90" />
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  Resultados en acción
                </h3>
                <p className="text-gray-300 mt-2">
                  En <a href="https://blackmambatattoo.es/" target="_blank" rel="noopener noreferrer" className="text-gold font-semibold hover:text-yellow-400">Black Mamba Tattoo & Remove</a>, en A Coruña, España, ya usan Otzi Bot para automatizar reservas y gestionar citas en producción. El resultado: <span className="text-white font-semibold">más tiempo para tatuar</span>, <span className="text-white font-semibold">menos tiempo en WhatsApp</span>.
                </p>
                <ul className="mt-4 text-gray-300 list-disc list-inside space-y-1">
                  <li>Reservas 24/7 por WhatsApp con flujo guiado</li>
                  <li>Verificación de disponibilidad en Google Calendar</li>
                  <li>Creación y actualización automática de eventos</li>
                </ul>
                {/* Testimonio breve */}
                <p className="mt-4 text-sm italic text-gray-400">“Desde que implementamos Otzi, la agenda se organiza sola y respondemos más rápido.”</p>
              </div>

              <div className="flex flex-col items-end self-stretch md:self-auto gap-3 min-w-[220px]">
                <div className="flex items-center gap-2">
                  <span className="relative inline-flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-900/40 text-green-300 border border-green-600/40">Live</span>
                </div>
                <a
                  href="#contacto"
                  onClick={(e) => { e.preventDefault(); window.location.href = '/contacto'; }}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gold text-black px-6 py-3 rounded-xl font-bold text-base md:text-lg hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105 border border-yellow-500"
                >
                  ⚡ Quiero probar Otzi Bot
                </a>
              </div>
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