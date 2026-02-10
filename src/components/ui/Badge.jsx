import React from 'react';

/**
 * 🏷️ Badge
 * Small tag for categories or status.
 */
const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-white/10 text-white border border-white/10',
    primary: 'bg-mystic-500/20 text-mystic-200 border border-mystic-500/30',
    success: 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/30',
    warning: 'bg-amber-500/20 text-amber-200 border border-amber-500/30',
    outline: 'bg-transparent border border-white/30 text-white/70',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
