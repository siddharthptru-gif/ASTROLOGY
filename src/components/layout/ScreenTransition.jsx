import React, { useState, useEffect } from 'react';

/**
 * ScreenTransition
 * Wraps content to provide a smooth fade/slide animation when mounting.
 * Simulates a native mobile page transition.
 */
const ScreenTransition = ({ children }) => {
  const [isMounting, setIsMounting] = useState(true);

  useEffect(() => {
    // Reset mounting state
    setIsMounting(true);
    
    // Short timeout to allow browser paint
    const timer = setTimeout(() => setIsMounting(false), 50);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        w-full h-full
        transition-all duration-500 ease-out
        ${isMounting 
          ? 'opacity-0 translate-y-4 scale-95' 
          : 'opacity-100 translate-y-0 scale-100'
        }
      `}
    >
      {children}
    </div>
  );
};

export default ScreenTransition;
