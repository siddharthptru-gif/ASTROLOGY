import React from 'react';

/**
 * ✍️ Input Component
 * Glassmorphic style text input.
 */
const Input = ({
  label,
  error,
  icon,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-xs font-medium text-mystic-200 uppercase tracking-wider ml-1">
          {label}
        </label>
      )}
      
      <div className="relative group">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-mystic-300 transition-colors">
            {icon}
          </div>
        )}
        
        <input
          className={`
            w-full bg-white/5 border border-white/10 rounded-2xl
            py-4 ${icon ? 'pl-12' : 'pl-5'} pr-5
            text-white placeholder-white/30
            focus:outline-none focus:border-mystic-400 focus:bg-white/10
            focus:ring-1 focus:ring-mystic-400/50
            transition-all duration-300
          `}
          {...props}
        />
      </div>

      {error && (
        <span className="text-xs text-red-400 ml-1 animate-fade-in">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
