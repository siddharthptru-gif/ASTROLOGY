import React from 'react';
import ChevronRightIcon from '@assets/icons/ChevronRightIcon';

/**
 * 🔽 Select Component
 * Custom styled wrapper around native select for best mobile experience.
 */
const Select = ({
  label,
  options = [],
  value,
  onChange,
  error,
  placeholder = 'Select an option',
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
        <select
          value={value}
          onChange={onChange}
          className={`
            w-full appearance-none bg-white/5 border border-white/10 rounded-2xl
            py-4 pl-5 pr-10
            text-white
            focus:outline-none focus:border-mystic-400 focus:bg-white/10
            transition-all duration-300
            ${!value ? 'text-white/30' : 'text-white'}
          `}
          {...props}
        >
          <option value="" disabled className="bg-cosmic-800 text-white/50">
            {placeholder}
          </option>
          {options.map((opt) => (
            <option 
              key={opt.value} 
              value={opt.value}
              className="bg-cosmic-800 text-white py-2"
            >
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom Arrow */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50 group-focus-within:text-mystic-300 group-focus-within:rotate-90 transition-all duration-300">
          <ChevronRightIcon className="w-5 h-5 rotate-90" />
        </div>
      </div>

      {error && (
        <span className="text-xs text-red-400 ml-1 animate-fade-in">
          {error}
        </span>
      )}
    </div>
  );
};

export default Select;
