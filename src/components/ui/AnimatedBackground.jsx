import React from 'react';

/**
 * 🌌 Animated Cosmic Background
 * Adds stars and floating nebulas.
 */
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Space Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-900 via-cosmic-800 to-black" />
      
      {/* Floating Nebulas */}
      <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-mystic-900/20 rounded-full blur-[80px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[60vw] h-[60vw] bg-celestial-900/10 rounded-full blur-[60px] animate-float" />
      
      {/* Stars (Static CSS generated) */}
      <div className="star-twinkle" style={{ top: '10%', left: '20%', '--duration': '3s', '--delay': '0s' }} />
      <div className="star-twinkle" style={{ top: '30%', left: '80%', '--duration': '4s', '--delay': '1s' }} />
      <div className="star-twinkle" style={{ top: '70%', left: '40%', '--duration': '2.5s', '--delay': '2s' }} />
      <div className="star-twinkle" style={{ top: '50%', left: '10%', '--duration': '5s', '--delay': '0.5s' }} />
      <div className="star-twinkle" style={{ top: '15%', left: '90%', '--duration': '3.5s', '--delay': '1.5s' }} />
      <div className="star-twinkle" style={{ top: '85%', left: '70%', '--duration': '4.5s', '--delay': '2.5s' }} />
    </div>
  );
};

export default AnimatedBackground;
