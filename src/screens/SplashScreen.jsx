import React, { useEffect } from 'react';
import AppLogo from '@assets/logos/AppLogo';
import { useNavigation } from '@hooks/useNavigation';
import { useApp } from '@context/AppContext';

const SplashScreen = () => {
  const { navigateTo, resetNavigation } = useNavigation();
  const { isFirstLaunch } = useApp();

  useEffect(() => {
    // Artificial delay for branding + loading initialization
    const timer = setTimeout(() => {
      if (isFirstLaunch) {
        resetNavigation('language');
      } else {
        resetNavigation('home');
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [isFirstLaunch, resetNavigation]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-cosmic-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-mystic-900/20 rounded-full blur-[100px] animate-pulse-glow" />
      
      {/* Logo Animation */}
      <div className="relative z-10 flex flex-col items-center animate-fade-in-up">
        <div className="mb-8 p-6 rounded-full bg-white/5 border border-white/10 shadow-glow backdrop-blur-md">
          <AppLogo className="w-24 h-24 text-white animate-float" />
        </div>
        
        <h1 className="text-3xl font-bold text-white tracking-widest uppercase mb-2">
          AI Palm Reader
        </h1>
        <p className="text-sm text-mystic-200 tracking-[0.2em] opacity-80">
          DESTINY AWAITS
        </p>
      </div>

      {/* Loader */}
      <div className="absolute bottom-20">
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-mystic-400 w-1/2 animate-[shimmer_1.5s_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
