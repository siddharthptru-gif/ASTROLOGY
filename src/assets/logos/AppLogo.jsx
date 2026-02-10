import React from 'react';

/**
 * 🔮 App Logo
 * A mystical combination of a palm, an eye, and stars.
 */
const AppLogo = ({ className = "w-24 h-24" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Outer Ring */}
    <circle cx="50" cy="50" r="45" stroke="url(#logoGradient)" strokeWidth="2" strokeDasharray="4 4" opacity="0.6">
      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="20s" repeatCount="indefinite" />
    </circle>
    
    {/* Inner Hand Shape */}
    <path 
      d="M50 85C50 85 30 75 30 55V35C30 30 32 25 35 25C38 25 40 30 40 35V50M40 50V25C40 20 42 15 45 15C48 15 50 20 50 25V50M50 50V20C50 15 52 10 55 10C58 10 60 15 60 20V50M60 50V25C60 20 62 15 65 15C68 15 70 20 70 25V55C70 75 50 85 50 85Z" 
      stroke="white" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="url(#logoGradient)" 
      fillOpacity="0.2"
    />
    
    {/* All-Seeing Eye Center */}
    <g transform="translate(50, 55)">
      <path d="M-10 0C-10 0 -5 -5 0 -5C5 -5 10 0 10 0C10 0 5 5 0 5C-5 5 -10 0 -10 0Z" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="0" cy="0" r="3" fill="white" />
    </g>

    {/* Sparkles */}
    <path d="M50 5L52 10L57 12L52 14L50 19L48 14L43 12L48 10Z" fill="white" className="animate-pulse" />
    <circle cx="20" cy="30" r="1" fill="white" opacity="0.8" />
    <circle cx="80" cy="30" r="1" fill="white" opacity="0.8" />
    <circle cx="25" cy="70" r="1" fill="white" opacity="0.6" />
    <circle cx="75" cy="70" r="1" fill="white" opacity="0.6" />
  </svg>
);

export default AppLogo;
