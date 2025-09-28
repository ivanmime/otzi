import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import StudiosAPI from '../../api/studios';
import { 
  FaPlus, 
  FaRobot, 
  FaUsers, 
  FaCalendarAlt, 
  FaChartLine,
  FaCog,
  FaPlay,
  FaPause,
  FaTrash
} from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();
  const [studios, setStudios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStudios();
  }, []);

  const loadStudios = async () => {
    try {
      setLoading(true);
      const response = await StudiosAPI.getStudios();
      
      // Mapear los datos de la API al formato del dashboard
      const mappedStudios = response.data.map(studio => ({
        id: studio.id,
        name: studio.name,
        phone: studio.phone,
        status: studio.status || 'active',
        messages: 0, // TODO: Obtener datos reales de mensajes
        appointments: 0, // TODO: Obtener datos reales de citas
        revenue: 0 // TODO: Obtener datos reales de ingresos
      }));
      
      setStudios(mappedStudios);
    } catch (error) {
      console.error('Error cargando estudios:', error);
      setStudios([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateStudio = () => {
    // Navegar al formulario de crear estudio
    navigate('/admin/add-studio');
  };

  const handleToggleBot = async (studioId) => {
    try {
      const studio = studios.find(s => s.id === studioId);
      const newStatus = studio.status === 'active' ? 'inactive' : 'active';
      
      await StudiosAPI.toggleBot(studioId, newStatus);
      
      // Actualizar el estado local
      setStudios(prev => prev.map(s => 
        s.id === studioId ? { ...s, status: newStatus } : s
      ));
      
      console.log(`Bot ${newStatus === 'active' ? 'activado' : 'desactivado'}:`, studioId);
    } catch (error) {
      console.error('Error cambiando estado del bot:', error);
      alert('Error cambiando el estado del bot. Por favor, inténtalo de nuevo.');
    }
  };

  const handleDeleteStudio = async (studioId) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este estudio? Esta acción no se puede deshacer.')) {
      return;
    }

    try {
      await StudiosAPI.deleteStudio(studioId);
      
      // Actualizar el estado local
      setStudios(prev => prev.filter(s => s.id !== studioId));
      
      console.log('Estudio eliminado:', studioId);
    } catch (error) {
      console.error('Error eliminando estudio:', error);
      alert('Error eliminando el estudio. Por favor, inténtalo de nuevo.');
    }
  };

  const handleConfigureStudio = (studioId) => {
    // Navegar a página de configuración (por implementar)
    console.log('Configurar estudio:', studioId);
    alert('Funcionalidad de configuración en desarrollo');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-darkBg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-darkBg text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold">Dashboard Otzi</h1>
              <p className="text-gray-400 mt-1">Gestiona todos tus bots de estudios de tatuajes</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCreateStudio}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              <FaPlus />
              Nuevo Estudio
            </motion.button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Estudios</p>
                <p className="text-2xl font-bold">{studios.length}</p>
              </div>
              <FaRobot className="text-blue-500 text-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Mensajes Totales</p>
                <p className="text-2xl font-bold">
                  {studios.reduce((sum, studio) => sum + studio.messages, 0)}
                </p>
              </div>
              <FaUsers className="text-green-500 text-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Citas Agendadas</p>
                <p className="text-2xl font-bold">
                  {studios.reduce((sum, studio) => sum + studio.appointments, 0)}
                </p>
              </div>
              <FaCalendarAlt className="text-purple-500 text-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Ingresos Totales</p>
                <p className="text-2xl font-bold">
                  €{studios.reduce((sum, studio) => sum + studio.revenue, 0)}
                </p>
              </div>
              <FaChartLine className="text-yellow-500 text-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Studios Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {studios.map((studio, index) => (
            <motion.div
              key={studio.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{studio.name}</h3>
                  <p className="text-gray-400 text-sm">{studio.phone}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    studio.status === 'active' 
                      ? 'bg-green-900 text-green-300' 
                      : 'bg-red-900 text-red-300'
                  }`}>
                    {studio.status === 'active' ? 'Activo' : 'Inactivo'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-400">{studio.messages}</p>
                  <p className="text-gray-400 text-xs">Mensajes</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-400">{studio.appointments}</p>
                  <p className="text-gray-400 text-xs">Citas</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-400">€{studio.revenue}</p>
                  <p className="text-gray-400 text-xs">Ingresos</p>
                </div>
              </div>

              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleToggleBot(studio.id)}
                  className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 ${
                    studio.status === 'active'
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {studio.status === 'active' ? <FaPause /> : <FaPlay />}
                  {studio.status === 'active' ? 'Pausar' : 'Activar'}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleConfigureStudio(studio.id)}
                  className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 rounded-lg"
                >
                  <FaCog />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDeleteStudio(studio.id)}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg"
                >
                  <FaTrash />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {studios.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <FaRobot className="text-6xl text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              No tienes estudios configurados
            </h3>
            <p className="text-gray-500 mb-6">
              Crea tu primer bot para empezar a automatizar tu estudio de tatuajes
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCreateStudio}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto"
            >
              <FaPlus />
              Crear Primer Estudio
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
