import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCog, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminButton = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAdminAccess = () => {
    if (password === 'otzi2025') {
      navigate('/admin/dashboard');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdminAccess();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowPassword(!showPassword)}
        className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg border border-gray-600 transition-colors"
        title="Acceso Administrador"
      >
        <FaCog className="text-lg" />
      </motion.button>

      {showPassword && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-16 right-0 bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-600 min-w-64"
        >
          <div className="flex items-center gap-2 mb-3">
            <FaLock className="text-blue-500" />
            <span className="text-sm font-medium">Acceso Administrador</span>
          </div>
          
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            onKeyPress={handleKeyPress}
            placeholder="Contraseña"
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          {error && (
            <p className="text-red-400 text-xs mt-1">{error}</p>
          )}
          
          <div className="flex gap-2 mt-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAdminAccess}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm transition-colors"
            >
              Acceder
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setShowPassword(false);
                setPassword('');
                setError('');
              }}
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 rounded text-sm transition-colors"
            >
              Cancelar
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AdminButton;
