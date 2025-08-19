import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Terminos = () => {
  return (
    <div className="min-h-screen bg-darkBg text-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-darkBg border-b border-gold/20 py-6"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-gold">
              Otzi Bot
            </Link>
            <Link
              to="/"
              className="text-gray-400 hover:text-gold transition-colors duration-200"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container mx-auto px-6 py-12 max-w-4xl"
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-gold">
          Términos y Condiciones
        </h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Aceptación de los Términos
            </h2>
            <p className="leading-relaxed">
              Al acceder y utilizar Otzi Bot, usted acepta estar sujeto a estos términos y condiciones de uso. 
              Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Descripción del Servicio
            </h2>
            <p className="leading-relaxed">
              Otzi Bot es una plataforma de inteligencia artificial diseñada para proporcionar asistencia 
              y soluciones automatizadas. El servicio incluye, pero no se limita a, procesamiento de 
              consultas, análisis de datos y generación de respuestas inteligentes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Uso Aceptable
            </h2>
            <p className="leading-relaxed">
              Usted se compromete a utilizar Otzi Bot únicamente para fines legales y apropiados. 
              Está prohibido el uso del servicio para actividades ilegales, dañinas o que puedan 
              comprometer la seguridad de otros usuarios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Propiedad Intelectual
            </h2>
            <p className="leading-relaxed">
              Todo el contenido, software y tecnología utilizados en Otzi Bot son propiedad de PinSeo 
              o de nuestros licenciantes. Usted no puede copiar, modificar o distribuir 
              este contenido sin autorización previa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Limitación de Responsabilidad
            </h2>
            <p className="leading-relaxed">
              Otzi Bot se proporciona "tal como está" sin garantías de ningún tipo. No nos hacemos 
              responsables por daños directos, indirectos, incidentales o consecuentes que puedan 
              resultar del uso del servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Modificaciones
            </h2>
            <p className="leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              Los cambios entrarán en vigor inmediatamente después de su publicación. 
              Su uso continuado del servicio constituye la aceptación de los nuevos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Contacto
            </h2>
            <p className="leading-relaxed">
              Si tiene alguna pregunta sobre estos términos y condiciones, puede contactarnos 
              a través de nuestra página de contacto o enviando un correo electrónico a 
              contact@pinseo.es
            </p>
          </section>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>
      </motion.main>
    </div>
  );
};

export default Terminos; 