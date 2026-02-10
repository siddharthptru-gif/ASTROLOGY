import React from 'react';

/**
 * ✋ Camera Overlay Guide
 * SVG outline to help user position their hand correctly.
 */
const PalmGuideOverlay = ({ hand = 'left' }) => {
  // SVG path approximation of a hand outline
  const handPath = "M100,500 L100,350 C100,300 80,250 80,200 C80,150 110,120 130,130 C150,140 150,180 150,220 L160,220 C160,150 160,100 190,80 C210,70 230,90 230,140 L240,140 C240,80 250,40 280,40 C310,40 320,90 320,150 L330,150 C330,100 350,80 370,80 C390,80 400,120 400,180 L400,300 C400,400 450,450 450,550 L450,600 L100,600 Z";

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col items-center justify-center p-4">
      <svg 
        viewBox="0 0 500 650" 
        className={`w-full h-full opacity-50 ${hand === 'right' ? 'scale-x-[-1]' : ''}`}
      >
        <path 
          d={handPath} 
          fill="none" 
          stroke="white" 
          strokeWidth="4" 
          strokeDasharray="20 10"
          className="animate-[pulse_3s_infinite]"
        />
        
        {/* Animated Scan Line */}
        <line x1="0" y1="0" x2="500" y2="0" stroke="#22d3ee" strokeWidth="4" className="animate-[scan-move_3s_infinite]">
          <animate 
            attributeName="y1" 
            values="0;650;0" 
            dur="4s" 
            repeatCount="indefinite" 
          />
          <animate 
            attributeName="y2" 
            values="0;650;0" 
            dur="4s" 
            repeatCount="indefinite" 
          />
        </line>
      </svg>
      
      <div className="absolute bottom-20 bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
        <p className="text-white text-sm font-medium">
          Align your {hand} hand here
        </p>
      </div>
    </div>
  );
};

export default PalmGuideOverlay;
