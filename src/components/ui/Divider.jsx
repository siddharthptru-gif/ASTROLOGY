import React from 'react';

/**
 * ➖ Divider
 * Visual separator with optional text.
 */
const Divider = ({ label }) => {
  if (label) {
    return (
      <div className="flex items-center gap-4 my-6 opacity-50">
        <div className="h-px bg-white/20 flex-1" />
        <span className="text-xs font-medium uppercase tracking-widest text-white/50">
          {label}
        </span>
        <div className="h-px bg-white/20 flex-1" />
      </div>
    );
  }

  return <div className="h-px bg-white/10 w-full my-4" />;
};

export default Divider;
