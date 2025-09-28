import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaSave, FaRobot, FaCalendarAlt, FaClock, FaDollarSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import StudiosAPI from '../../api/studios';

const AddStudio = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    calendarId: '',
    businessHours: {
      start: '10:00',
      end: '20:00'
    },
    timezone: 'Europe/Madrid',
    pricing: {
      base: 50,
      perHour: 30
    },
    webhook: '',
    description: ''
  });

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Creando estudio:', formData);
      
      // Crear el estudio usando la API
      const studioData = {
        name: formData.name,
        slug: formData.name.toLowerCase().replace(/[^a-z0-9]/g, '_'),
        description: formData.description,
        phone: formData.phone,
        whatsapp: formData.phone,
        email: `info@${formData.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
        address: 'Madrid, España',
        businessHours: {
          monday: { open: formData.businessHours.start, close: formData.businessHours.end, closed: false },
          tuesday: { open: formData.businessHours.start, close: formData.businessHours.end, closed: false },
          wednesday: { open: formData.businessHours.start, close: formData.businessHours.end, closed: false },
          thursday: { open: formData.businessHours.start, close: formData.businessHours.end, closed: false },
          friday: { open: formData.businessHours.start, close: formData.businessHours.end, closed: false },
          saturday: { open: formData.businessHours.start, close: formData.businessHours.end, closed: false },
          sunday: { open: formData.businessHours.start, close: formData.businessHours.end, closed: false }
        },
        pricing: {
          basePrice: formData.pricing.base,
          pricePerHour: formData.pricing.perHour,
          minimumSession: 60,
          designFee: 30
        },
        settings: {
          maxAdvanceBooking: 30,
          sessionBuffer: 15,
          autoConfirm: false,
          requireDeposit: true,
          depositAmount: 20
        },
        botConfig: {
          enabled: true,
          welcomeMessage: `¡Hola! Soy Otzi, el asistente de ${formData.name}. ¿En qué puedo ayudarte hoy? 😊`,
          businessName: formData.name,
          artistName: 'Riande',
          instagram: '@blackmambatattoo'
        },
        calendarId: formData.calendarId,
        status: 'active'
      };

      const response = await StudiosAPI.createStudio(studioData);
      console.log('Estudio creado:', response);
      
      // Redirigir al dashboard
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error creando estudio:', error);
      alert('Error creando el estudio. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-darkBg text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/admin/dashboard')}
              className="mr-4 p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <FaArrowLeft />
            </motion.button>
            <div>
              <h1 className="text-3xl font-bold">Nuevo Estudio</h1>
              <p className="text-gray-400 mt-1">Configura un nuevo bot para un estudio de tatuajes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Información Básica */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaRobot className="text-blue-500" />
              Información Básica
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre del Estudio *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ej: Black Mamba Tattoo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  WhatsApp del Estudio *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+34644184841"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Google Calendar ID *
                </label>
                <input
                  type="text"
                  required
                  value={formData.calendarId}
                  onChange={(e) => handleInputChange('calendarId', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="pinseo25@gmail.com"
                />
                <p className="text-gray-400 text-sm mt-1">
                  El email asociado al calendario de Google donde se agendarán las citas
                </p>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Descripción (Opcional)
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Descripción del estudio..."
                />
              </div>
            </div>
          </div>

          {/* Horarios de Atención */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaClock className="text-green-500" />
              Horarios de Atención
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Hora de Inicio
                </label>
                <input
                  type="time"
                  value={formData.businessHours.start}
                  onChange={(e) => handleInputChange('businessHours.start', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Hora de Fin
                </label>
                <input
                  type="time"
                  value={formData.businessHours.end}
                  onChange={(e) => handleInputChange('businessHours.end', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Zona Horaria
                </label>
                <select
                  value={formData.timezone}
                  onChange={(e) => handleInputChange('timezone', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Europe/Madrid">Madrid (GMT+1)</option>
                  <option value="Europe/Barcelona">Barcelona (GMT+1)</option>
                  <option value="America/New_York">Nueva York (GMT-5)</option>
                  <option value="America/Los_Angeles">Los Ángeles (GMT-8)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Precios */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaDollarSign className="text-yellow-500" />
              Configuración de Precios
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Precio Base (€)
                </label>
                <input
                  type="number"
                  min="0"
                  step="5"
                  value={formData.pricing.base}
                  onChange={(e) => handleInputChange('pricing.base', parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Precio por Hora (€)
                </label>
                <input
                  type="number"
                  min="0"
                  step="5"
                  value={formData.pricing.perHour}
                  onChange={(e) => handleInputChange('pricing.perHour', parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Webhook (Opcional) */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaCalendarAlt className="text-purple-500" />
              Integraciones (Opcional)
            </h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Webhook URL
              </label>
              <input
                type="url"
                value={formData.webhook}
                onChange={(e) => handleInputChange('webhook', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://tu-sistema.com/webhook"
              />
              <p className="text-gray-400 text-sm mt-1">
                URL para recibir notificaciones cuando se agenden citas
              </p>
            </div>
          </div>

          {/* Botones */}
          <div className="flex gap-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/admin/dashboard')}
              className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              Cancelar
            </motion.button>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-lg transition-colors flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Creando...
                </>
              ) : (
                <>
                  <FaSave />
                  Crear Estudio
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default AddStudio;
