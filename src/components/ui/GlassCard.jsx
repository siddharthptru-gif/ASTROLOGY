import React from 'react';

/**
 * 🔮 GlassCard Component
 * The foundational card component for the entire app.
 */
const GlassCard = ({
  children,
  className = '',
  variant = 'default', // default, heavy, light
  onClick,
  ...props
}) => {
  const variants = {
    default: 'glass-card',
    heavy: 'glass-heavy rounded-3xl',
    light: 'glass-light rounded-2xl',
  };

  return (
    <div
      onClick={onClick}
      className={`
        ${variants[variant]}
        p-5 relative overflow-hidden
        ${onClick ? 'cursor-pointer active:scale-[0.98] transition-transform duration-200' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
