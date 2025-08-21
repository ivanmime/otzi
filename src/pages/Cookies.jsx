import React from 'react';
import SEOHead from '../common/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import { motion } from 'framer-motion';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-darkBg">
      <SEOHead 
        title="Política de Cookies - Otzi Bot | Asistente de IA para Estudios de Tatuajes"
        description="Política de cookies de Otzi Bot. Información sobre el uso de cookies y tecnologías de seguimiento en nuestro sitio web."
        canonical="https://www.otzibot.com/politica-cookies"
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
                    Política de <span className="text-gold">Cookies</span>
                  </h1>
                  <p className="text-xl text-gray-300">
                    Información sobre el uso de cookies en nuestro sitio web
                  </p>
                </div>

                <div className="space-y-8 text-gray-300">
                  <section>
                    <p className="leading-relaxed mb-6">
                      Esta Política de Cookies explica cómo <strong>PINSEO</strong>, desarrolladora de <strong>Otzi Bot</strong>, 
                      utiliza cookies y tecnologías similares en nuestro sitio web. Esta política cumple con el Reglamento 
                      General de Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos y Garantía de los 
                      Derechos Digitales (LOPDGDD).
                    </p>
                    <p className="leading-relaxed">
                      Al utilizar nuestro sitio web, aceptas el uso de cookies de acuerdo con esta política. 
                      Puedes cambiar tus preferencias de cookies en cualquier momento.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      ¿Qué son las cookies?
                    </h2>
                    <p className="leading-relaxed">
                      Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, 
                      tablet o móvil) cuando visitas un sitio web. Estas cookies permiten que el sitio web 
                      recuerde tus acciones y preferencias durante un período de tiempo, para que no tengas 
                      que volver a introducirlos cada vez que visites el sitio.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Tipos de cookies que utilizamos
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-darkBg p-6 rounded-lg border border-gold/20">
                        <h3 className="text-xl font-semibold text-gold mb-3">
                          1. Cookies Necesarias
                        </h3>
                        <p className="text-gray-300 mb-3">
                          Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar.
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>cookieConsent:</strong> Almacena tus preferencias de cookies</li>
                          <li><strong>sessionId:</strong> Mantiene tu sesión activa durante la navegación</li>
                          <li><strong>csrf:</strong> Protege contra ataques de falsificación de solicitudes</li>
                        </ul>
                        <p className="text-sm text-gray-400 mt-3">
                          <strong>Duración:</strong> Hasta 1 año / <strong>Base legal:</strong> Interés legítimo
                        </p>
                      </div>

                      <div className="bg-darkBg p-6 rounded-lg border border-gold/20">
                        <h3 className="text-xl font-semibold text-gold mb-3">
                          2. Cookies Analíticas
                        </h3>
                        <p className="text-gray-300 mb-3">
                          Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>_ga:</strong> Google Analytics - Distingue usuarios únicos</li>
                          <li><strong>_gid:</strong> Google Analytics - Distingue sesiones</li>
                          <li><strong>_gat:</strong> Google Analytics - Limita la tasa de solicitudes</li>
                        </ul>
                        <p className="text-sm text-gray-400 mt-3">
                          <strong>Duración:</strong> Hasta 2 años / <strong>Base legal:</strong> Consentimiento
                        </p>
                      </div>

                      <div className="bg-darkBg p-6 rounded-lg border border-gold/20">
                        <h3 className="text-xl font-semibold text-gold mb-3">
                          3. Cookies de Marketing
                        </h3>
                        <p className="text-gray-300 mb-3">
                          Utilizadas para mostrar anuncios relevantes y medir la efectividad de campañas.
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>_fbp:</strong> Facebook Pixel - Seguimiento de conversiones</li>
                          <li><strong>_fbc:</strong> Facebook Pixel - Atribución de clics</li>
                          <li><strong>ads_prefs:</strong> Preferencias de anuncios personalizados</li>
                        </ul>
                        <p className="text-sm text-gray-400 mt-3">
                          <strong>Duración:</strong> Hasta 3 meses / <strong>Base legal:</strong> Consentimiento
                        </p>
                      </div>

                      <div className="bg-darkBg p-6 rounded-lg border border-gold/20">
                        <h3 className="text-xl font-semibold text-gold mb-3">
                          4. Cookies Funcionales
                        </h3>
                        <p className="text-gray-300 mb-3">
                          Mejoran la funcionalidad y personalización del sitio web.
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>language:</strong> Recuerda tu idioma preferido</li>
                          <li><strong>theme:</strong> Almacena preferencias de tema (claro/oscuro)</li>
                          <li><strong>formData:</strong> Guarda datos de formularios parcialmente completados</li>
                        </ul>
                        <p className="text-sm text-gray-400 mt-3">
                          <strong>Duración:</strong> Hasta 6 meses / <strong>Base legal:</strong> Consentimiento
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Cookies de terceros
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Nuestro sitio web puede utilizar servicios de terceros que también establecen cookies:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Google Analytics:</strong> Para análisis de tráfico web</li>
                      <li><strong>Google reCAPTCHA:</strong> Para protección contra bots</li>
                      <li><strong>Facebook Pixel:</strong> Para seguimiento de conversiones</li>
                      <li><strong>Cloudflare:</strong> Para seguridad y rendimiento</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Gestión de cookies
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Puedes gestionar tus preferencias de cookies de las siguientes maneras:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-darkBg p-4 rounded-lg">
                        <h4 className="text-gold font-semibold mb-2">1. A través de nuestro banner</h4>
                        <p className="text-sm">Utiliza el banner de cookies que aparece al visitar nuestro sitio.</p>
                      </div>
                      <div className="bg-darkBg p-4 rounded-lg">
                        <h4 className="text-gold font-semibold mb-2">2. Configuración del navegador</h4>
                        <p className="text-sm">Puedes configurar tu navegador para rechazar todas las cookies o para que te avise cuando se envíe una cookie.</p>
                      </div>
                      <div className="bg-darkBg p-4 rounded-lg">
                        <h4 className="text-gold font-semibold mb-2">3. Herramientas de terceros</h4>
                        <p className="text-sm">Utiliza herramientas como Ghostery o Privacy Badger para gestionar cookies de terceros.</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Transferencias internacionales
                    </h2>
                    <p className="leading-relaxed">
                      Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo (EEE). 
                      En estos casos, garantizamos que las transferencias se realizan con las garantías adecuadas, 
                      como cláusulas contractuales estándar aprobadas por la Comisión Europea.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Tus derechos
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Según el RGPD, tienes los siguientes derechos:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Derecho de acceso:</strong> Saber qué cookies utilizamos y por qué</li>
                      <li><strong>Derecho de rectificación:</strong> Corregir datos inexactos</li>
                      <li><strong>Derecho de supresión:</strong> Eliminar tus datos</li>
                      <li><strong>Derecho de limitación:</strong> Limitar el procesamiento</li>
                      <li><strong>Derecho de portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                      <li><strong>Derecho de oposición:</strong> Oponerte al procesamiento</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Cambios en esta política
                    </h2>
                    <p className="leading-relaxed">
                      Podemos actualizar esta Política de Cookies periódicamente. Te notificaremos cualquier cambio 
                      significativo a través de nuestro sitio web o por correo electrónico. Te recomendamos revisar 
                      esta política regularmente.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Contacto
                    </h2>
                    <p className="leading-relaxed">
                      Si tienes alguna pregunta sobre esta Política de Cookies o sobre el uso de cookies en nuestro sitio web, 
                      puedes contactarnos en <strong>contact@pinseo.es</strong>
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
                  Tipos de <span className="text-gold">Cookies</span>
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      🔒
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Necesarias</h4>
                      <p className="text-gray-300 text-sm">Funcionamiento del sitio web</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      📊
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Analíticas</h4>
                      <p className="text-gray-300 text-sm">Análisis de tráfico y uso</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      🎯
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Marketing</h4>
                      <p className="text-gray-300 text-sm">Publicidad personalizada</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      ⚙️
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Funcionales</h4>
                      <p className="text-gray-300 text-sm">Mejoras de experiencia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-darkGray to-darkBg border border-gold/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Documentos <span className="text-gold">Relacionados</span>
                </h3>
                <div className="space-y-4">
                  <a href="/terminos" className="block text-gold hover:text-yellow-400 transition-colors duration-200">
                    📋 Términos y Condiciones
                  </a>
                  <a href="/privacidad" className="block text-gold hover:text-yellow-400 transition-colors duration-200">
                    🔒 Política de Privacidad
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

export default Cookies;
