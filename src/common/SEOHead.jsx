import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title, 
  description, 
  keywords = "bot asistente, reservas tatuajes, IA tatuajes, automatización estudios, agendar citas",
  ogImage = "https://www.otzibot.com/og-image.jpg",
  canonical = null 
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Viewport and Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color" content="#1a1a1a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Otzi Bot" />
      
      {/* Performance Optimizations */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="/src/index.css" as="style" />
      <link rel="preload" href="/src/App.css" as="style" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:site_name" content="Otzi Bot" />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@otzibot" />
      <meta name="twitter:creator" content="@otzibot" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Otzi Bot" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Structured Data - SoftwareApplication + Service */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Otzi Bot",
          "description": "Bot asistente de IA para automatizar reservas en estudios de tatuajes",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web, iOS, Android",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          },
          "provider": {
            "@type": "Organization",
            "name": "PINSEO",
            "url": "https://www.otzibot.com"
          },
          "featureList": [
            "Automatización de reservas",
            "Chatbot inteligente",
            "Integración con calendarios",
            "Gestión de clientes",
            "Respuestas 24/7",
            "Reducción de consultas repetitivas"
          ],
          "applicationSubCategory": "AI Assistant",
          "screenshot": "https://www.otzibot.com/screenshot.jpg",
          "downloadUrl": "https://www.otzibot.com",
          "installUrl": "https://www.otzibot.com",
          "softwareVersion": "1.0.0",
          "releaseNotes": "Bot asistente de IA para estudios de tatuajes",
          "permissions": "Acceso a calendario, chat, notificaciones",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "150",
            "bestRating": "5",
            "worstRating": "1"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
