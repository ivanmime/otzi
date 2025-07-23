import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';


const Contact = () => {
  const [formData, setFormData] = useState({
    studioName: '',
    ownerName: '',
    yearsInBusiness: '',
    city: '',
    email: '',
    phone: '',
    instagram: '',
    website: '',
    numArtists: '',
    monthlyConsultations: '',
    automationNeeds: [],
    comments: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['studioName', 'ownerName', 'city', 'email', 'phone'];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'Este campo es obligatorio';
      }
    });
    
    // Email validation
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  const SITE_KEY = '6LfJC40rAAAAABEtYthdb5R365QVfG85H0VQo30Y';

  useEffect(() => {
    // Cargar el script de reCAPTCHA v3 si no está presente
    if (!window.grecaptcha) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Esperar a que grecaptcha esté disponible
      if (!window.grecaptcha) {
        setCaptchaError('No se pudo cargar el captcha. Intenta de nuevo.');
        setIsLoading(false);
        return;
      }
      // Ejecutar reCAPTCHA v3
      const token = await window.grecaptcha.execute(SITE_KEY, { action: 'submit' });
      if (!token) {
        setCaptchaError('No se pudo validar el captcha.');
        setIsLoading(false);
        return;
      }
      setCaptchaError(null);
      const formAction = 'https://formsubmit.co/ajax/pinseo25@gmail.com';
      const payload = { ...formData };
      payload.automationNeeds = formData.automationNeeds.join(', ');
      payload._subject = `Nueva solicitud de bot: ${formData.studioName}`;
      payload['g-recaptcha-response'] = token;
      
      const response = await fetch(formAction, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        setIsLoading(false);
        setIsSubmitted(true);
      } else {
        throw new Error('Error en el envío');
      }
      
    } catch (error) {
      setIsLoading(false);
      setCaptchaError('Hubo un error al enviar el formulario. Intenta nuevamente.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-darkBg">
        <Header />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-3xl p-12">
                <div className="text-6xl mb-6">✅</div>
                <h1 className="text-4xl font-bold text-white mb-6">
                  ¡Solicitud Enviada!
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Hemos recibido tu información. Te contactaremos en las próximas 24 horas para comenzar con tu bot personalizado.
                </p>
                
                <div className="bg-darkBg rounded-lg p-6 text-left">
                  <h3 className="text-gold font-semibold mb-4">Próximos pasos:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>📞 Te llamaremos para confirmar detalles</li>
                    <li>📋 Crearemos tu propuesta personalizada</li>
                    <li>🎯 Programaremos una demo de tu bot</li>
                    <li>🚀 ¡Tu bot estará listo pronto!</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-darkBg">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-darkGray to-darkBg border border-gold/20 rounded-3xl p-8">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-white mb-4">
                    Solicita tu Bot <span className="text-gold">Personalizado</span>
                  </h1>
                  <p className="text-xl text-gray-300">
                    Cuéntanos sobre tu estudio y te contactamos en 24h
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Studio Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-6">Información del Estudio</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Nombre del estudio *
                        </label>
                        <input
                          type="text"
                          name="studioName"
                          value={formData.studioName}
                          onChange={handleInputChange}
                          className={`w-full bg-darkBg border ${errors.studioName ? 'border-red-500' : 'border-gold/30'} rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none`}
                          placeholder="Ej: Ink Revolution Studio"
                        />
                        {errors.studioName && <p className="text-red-500 text-xs mt-1">{errors.studioName}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Propietario/Manager principal *
                        </label>
                        <input
                          type="text"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleInputChange}
                          className={`w-full bg-darkBg border ${errors.ownerName ? 'border-red-500' : 'border-gold/30'} rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none`}
                          placeholder="Tu nombre completo"
                        />
                        {errors.ownerName && <p className="text-red-500 text-xs mt-1">{errors.ownerName}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Años en funcionamiento
                        </label>
                        <select
                          name="yearsInBusiness"
                          value={formData.yearsInBusiness}
                          onChange={handleInputChange}
                          className="w-full bg-darkBg border border-gold/30 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none"
                        >
                          <option value="">Selecciona...</option>
                          <option value="<1">Menos de 1 año</option>
                          <option value="1-3">1-3 años</option>
                          <option value="4-7">4-7 años</option>
                          <option value="8+">8+ años</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Ciudad/Ubicación *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={`w-full bg-darkBg border ${errors.city ? 'border-red-500' : 'border-gold/30'} rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none`}
                          placeholder="Ciudad, País"
                        />
                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-6">Contacto</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Email principal *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full bg-darkBg border ${errors.email ? 'border-red-500' : 'border-gold/30'} rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none`}
                          placeholder="tu@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Teléfono de contacto *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full bg-darkBg border ${errors.phone ? 'border-red-500' : 'border-gold/30'} rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none`}
                          placeholder="+54 9 11 1234-5678"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Instagram del estudio
                        </label>
                        <input
                          type="text"
                          name="instagram"
                          value={formData.instagram}
                          onChange={handleInputChange}
                          className="w-full bg-darkBg border border-gold/30 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none"
                          placeholder="@tu_estudio"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Página web (opcional)
                        </label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full bg-darkBg border border-gold/30 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none"
                          placeholder="https://tu-estudio.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Business Details */}
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-6">Detalles del Negocio</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Número de tatuadores
                        </label>
                        <select
                          name="numArtists"
                          value={formData.numArtists}
                          onChange={handleInputChange}
                          className="w-full bg-darkBg border border-gold/30 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none"
                        >
                          <option value="">Selecciona...</option>
                          <option value="1">1 tatuador</option>
                          <option value="2-3">2-3 tatuadores</option>
                          <option value="4-6">4-6 tatuadores</option>
                          <option value="7+">7+ tatuadores</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Consultas mensuales aproximadas
                        </label>
                        <select
                          name="monthlyConsultations"
                          value={formData.monthlyConsultations}
                          onChange={handleInputChange}
                          className="w-full bg-darkBg border border-gold/30 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none"
                        >
                          <option value="">Selecciona...</option>
                          <option value="<50">Menos de 50</option>
                          <option value="50-100">50-100</option>
                          <option value="100-200">100-200</option>
                          <option value="200+">Más de 200</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Specific Needs */}
                  <div>
                    <h3 className="text-xl font-semibold text-gold mb-6">Necesidades Específicas</h3>
                    <div className="mb-6">
                      <label className="block text-white font-medium mb-4">
                        ¿Qué quieres automatizar? (selecciona todas las que apliquen)
                      </label>
                      <div className="space-y-3">
                        {[
                          'Respuestas a consultas generales',
                          'Agenda de citas',
                          'Presupuestos automáticos',
                          'Recordatorios de citas',
                          'Información de cuidados post-tatuaje'
                        ].map((need) => (
                          <label key={need} className="flex items-center space-x-2 text-gray-300">
                            <input
                              type="checkbox"
                              value={need}
                              checked={formData.automationNeeds.includes(need)}
                              onChange={(e) => handleCheckboxChange(e, 'automationNeeds')}
                              className="text-gold focus:ring-gold"
                            />
                            <span>{need}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Comentarios adicionales
                      </label>
                      <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-darkBg border border-gold/30 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none"
                        placeholder="Cuéntanos cualquier detalle específico sobre tu estudio o necesidades..."
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    {/* El captcha v3 no requiere widget visual, solo mostrar error si existe */}
                    {captchaError && <p className="text-red-500 text-xs mt-2">{captchaError}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-gradient-to-r from-gold to-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl hover:shadow-gold/30'
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      '📨 Enviar Solicitud'
                    )}
                  </button>
                </form>
                <div className="mt-6 text-xs text-gray-400 text-center">
                  Este sitio está protegido por reCAPTCHA y Google. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Política de Privacidad</a> y <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Términos de Servicio</a> aplican.
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
                  ¿Qué pasa <span className="text-gold">después</span>?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Analizamos tu estudio</h4>
                      <p className="text-gray-300 text-sm">Revisamos tu información en 24h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Creamos propuesta personalizada</h4>
                      <p className="text-gray-300 text-sm">Diseño específico en 2-3 días</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Videollamada de presentación</h4>
                      <p className="text-gray-300 text-sm">Cuando prefieras</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Tu bot estará listo</h4>
                      <p className="text-gray-300 text-sm">¡Listo para automatizar tu estudio!</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
