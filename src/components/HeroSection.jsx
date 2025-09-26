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
    { text: "Sí, ¿Cuando tienes hora?", isBot: false },
    { text: "📅 Te propongo estas fechas disponibles: \n• Lunes 15 - 10:00h \n• Miércoles 17 - 14:00h", isBot: true },
  ];

  const [visibleMessages, setVisibleMessages] = useState([]);
  const chatRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    console.debug('[HeroSection] useEffect start');
    if (messages.length === 0) {
      console.debug('[HeroSection] no messages');
      return;
    }
    if (startedRef.current) {
      console.debug('[HeroSection] already startedRef, skipping');
      return;
    }
    startedRef.current = true;
    setVisibleMessages([]);
    console.debug('[HeroSection] initialized, starting sequence');

    let cancelled = false;
    const timers = [];

    const showMessages = async () => {
      console.debug('[HeroSection] showMessages invoked');
      for (let i = 0; i < messages.length; i++) {
        if (cancelled) {
          console.debug('[HeroSection] cancelled before message', i);
          return;
        }
        // create a cancellable timeout and await it
        console.debug('[HeroSection] waiting before message', i, messages[i].text);
        await new Promise((resolve) => {
          const id = setTimeout(resolve, 1000 + (i * 700));
          timers.push(id);
        });
        if (cancelled) {
          console.debug('[HeroSection] cancelled after wait', i);
          return;
        }

        console.debug('[HeroSection] pushing message', i, messages[i].text);
        setVisibleMessages(prev => {
          // avoid pushing the same message twice (prevents duplicate messages during HMR/StrictMode)
          const last = prev[prev.length - 1];
          if (last && last.text === messages[i].text && last.isBot === messages[i].isBot) {
            console.debug('[HeroSection] duplicate detected, skipping', messages[i].text);
            return prev;
          }
          return [...prev, messages[i]];
        });
        
        if (chatRef.current) {
          const id = setTimeout(() => {
            if (!cancelled && chatRef.current) {
              chatRef.current.scrollTop = chatRef.current.scrollHeight;
            }
          }, 100);
          timers.push(id);
        }
      }

      if (cancelled) {
        console.debug('[HeroSection] cancelled at end of sequence');
        return;
      }
      // After the last message appears, wait 3s, then clear the chat and restart the sequence
      console.debug('[HeroSection] sequence complete, scheduling restart in 3s');
      const restartId = setTimeout(() => {
        if (cancelled) {
          console.debug('[HeroSection] cancelled before restart');
          return;
        }
        console.debug('[HeroSection] clearing messages for restart');
        setVisibleMessages([]);
        // small delay before restarting to avoid immediate overlap
        const smallDelayId = setTimeout(() => {
          if (cancelled) {
            console.debug('[HeroSection] cancelled before small delay restart');
            return;
          }
          console.debug('[HeroSection] restarting sequence');
          showMessages();
        }, 300);
        timers.push(smallDelayId);
      }, 3000);
      timers.push(restartId);
    };

    showMessages();

    return () => {
      console.debug('[HeroSection] cleanup, cancelling timers and resetting startedRef');
      cancelled = true;
      // clear any pending timeouts to avoid callbacks after unmount
      timers.forEach((id) => clearTimeout(id));
      // reset startedRef so StrictMode remounts can run the sequence again
      startedRef.current = false;
    };
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
              <button
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                💰 Ver Precio
              </button>
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
                
                <div ref={chatRef} className="space-y-3 h-64 overflow-y-auto">
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
