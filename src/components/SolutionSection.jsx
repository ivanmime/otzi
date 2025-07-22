import React from 'react';
import { motion } from 'framer-motion';

const SolutionSection = () => {
  const solutions = [
    {
      icon: "🤖",
      title: "Responde consultas automáticamente 24/7",
      description: "Tu bot atiende clientes mientras duermes, nunca pierdes una oportunidad de venta"
    },
    {
      icon: "📅", 
      title: "Agenda citas según tu disponibilidad real",
      description: "Sincronización inteligente con tu calendario, evita dobles reservas y optimiza tu tiempo"
    },
    {
      icon: "💰",
      title: "Calcula presupuestos precisos al instante", 
      description: "Precios automáticos basados en tamaño, complejidad y estilo, cierra más ventas"
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
            Tu bot se encarga de <span className="text-gold">todo</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-2xl p-8 text-center hover:border-gold/60 transition-all duration-300 hover:shadow-xl hover:shadow-gold/10"
            >
              <div className="text-6xl mb-6">{solution.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-gray-300 leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;