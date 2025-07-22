import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ size = 'default' }) => {
  // Size variants
  const sizes = {
    small: 'text-xl',
    default: 'text-2xl',
    large: 'text-3xl',
    xl: 'text-4xl'
  };
  
  const sizeClass = sizes[size] || sizes.default;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center"
    >
      <div className={`flex items-center ${sizeClass} font-bold`}>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-500">OTZI</span>
        <span className="mx-1 text-white">|</span>
        <span className="text-white">BOT</span>
        <div className="ml-2 relative">
          <motion.div
            animate={{ rotate: [0, 15, 0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
            className="text-xl"
          >
            🤖
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Logo;