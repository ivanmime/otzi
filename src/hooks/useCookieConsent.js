import { useState } from 'react';

export const useCookieConsent = () => {
  const getSavedConsent = () => {
    try {
      const saved = localStorage.getItem('cookieConsent');
      if (!saved) return null;
      const parsed = JSON.parse(saved);
      return parsed || null;
    } catch (error) {
      console.error('Error parsing cookie consent:', error);
      return null;
    }
  };

  const [consent, setConsent] = useState(() => getSavedConsent());
  const [preferences, setPreferences] = useState(() => {
    const saved = getSavedConsent();
    if (saved) {
      return {
        necessary: true,
        analytics: !!saved.analytics,
        marketing: !!saved.marketing,
        functional: !!saved.functional
      };
    }
    return {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
  });

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
