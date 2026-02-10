import React from 'react';

/**
 * 📊 Progress Bar
 * Animated gradient progress bar.
 */
const ProgressBar = ({ progress = 0, color = 'purple', className = '' }) => {
  const colors = {
    purple: 'from-purple-600 to-mystic-400',
    blue: 'from-blue-600 to-cyan-400',
    pink: 'from-pink-600 to-rose-400',
    gold: 'from-amber-600 to-yellow-400',
  };

  // Clamp value between 0 and 100
  const width = Math.min(100, Math.max(0, progress));

  return (
    <div className={`w-full h-3 bg-white/10 rounded-full overflow-hidden ${className}`}>
      <div
        className={`h-full rounded-full bg-gradient-to-r ${colors[color]} transition-all duration-1000 ease-out`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ProgressBar;
