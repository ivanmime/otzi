import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      icon: "✅",
      title: "Respuestas personalizadas por especialidad",
      description: "Información específica sobre realismo, tradicional, blackwork y más estilos"
    },
    {
      icon: "✅", 
      title: "Integración con tu calendario real",
      description: "Sincronización automática con Google Calendar, evita conflictos de horarios"
    },
    {
      icon: "✅",
      title: "Cálculo automático de presupuestos", 
      description: "Precios dinámicos basados en tamaño, complejidad, colores y tiempo estimado"
    },
    {
      icon: "✅",
      title: "Recordatorios de citas por WhatsApp",
      description: "Notificaciones automáticas 24h y 2h antes, reduce las cancelaciones"
    },
    {
      icon: "✅",
      title: "Formularios de cuidados post-tatuaje",
      description: "Instrucciones personalizadas de cuidado según el tipo de tatuaje realizado"
    },
    {
      icon: "✅",
      title: "Analytics y reportes de conversiones",
      description: "Dashboard completo con métricas de consultas, conversiones y ingresos"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-darkBg to-darkGray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Características del <span className="text-gold">Bot</span>
          </h2>
          <p className="text-xl text-gray-300">Todo lo que necesitas para automatizar tu estudio</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-darkBg border border-gold/20 rounded-2xl p-6 hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10"
            >
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-gold">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;