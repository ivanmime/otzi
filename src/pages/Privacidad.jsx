import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Privacidad = () => {
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
          Política de Privacidad
        </h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Información que Recopilamos
            </h2>
            <p className="leading-relaxed">
              Recopilamos información que usted nos proporciona directamente, como cuando crea una cuenta, 
              utiliza Otzi Bot o se comunica con nosotros. Esta información puede incluir su nombre, 
              dirección de correo electrónico y cualquier otra información que decida compartir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Uso de la Información
            </h2>
            <p className="leading-relaxed">
              Utilizamos la información recopilada para proporcionar, mantener y mejorar Otzi Bot, 
              comunicarnos con usted, personalizar su experiencia y cumplir con nuestras obligaciones legales. 
              No vendemos, alquilamos ni compartimos su información personal con terceros con fines comerciales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Cookies y Tecnologías Similares
            </h2>
            <p className="leading-relaxed">
              Utilizamos cookies y tecnologías similares para mejorar la funcionalidad de nuestro sitio web, 
              analizar el tráfico y personalizar el contenido. Puede controlar el uso de cookies a través 
              de la configuración de su navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Compartir Información
            </h2>
            <p className="leading-relaxed">
              Solo compartimos su información personal en las siguientes circunstancias: con su consentimiento 
              explícito, para cumplir con obligaciones legales, para proteger nuestros derechos y seguridad, 
              o en caso de fusión o adquisición empresarial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Seguridad de la Información
            </h2>
            <p className="leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su 
              información personal contra acceso no autorizado, alteración, divulgación o destrucción. 
              Sin embargo, ningún método de transmisión por internet es 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Sus Derechos
            </h2>
            <p className="leading-relaxed">
              Usted tiene derecho a acceder, corregir, eliminar y portar su información personal. 
              También puede oponerse al procesamiento de sus datos o solicitar la limitación del mismo. 
              Para ejercer estos derechos, contáctenos a través de los medios proporcionados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Retención de Datos
            </h2>
            <p className="leading-relaxed">
              Conservamos su información personal solo durante el tiempo necesario para cumplir con los 
              propósitos descritos en esta política, a menos que la ley requiera un período de retención 
              más largo o que usted solicite su eliminación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Cambios en esta Política
            </h2>
            <p className="leading-relaxed">
              Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos cualquier 
              cambio significativo a través de nuestro sitio web o por correo electrónico. Su uso continuado 
              del servicio después de los cambios constituye la aceptación de la nueva política.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Contacto
            </h2>
            <p className="leading-relaxed">
              Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos su información, 
              puede contactarnos a través de nuestra página de contacto o enviando un correo electrónico a 
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

export default Privacidad; 