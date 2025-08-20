import { useState, useEffect } from 'react';

export const useCookieConsent = () => {
  const [consent, setConsent] = useState(null);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Load consent from localStorage on mount
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      try {
        const parsedConsent = JSON.parse(savedConsent);
        setConsent(parsedConsent);
        setPreferences({
          necessary: parsedConsent.necessary || true,
          analytics: parsedConsent.analytics || false,
          marketing: parsedConsent.marketing || false,
          functional: parsedConsent.functional || false
        });
      } catch (error) {
        console.error('Error parsing cookie consent:', error);
        setConsent(null);
      }
    }
  }, []);

  const updateConsent = (newPreferences) => {
    const consentData = {
      ...newPreferences,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setConsent(consentData);
    setPreferences(newPreferences);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    updateConsent(allAccepted);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    updateConsent(onlyNecessary);
  };

  const hasConsent = (type) => {
    if (!consent) return false;
    return consent[type] || false;
  };

  const canUseAnalytics = () => hasConsent('analytics');
  const canUseMarketing = () => hasConsent('marketing');
  const canUseFunctional = () => hasConsent('functional');

  return {
    consent,
    preferences,
    updateConsent,
    acceptAll,
    rejectAll,
    hasConsent,
    canUseAnalytics,
    canUseMarketing,
    canUseFunctional
  };
};
