import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection = () => {
  const steps = [
    {
      number: "1️⃣",
      title: "Nos cuentas sobre tu estudio",
      description: "Completás un formulario con detalles de tu negocio, especialidades y necesidades específicas"
    },
    {
      number: "2️⃣", 
      title: "Creamos tu bot personalizado",
      description: "Nuestro equipo desarrolla un bot único para tu estudio con tu información y precios"
    },
    {
      number: "3️⃣",
      title: "Lo configuramos en tu WhatsApp", 
      description: "Instalamos y configuramos el bot en tu número de WhatsApp Business sin complicaciones"
    },
    {
      number: "4️⃣",
      title: "Empiezas a automatizar reservas",
      description: "Tu bot está listo para atender clientes 24/7 y generar más ventas automáticamente"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-darkBg">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Proceso a la izquierda */}
          <div className="flex flex-col">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                Cómo <span className="text-gold">funciona</span>
              </h2>
              <p className="text-lg text-gray-300">Proceso simple en 4 pasos</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {steps.slice(0, 2).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center h-full"
                >
                  <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-2xl p-6 text-center hover:border-gold/60 transition-all duration-300 h-full min-h-[220px] w-full flex flex-col items-center justify-center">
                    <div className="text-3xl mb-3">{step.number}</div>
                    <h3 className="text-base font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-xs leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {steps.slice(2, 4).map((step, index) => (
                <motion.div
                  key={index + 2}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: (index + 2) * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center h-full"
                >
                  <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-2xl p-6 text-center hover:border-gold/60 transition-all duration-300 h-full min-h-[220px] w-full flex flex-col items-center justify-center">
                    <div className="text-3xl mb-3">{step.number}</div>
                    <h3 className="text-base font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-xs leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Precios a la derecha */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                Precios <span className="text-gold">Transparentes</span>
              </h2>
              <p className="text-lg text-gray-300">Un plan único diseñado específicamente para estudios de tatuajes</p>
            </div>

            <div className="max-w-sm w-full">
              <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-2xl p-8 text-center">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Plan Único para Estudios de Tatuajes
                  </h4>
                  <div className="text-5xl font-extrabold text-gold mb-2">
                    30€
                    <span className="text-lg font-normal text-gray-300"> / mes</span>
                  </div>
                  <p className="text-sm text-gray-400">Piloto de 3 meses</p>
                </div>

                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-gold mr-3">✓</span>
                    Hasta 1000 leads al mes
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-gold mr-3">✓</span>
                    Personalización visual del bot
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-gold mr-3">✓</span>
                    Métricas e informes
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-gold mr-3">✓</span>
                    Soporte 24/7
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-gold mr-3">✓</span>
                    Opción de renovar a menor precio
                  </li>
                </ul>

                <a
                  href="#contacto"
                  onClick={(e) => { e.preventDefault(); window.location.href = '/contacto'; }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gold text-black px-8 py-4 rounded-xl font-extrabold text-lg hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105 border border-yellow-500"
                >
                  🚀 Empezar Piloto Gratis
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
