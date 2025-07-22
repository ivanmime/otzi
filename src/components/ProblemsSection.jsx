import React from 'react';
import { motion } from 'framer-motion';

const ProblemsSection = () => {
  const problems = [
    {
      icon: "📞",
      title: "Pierdes clientes por no responder a tiempo",
      description: "Las consultas llegan fuera de horario y cuando respondes ya eligieron otro estudio"
    },
    {
      icon: "⏰", 
      title: "Gestionas citas manualmente todo el día",
      description: "Pasas horas coordinando horarios, confirmando citas y reorganizando la agenda"
    },
    {
      icon: "💸",
      title: "Dudas en presupuestos hacen perder ventas", 
      description: "Los clientes se van porque no pueden obtener un precio inmediato para su idea"
    }
  ];

  return (
    <section className="py-20 bg-darkGray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            ¿Te suena <span className="text-darkRed">familiar</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-darkBg border border-darkRed/30 rounded-2xl p-8 text-center hover:border-darkRed/60 transition-all duration-300"
            >
              <div className="text-6xl mb-6">{problem.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{problem.title}</h3>
              <p className="text-gray-300 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;