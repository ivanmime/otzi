import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-darkBg border-t border-gold/20 py-8"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Logo size="small" />
          <div className="flex items-center space-x-6 text-xs text-gray-500">
            <a 
              href="/terminos-y-condiciones" 
              className="hover:text-gold transition-colors duration-200"
            >
              Términos y Condiciones
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="/politica-de-privacidad" 
              className="hover:text-gold transition-colors duration-200"
            >
              Política de Privacidad
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 Otzi Bot - Todos los derechos reservados
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;