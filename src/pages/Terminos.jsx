import React from 'react';
import SEOHead from '../common/SEOHead';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Terminos = () => {
  return (
    <div className="min-h-screen bg-darkBg text-white">
      <SEOHead 
        title="Términos y Condiciones - Otzi Bot"
        description="Lee nuestros términos y condiciones para el uso de Otzi Bot. Conoce las reglas y políticas que rigen nuestro servicio de IA para estudios de tatuajes."
        canonical="https://www.otzibot.com/terminos-y-condiciones"
      />
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-darkBg border-t border-gold/20 py-6"
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
            <p className="leading-relaxed">
              La presente sección establece los Términos y Condiciones de uso así como nuestra Política de Privacidad, los cuales regulan el acceso y utilización de nuestros servicios, productos y plataformas digitales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Definiciones
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>"Aplicación":</strong> la plataforma web denominada Otzi Bot.</li>
              <li><strong>"Usuario":</strong> la persona física que crea una cuenta o utiliza la Aplicación.</li>
              <li><strong>"Contenido":</strong> textos, fotos, videos, datos y cualquier otro material publicado en la Aplicación.</li>
              <li><strong>"Servicio":</strong> Otzi Bot, plataforma de inteligencia artificial desarrollada por PINSEO.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Aceptación de los Términos
            </h2>
            <p className="leading-relaxed">
              Al crear una cuenta o utilizar la Aplicación, el Usuario confirma haber leído y aceptado íntegramente estos Términos y Condiciones y la Política de Privacidad vinculada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Elegibilidad
            </h2>
            <p className="leading-relaxed">
              El Usuario declara ser mayor de 18 años y tener capacidad legal para celebrar contratos. Al aceptar estos Términos, el Usuario manifiesta que cumple con todos los requisitos legales para utilizar el servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Registro y Cuenta
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>El Usuario debe proporcionar información veraz y actualizada.</li>
              <li>El Usuario es responsable de mantener la confidencialidad de sus credenciales y de todas las actividades realizadas bajo su cuenta.</li>
              <li>El Usuario se compromete a actualizar su información en caso de cambios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Servicios
            </h2>
            <p className="leading-relaxed">
              Otzi Bot ofrece asistencia y soluciones automatizadas de inteligencia artificial de carácter exclusivamente informativo. La Aplicación no sustituye el consejo, diagnóstico ni tratamiento profesional. Antes de realizar cambios significativos basados en las respuestas del bot, consulte a un profesional cualificado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Contenido del Usuario
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>El Usuario mantiene la titularidad de su Contenido, pero otorga a PINSEO una licencia mundial, no exclusiva, sublicenciable y libre de regalías para usar, reproducir, modificar y distribuir dicho Contenido en cualquier medio.</li>
              <li>El Usuario garantiza que posee todos los derechos necesarios sobre el Contenido publicado y que este no es ilegal, difamatorio ni infringe derechos de terceros.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Propiedad Intelectual
            </h2>
            <p className="leading-relaxed">
              Todos los derechos sobre la Aplicación, incluyendo software, textos, gráficos, logotipos e iconos, pertenecen a PINSEO o a sus licenciantes. Queda prohibida su reproducción o explotación sin autorización escrita previa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Privacidad y Protección de Datos
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>El tratamiento de datos se basa en el consentimiento explícito del Usuario y cumple con la normativa española de protección de datos (RGPD y LOPDGDD).</li>
              <li>La Política de Privacidad describe finalidades, transferencias internacionales, plazo de conservación y derechos ARCO.</li>
              <li>PINSEO conserva un registro de la versión de estos Términos aceptada por cada Usuario.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Uso Aceptable
            </h2>
            <p className="leading-relaxed mb-4">El Usuario se compromete a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>No violar leyes o reglamentos.</li>
              <li>No publicar Contenido ofensivo, difamatorio o ilegal.</li>
              <li>No interferir con el funcionamiento de la Aplicación, realizar ingeniería inversa ni scraping.</li>
              <li>No utilizar el servicio para actividades ilegales o dañinas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Terminación de la Cuenta
            </h2>
            <p className="leading-relaxed">
              PINSEO puede suspender o cancelar la cuenta del Usuario en cualquier momento por incumplimiento de estos Términos o sospecha de fraude, sin perjuicio de otras acciones legales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              11. Exención de Garantías y Limitación de Responsabilidad
            </h2>
            <p className="leading-relaxed">
              La Aplicación se provee "tal cual". PINSEO no garantiza resultados específicos ni la precisión absoluta de las respuestas del bot. En ningún caso PINSEO será responsable por daños indirectos y su responsabilidad total se limita al monto efectivamente pagado por el Usuario en los últimos 12 meses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              12. Indemnización
            </h2>
            <p className="leading-relaxed">
              El Usuario indemnizará y mantendrá libre de daños a PINSEO frente a reclamaciones, pérdidas o gastos derivados de su uso indebido de la Aplicación o de su Contenido.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              13. Modificaciones de los Términos
            </h2>
            <p className="leading-relaxed">
              PINSEO podrá modificar estos Términos en cualquier momento. Las modificaciones se notificarán con al menos 30 días de antelación por e‑mail y/o dentro de la Aplicación. El uso continuado tras dicho plazo implica aceptación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              14. Cesión
            </h2>
            <p className="leading-relaxed">
              PINSEO podrá ceder total o parcialmente sus derechos y obligaciones en virtud de estos Términos (p. ej. fusión, adquisición) previa notificación al Usuario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              15. Divisibilidad
            </h2>
            <p className="leading-relaxed">
              Si alguna disposición de estos Términos se considera inválida o inaplicable, las restantes mantendrán plena vigencia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              16. Ley Aplicable y Jurisdicción
            </h2>
            <p className="leading-relaxed">
              Estos Términos se regirán por las leyes del Reino de España. Cualquier disputa se someterá a la jurisdicción exclusiva de los tribunales competentes de Madrid, España.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              17. Contacto
            </h2>
            <p className="leading-relaxed">
              Si tiene alguna pregunta sobre estos términos y condiciones, puede contactarnos 
              a través de nuestra página de contacto o enviando un correo electrónico a 
              <strong> contact@pinseo.es</strong>
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