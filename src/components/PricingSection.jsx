import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-darkBg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Precios <span className="text-gold">Transparentes</span>
          </h2>
          <p className="text-xl text-gray-300">
            Un plan único diseñado específicamente para estudios de tatuajes
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-2">
              Plan Único para Estudios de Tatuajes
            </h3>
            <div className="text-5xl font-bold text-gold mb-2">30€ / mes</div>
            <div className="text-gray-300 mb-6">Piloto de 3 meses</div>

            <ul className="space-y-4 mb-8 text-left">
              <li className="flex items-center space-x-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-gray-300">Hasta 1000 leads al mes</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-gray-300">Personalización visual del bot</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-gray-300">Métricas e informes</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-gray-300">Soporte 24/7</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-gray-300">Opción de renovar a menor precio</span>
              </li>
            </ul>

            <Link
              to="/contacto"
              className="inline-block bg-gradient-to-r from-gold to-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105"
            >
              🚀 Empezar Piloto Gratis
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
