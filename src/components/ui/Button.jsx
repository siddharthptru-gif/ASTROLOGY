import React from 'react';
import Spinner from './Spinner';

/**
 * 🎨 Button Component
 * Supports variants: primary, secondary, outline, ghost
 * Supports sizes: sm, md, lg
 */
const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  disabled = false,
  className = '',
  icon = null,
  ...props
}) => {
  // Base Styles
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold tracking-wide rounded-2xl transition-all duration-300 active-press disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';
  
  // Variants
  const variants = {
    primary: 'bg-btn-primary text-white shadow-glow hover:shadow-glow-lg border border-white/20',
    secondary: 'bg-btn-secondary text-white shadow-glow-blue hover:shadow-glow-xl border border-white/20',
    outline: 'bg-transparent border-2 border-mystic-400 text-mystic-300 hover:bg-mystic-900/30',
    ghost: 'bg-transparent text-white/70 hover:text-white hover:bg-white/5',
    glass: 'glass-btn text-white hover:bg-white/20',
  };

  // Sizes
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {/* Shine Effect Overlay for Primary Buttons */}
      {variant === 'primary' && !disabled && !isLoading && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      )}

      {isLoading ? (
        <Spinner size="sm" color="white" />
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
