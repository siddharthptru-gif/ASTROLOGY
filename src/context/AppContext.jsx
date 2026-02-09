import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const AppContext = createContext();

// Provider Component
export const AppProvider = ({ children }) => {
  const [isAppReady, setIsAppReady] = useState(false);
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  
  // PWA Install Prompt State
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    // Check if this is the first launch
    const storedFirstLaunch = localStorage.getItem('palm_reader_first_launch');
    if (storedFirstLaunch === 'false') {
      setIsFirstLaunch(false);
    }

    // Simulate initial resource loading
    const timer = setTimeout(() => {
      setIsAppReady(true);
    }, 1500);

    // PWA Install Event Listener
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show prompt after a delay or specific interaction
      setTimeout(() => setShowInstallPrompt(true), 5000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const completeOnboarding = () => {
    setIsFirstLaunch(false);
    localStorage.setItem('palm_reader_first_launch', 'false');
  };

  const showGlobalLoader = (message = 'Consulting the stars...') => {
    setLoadingMessage(message);
    setIsLoading(true);
  };

  const hideGlobalLoader = () => {
    setIsLoading(false);
    setLoadingMessage('');
  };

  const installPWA = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isAppReady,
        isFirstLaunch,
        completeOnboarding,
        isLoading,
        loadingMessage,
        showGlobalLoader,
        hideGlobalLoader,
        showInstallPrompt,
        installPWA,
        dismissInstallPrompt: () => setShowInstallPrompt(false)
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
