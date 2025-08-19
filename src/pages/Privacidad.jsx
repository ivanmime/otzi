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
            <p className="leading-relaxed mb-6">
              Nos comprometemos a tratar tus datos personales con responsabilidad y conforme a la normativa vigente en materia de protección de datos. Al utilizar nuestros servicios, aceptas los términos descritos en esta política.
            </p>
            <p className="leading-relaxed mb-6">
              <strong>PINSEO</strong> es la empresa desarrolladora de la aplicación <strong>Otzi Bot</strong>. Este documento se utiliza para informar a los visitantes sobre nuestras políticas con la recopilación, el uso y la divulgación de información personal si alguien decide utilizar nuestro Servicio.
            </p>
            <p className="leading-relaxed">
              Si elige utilizar nuestro Servicio, entonces acepta la recopilación y el uso de la información en relación con esta política. La información personal que recopilamos se utiliza para proporcionar y mejorar el Servicio. No utilizaremos ni compartiremos su información con nadie, excepto como se describe en esta Política de privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Recopilación y Uso de Información
            </h2>
            <p className="leading-relaxed mb-4">
              <strong>PINSEO</strong> recopila y utiliza información personal de los usuarios para operar, gestionar y mantener sus servicios. Los puntos clave incluyen:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Recopilación de Información:</strong> Se recopila información proporcionada por el usuario, como nombre, apellido, dirección de correo electrónico, teléfono, así como información recopilada automáticamente, como datos de uso y cookies.</li>
              <li><strong>Uso de la Información:</strong> La información se utiliza para proporcionar y mejorar los servicios, personalizar la experiencia del usuario, comunicarse con los usuarios y cumplir con obligaciones legales.</li>
              <li><strong>Compartir Información:</strong> Otzi Bot puede compartir información personal con terceros proveedores de servicios, socios comerciales y según lo requiera la ley. Se implementan medidas de seguridad para proteger la información personal contra accesos no autorizados o divulgaciones.</li>
              <li><strong>Seguridad:</strong> Se implementan medidas de seguridad para proteger la información personal de los usuarios contra accesos no autorizados o divulgaciones.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Es recomendable que los usuarios lean detenidamente este documento para comprender completamente las prácticas de privacidad de <strong>PINSEO</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              ARTÍCULO 2. DATOS DE REGISTRO
            </h2>
            <p className="leading-relaxed">
              Siempre que utilice nuestro Servicio, en caso de un error en la aplicación, recopilamos datos e información (a través de servicios de terceros) en su dispositivo llamados datos de registro. Estos datos de registro pueden incluir información como la dirección del Protocolo de Internet ("IP") de su dispositivo, el nombre del dispositivo, la versión del sistema operativo, la configuración de la aplicación al utilizar nuestro Servicio, la fecha y hora de su uso del Servicio y otras estadísticas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              ARTÍCULO 3. DATOS DE PAGO
            </h2>
            <p className="leading-relaxed">
              Los datos de pago se manejan a través de procesadores de pago seguros y certificados. No almacenamos información de tarjetas de crédito en nuestros servidores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              ARTÍCULO 4. COMUNICACIONES
            </h2>
            <p className="leading-relaxed">
              Como parte del uso de nuestro servicio, es posible que te enviemos comunicaciones, incluyendo consejos, actualizaciones y recordatorios para ayudarte a maximizar tu experiencia. Estas comunicaciones son una parte integral del servicio, y al aceptar esta Política de Privacidad, otorgas tu consentimiento para recibirlas. Puedes gestionar tus preferencias de comunicación o darte de baja de ciertos tipos de comunicaciones en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              ARTÍCULO 5. SEGURIDAD
            </h2>
            <p className="leading-relaxed">
              Implementamos las medidas y técnicas apropiadas para ofrecer protección contra el procesamiento ilegal o no autorizado de los datos personales y frente al acceso, la divulgación no autorizada, la alteración, la pérdida o la destrucción ilegal o accidental de los datos personales. Sin embargo, tenga en cuenta que no podemos evitar completamente todos los riesgos para la seguridad asociados al almacenamiento y la transmisión de datos personales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              ARTÍCULO 6. ENLACES A OTROS SITIOS WEB
            </h2>
            <p className="leading-relaxed">
              Tenga en cuenta que esta Política de Privacidad no se aplica a las prácticas de compañías que no poseemos o controlamos ni a personas que no empleamos o no se encuentran bajo nuestra dirección. Nuestros Servicios pueden incluir un enlace u ofrecer otra forma de acceso a Sitios de terceros. Proporcionamos estos enlaces solo para su conveniencia. No controlamos, revisamos ni somos responsables de los sitios de terceros, su contenido o los productos o servicios a través de los sitios de terceros. Nuestra Política de privacidad no se aplica a los sitios de terceros, y si proporciona datos a estos sitios lo hará asumiendo todos los riesgos. Le invitamos a revisar las políticas de privacidad de los sitios de terceros con los que interactúe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              ARTÍCULO 7. PRIVACIDAD DE LOS MENORES DE EDAD
            </h2>
            <p className="leading-relaxed">
              Estos Servicios no se dirigen a personas menores de 18 años. No recopilamos información de identificación de personas menores a 18 años. Si usted es un padre o tutor y sabe que su hijo nos ha proporcionado información personal, comuníquese con nosotros para que podamos realizar las acciones necesarias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              ARTÍCULO 8. CAMBIOS A ESTA POLÍTICA DE PRIVACIDAD
            </h2>
            <p className="leading-relaxed">
              Es posible que la actual Política de Privacidad se actualice cada cierto tiempo. Por lo tanto, se recomienda revisar este documento periódicamente. Cualquier cambio entrará en vigencia inmediatamente después de su publicación en este documento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              ARTÍCULO 9. CONTACTO
            </h2>
            <p className="leading-relaxed">
              Si tiene alguna pregunta o sugerencia sobre nuestra Política de privacidad, puede contactarnos a la dirección de correo electrónico <strong>contact@pinseo.es</strong>
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