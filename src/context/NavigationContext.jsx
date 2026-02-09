import React, { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  // Screens: 'splash', 'language', 'onboarding', 'profile', 'home', etc.
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [history, setHistory] = useState(['splash']);
  const [params, setParams] = useState({}); // To pass data between screens

  // Listen to browser back button
  useEffect(() => {
    const handlePopState = (event) => {
      // Prevent default browser back behavior if we want to handle it internally
      // But for PWA, we usually want to sync with browser history
      if (history.length > 1) {
        // If we have history, go back internally
        goBack(true); 
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [history]);

  const navigateTo = (screenName, screenParams = {}) => {
    window.history.pushState({ screen: screenName }, screenName, `/${screenName === 'home' ? '' : screenName}`);
    setParams(screenParams);
    setHistory(prev => [...prev, screenName]);
    setCurrentScreen(screenName);
    
    // Scroll to top on navigation
    window.scrollTo(0, 0);
  };

  const goBack = (isBrowserEvent = false) => {
    if (history.length <= 1) return; // Can't go back further

    const newHistory = [...history];
    newHistory.pop(); // Remove current
    const previousScreen = newHistory[newHistory.length - 1];

    setHistory(newHistory);
    setCurrentScreen(previousScreen);
    
    if (!isBrowserEvent) {
      window.history.back();
    }
  };

  const resetNavigation = (screenName) => {
    window.history.replaceState({ screen: screenName }, screenName, '/');
    setHistory([screenName]);
    setCurrentScreen(screenName);
    setParams({});
  };

  return (
    <NavigationContext.Provider 
      value={{ 
        currentScreen, 
        navigateTo, 
        goBack, 
        resetNavigation,
        params
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
