import React from 'react';

/**
 * 🌌 Cosmic SVG Pattern
 * A subtle background texture of stars and constellations.
 * Can be used as a CSS background-image via data URI or directly as a component.
 */
const CosmicBackground = ({ className = "absolute inset-0 z-0 opacity-20" }) => (
  <svg 
    className={className} 
    width="100%" 
    height="100%" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="starPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="white" opacity="0.5" />
        <circle cx="50" cy="50" r="0.5" fill="white" opacity="0.3" />
        <circle cx="80" cy="20" r="0.8" fill="white" opacity="0.4" />
        <circle cx="20" cy="80" r="0.6" fill="white" opacity="0.3" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#starPattern)" />
  </svg>
);

export default CosmicBackground;
