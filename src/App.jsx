import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Terminos from './pages/Terminos';
import Privacidad from './pages/Privacidad';
import Cookies from './pages/Cookies';
import './index.css';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-darkBg text-white">
                       <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/contacto" element={<Contact />} />
                 <Route path="/terminos-y-condiciones" element={<Terminos />} />
                 <Route path="/politica-de-privacidad" element={<Privacidad />} />
                 <Route path="/politica-cookies" element={<Cookies />} />
               </Routes>
      </div>
      <CookieBanner />
    </Router>
  );
}

export default App;