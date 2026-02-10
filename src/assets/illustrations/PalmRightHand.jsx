import React from 'react';

/**
 * ✋ Right Hand Outline Illustration
 * Mirrored version of left hand for visual consistency.
 */
const PalmRightHand = ({ className = "w-24 h-24", color = "currentColor" }) => (
  <svg 
    viewBox="0 0 100 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    transform="scale(-1, 1)" // Simple mirror
  >
    <path 
      d="M15 60 C15 50 10 40 20 35 C25 32 30 40 30 45 V30 C30 20 35 15 40 15 C45 15 50 20 50 30 V20 C50 10 55 5 60 5 C65 5 70 10 70 20 V30 C70 20 75 15 80 15 C85 15 90 20 90 30 V60 C90 90 70 110 50 110 C30 110 15 90 15 60 Z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    
    {/* Heart Line */}
    <path d="M90 55 C80 55 60 60 40 50" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    
    {/* Head Line */}
    <path d="M90 65 C70 70 50 75 30 65" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    
    {/* Life Line */}
    <path d="M85 60 C75 80 50 90 40 100" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
  </svg>
);

export default PalmRightHand;
