import React from 'react';
import Spinner from './Spinner';

/**
 * 🌀 Full Screen Loader
 */
const Loader = ({ fullScreen = false, text = null }) => {
  const content = (
    <div className={`flex flex-col items-center justify-center gap-4 ${fullScreen ? 'fixed inset-0 z-50 bg-cosmic-900' : 'w-full py-10'}`}>
      
      {/* Animated Orb */}
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-mystic-500/20 animate-[spin-slow_3s_linear_infinite]" />
        <div className="absolute inset-0 w-16 h-16 rounded-full border-t-4 border-mystic-400 animate-spin" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-mystic-300 rounded-full blur-md animate-pulse" />
      </div>

      {text && (
        <p className="text-mystic-200 text-sm font-medium tracking-widest uppercase animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  return content;
};

export default Loader;
