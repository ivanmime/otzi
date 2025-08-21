import React from 'react';
import SEOHead from '../common/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import { motion } from 'framer-motion';

const Terminos = () => {
  return (
    <div className="min-h-screen bg-darkBg">
      <SEOHead 
        title="Términos y Condiciones - Otzi Bot | Asistente de IA para Estudios de Tatuajes"
        description="Términos y condiciones de uso de Otzi Bot. Información sobre derechos y responsabilidades al usar nuestro asistente de IA."
        canonical="https://www.otzibot.com/terminos-y-condiciones"
      />
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-darkGray to-darkBg border border-gold/20 rounded-3xl p-8">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-white mb-4">
                    Términos y <span className="text-gold">Condiciones</span>
                  </h1>
                  <p className="text-xl text-gray-300">
                    Información legal sobre el uso de Otzi Bot
                  </p>
                </div>

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

                <div className="text-center mt-8">
                  <p className="text-gray-400 text-sm">
                    Última actualización: {new Date().toLocaleDateString('es-ES')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Información <span className="text-gold">Legal</span>
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      📋
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Términos de Uso</h4>
                      <p className="text-gray-300 text-sm">Condiciones para usar Otzi Bot</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      🔒
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Protección de Datos</h4>
                      <p className="text-gray-300 text-sm">Cumplimiento RGPD y LOPDGDD</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      ⚖️
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Jurisdicción Española</h4>
                      <p className="text-gray-300 text-sm">Leyes del Reino de España</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      📧
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Contacto Legal</h4>
                      <p className="text-gray-300 text-sm">contact@pinseo.es</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-darkGray to-darkBg border border-gold/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Documentos <span className="text-gold">Relacionados</span>
                </h3>
                <div className="space-y-4">
                  <a href="/privacidad" className="block text-gold hover:text-yellow-400 transition-colors duration-200">
                    📄 Política de Privacidad
                  </a>
                  <a href="/cookies" className="block text-gold hover:text-yellow-400 transition-colors duration-200">
                    🍪 Política de Cookies
                  </a>
                  <a href="/contacto" className="block text-gold hover:text-yellow-400 transition-colors duration-200">
                    📞 Página de Contacto
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Terminos; 