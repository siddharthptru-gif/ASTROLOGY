import React from 'react';

/**
 * 🔘 Icon Button
 * Circular button usually for headers or toolbars.
 */
const IconButton = ({ 
  icon, 
  onClick, 
  variant = 'ghost', 
  label, 
  className = '',
  disabled = false
}) => {
  const baseStyle = "p-2 rounded-full transition-all duration-200 active:scale-90 flex items-center justify-center";
  
  const variants = {
    ghost: "text-white/70 hover:bg-white/10 hover:text-white",
    glass: "glass text-white shadow-lg",
    filled: "bg-mystic-500 text-white shadow-glow",
  };

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`${baseStyle} ${variants[variant]} ${disabled ? 'opacity-50' : ''} ${className}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
