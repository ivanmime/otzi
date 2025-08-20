import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../hooks/useCookieConsent';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const { consent, preferences, updateConsent, acceptAll, rejectAll } = useCookieConsent();

  // Show banner if no consent has been given
  React.useEffect(() => {
    if (!consent) {
      setShowBanner(true);
    }
  }, [consent]);

  const handleAcceptAll = () => {
    acceptAll();
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    updateConsent(preferences);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handlePreferenceChange = (type) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    updateConsent({
      ...preferences,
      [type]: !preferences[type]
    });
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-darkGray border-t border-gold/20 p-4 shadow-2xl"
      >
        <div className="container mx-auto max-w-6xl">
          {!showPreferences ? (
            // Main banner
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  🍪 Configuración de Cookies
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Utilizamos cookies para mejorar tu experiencia, analizar el tráfico del sitio y personalizar el contenido. 
                  Al hacer clic en "Aceptar todas", consientes el uso de todas las cookies. 
                  <Link to="/politica-cookies" className="text-gold hover:underline ml-1">
                    Más información
                  </Link>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="px-6 py-2 border border-gold/30 text-gold hover:bg-gold/10 transition-colors rounded-lg text-sm font-medium"
                >
                  Personalizar
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-2 bg-gray-600 hover:bg-gray-500 text-white transition-colors rounded-lg text-sm font-medium"
                >
                  Rechazar todas
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 bg-gold hover:bg-yellow-500 text-black transition-colors rounded-lg text-sm font-medium"
                >
                  Aceptar todas
                </button>
              </div>
            </div>
          ) : (
            // Preferences panel
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  🍪 Preferencias de Cookies
                </h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-darkBg rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">Cookies Necesarias</h4>
                    <p className="text-gray-400 text-sm">Esenciales para el funcionamiento del sitio web</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="w-4 h-4 text-gold bg-darkBg border-gold/30 rounded focus:ring-gold"
                    />
                    <span className="text-gray-400 text-sm ml-2">Siempre activas</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-darkBg rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">Cookies Analíticas</h4>
                    <p className="text-gray-400 text-sm">Nos ayudan a entender cómo usas el sitio</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => handlePreferenceChange('analytics')}
                    className="w-4 h-4 text-gold bg-darkBg border-gold/30 rounded focus:ring-gold"
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-darkBg rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">Cookies de Marketing</h4>
                    <p className="text-gray-400 text-sm">Utilizadas para mostrar anuncios relevantes</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => handlePreferenceChange('marketing')}
                    className="w-4 h-4 text-gold bg-darkBg border-gold/30 rounded focus:ring-gold"
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-darkBg rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">Cookies Funcionales</h4>
                    <p className="text-gray-400 text-sm">Mejoran la funcionalidad y personalización</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={() => handlePreferenceChange('functional')}
                    className="w-4 h-4 text-gold bg-darkBg border-gold/30 rounded focus:ring-gold"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 bg-gold hover:bg-yellow-500 text-black transition-colors rounded-lg text-sm font-medium"
                >
                  Guardar Preferencias
                </button>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-6 py-2 border border-gold/30 text-gold hover:bg-gold/10 transition-colors rounded-lg text-sm font-medium"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
