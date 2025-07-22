import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      studio: "Ink Revolution Studio",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Desde que instalamos el bot, nuestras consultas aumentaron 300%. Ya no perdemos clientes por la noche.",
      metric: "+300% más consultas",
      rating: 5
    },
    {
      name: "María González", 
      studio: "Dark Art Tattoo",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=150&h=150&fit=crop&crop=face",
      text: "El bot maneja todo perfectamente. Ahora puedo enfocarme 100% en tatuar sin interrupciones.",
      metric: "+150% reservas confirmadas",
      rating: 5
    },
    {
      name: "Andrés Silva",
      studio: "Traditional Ink Co.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", 
      text: "Los presupuestos automáticos cerraron el 80% más de ventas. Increíble herramienta.",
      metric: "+80% conversión",
      rating: 5
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
            Casos de <span className="text-gold">Éxito</span>
          </h2>
          <p className="text-xl text-gray-300">Más de 500 estudios ya confían en nosotros</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-darkBg border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gold text-sm">{testimonial.studio}</p>
                  <div className="flex text-gold mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="bg-gradient-to-r from-gold/10 to-transparent border border-gold/30 rounded-lg p-3 text-center">
                <div className="text-gold font-bold text-lg">{testimonial.metric}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;