import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-darkBg/95 backdrop-blur-sm border-b border-gold/20 fixed w-full top-0 z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* CTA Button */}
          <Link 
            to="/contacto"
            className="bg-gradient-to-r from-gold to-yellow-600 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 transform hover:scale-105"
          >
            🤖 Pide tu Bot
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;