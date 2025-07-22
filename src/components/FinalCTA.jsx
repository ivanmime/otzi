import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-darkGray via-darkBg to-darkGray">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            ¿Listo para <span className="text-gold">automatizar</span> tu estudio?
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Únete a la revolución de la automatización en estudios de tatuaje
          </p>
          
          <div className="flex justify-center items-center">
            <Link
              to="/contacto"
              className="bg-gradient-to-r from-gold to-yellow-600 text-black px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-gold/40 transition-all duration-300 transform hover:scale-105"
            >
              🚀 Quiero Mi Bot Ahora
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gold">24/7</div>
              <div className="text-gray-300">Soporte Técnico</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gold">100%</div>
              <div className="text-gray-300">Personalizable</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gold">100%</div>
              <div className="text-gray-300">Seguro</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;