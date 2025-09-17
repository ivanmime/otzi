import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';

const HeroSection = () => {
  const messages = [
    { text: "¡Hola!", isBot: false },
    { text: "👋 ¡Hola! Soy Otzi, el asistente de Ink Studio. ¿En qué puedo ayudarte?", isBot: true },
    { text: "Quiero un tatuaje realista en el brazo", isBot: false },
    { text: "🎨 Perfecto! Para un tatuaje realista necesito algunos detalles...", isBot: true },
    { text: "💶 El presupuesto aproximado sería: 150€ ¿Te parece bien?", isBot: true },
    { text: "Sí, cuando tienes hora?", isBot: false },
    { text: "📅 Te propongo estas fechas disponibles: \n• Lunes 15 - 10:00h \n• Miércoles 17 - 14:00h", isBot: true },
  ];

  const [visibleMessages, setVisibleMessages] = useState([]);
  const chatRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (messages.length === 0) return;
    if (startedRef.current) return;
    startedRef.current = true;
    setVisibleMessages([]);

    const showMessages = async () => {
      for (let i = 0; i < messages.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000 + (i * 700)));
        setVisibleMessages(prev => {
          // avoid pushing the same message twice (prevents duplicate messages during HMR/StrictMode)
          const last = prev[prev.length - 1];
          if (last && last.text === messages[i].text && last.isBot === messages[i].isBot) {
            return prev;
          }
          return [...prev, messages[i]];
        });
        
        if (chatRef.current) {
          setTimeout(() => {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
          }, 100);
        }
      }
    };

    showMessages();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-darkBg via-darkGray to-darkBg pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6"
            >
              {/* <Logo size="xl" /> */}
            </motion.div>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Automatiza las</span>{' '}
                <span className="text-gold">Reservas</span>{' '}
                <span className="text-white">de tu Estudio de Tatuaje</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Bot de WhatsApp inteligente que gestiona citas, presupuestos y clientes las 24 horas
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="bg-gradient-to-r from-gold to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105 text-center"
              >
                🤖 Pide tu Bot Personalizado
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Chat Mockup */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-darkGray to-black rounded-3xl p-8 border border-gold/30 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🤖</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Otzi Bot</div>
                    <div className="text-green-400 text-sm">● En línea</div>
                  </div>
                </div>
                
                <div ref={chatRef} className="space-y-3 max-h-64 overflow-y-auto">
                  {visibleMessages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`${
                        msg.isBot 
                          ? "bg-gray-700 rounded-lg p-3 text-sm" 
                          : "bg-blue-600 rounded-lg p-3 text-sm ml-8"
                      }`}
                    >
                      {msg.text.split('\n').map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-gold text-black p-3 rounded-full"
            >
              ⚡
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-darkRed text-white p-3 rounded-full"
            >
              💀
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
