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
    <section className="py-20 bg-darkBg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Cómo <span className="text-gold">funciona</span>
          </h2>
          <p className="text-xl text-gray-300">Proceso simple en 4 pasos</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-2xl p-6 text-center hover:border-gold/60 transition-all duration-300 h-full">
                <div className="text-4xl mb-4">{step.number}</div>
                <h3 className="text-lg font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gold text-2xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;