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
          <div className="text-gray-400 text-sm">
            © 2025 Otzi Bot - Todos los derechos reservados
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;