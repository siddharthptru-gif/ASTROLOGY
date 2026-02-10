import React from 'react';

/**
 * ✨ Glowing Border Wrapper
 * Adds a neon gradient border around any content.
 */
const GlowingBorder = ({ children, className = '', color = 'purple' }) => {
  const glowColors = {
    purple: 'from-mystic-500 to-purple-500',
    blue: 'from-celestial-500 to-blue-500',
    gold: 'from-yellow-500 to-orange-500',
    cyan: 'from-cyan-400 to-teal-400',
  };

  return (
    <div className={`relative p-[2px] rounded-3xl overflow-hidden group ${className}`}>
      {/* Animated Gradient Border */}
      <div className={`absolute inset-0 bg-gradient-to-r ${glowColors[color]} animate-rotate-slow opacity-70 group-hover:opacity-100 transition-opacity`} />
      
      {/* Inner Content Background */}
      <div className="relative bg-cosmic-800 rounded-[22px] h-full w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default GlowingBorder;
