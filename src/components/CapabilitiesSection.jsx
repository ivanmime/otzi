import React from 'react';
import { motion } from 'framer-motion';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: "🎯",
      title: "Análisis Inteligente",
      features: [
        "Procesamiento de texto, imágenes y audio",
        "Reconocimiento de estilos de tatuaje",
        "Cálculo automático de precios y tiempos"
      ]
    },
    {
      icon: "📅",
      title: "Gestión de Calendario",
      features: [
        "Disponibilidad en tiempo real",
        "Reservas automáticas",
        "Notificaciones especiales para proyectos grandes",
        "Manejo de sesiones largas (día completo)"
      ]
    },
    {
      icon: "💬",
      title: "Conversación Natural",
      features: [
        "Comunicación casual estilo WhatsApp",
        "Memoria de conversaciones",
        "Soporte en español",
        "Personalidad cercana y profesional"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-darkBg to-darkGray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Capacidades de <span className="text-gold">Otzi</span>
          </h2>
          <p className="text-xl text-gray-300">Tecnología avanzada para tu estudio</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-darkBg border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-white">{capability.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {capability.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <span className="text-gold text-sm mt-1">•</span>
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;