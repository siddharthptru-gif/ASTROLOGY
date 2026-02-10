import React from 'react';
import { useUser } from '@context/UserContext';
import { ZODIAC_SIGNS_DATA } from '@data/zodiacSigns';

/**
 * 👤 Avatar
 * Displays user initial or zodiac symbol.
 */
const Avatar = ({ size = 'md', className = '' }) => {
  const { userProfile } = useUser();
  const zodiac = ZODIAC_SIGNS_DATA.find(z => z.name === userProfile.zodiacSign);
  
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-lg',
    lg: 'w-20 h-20 text-3xl',
  };

  return (
    <div 
      className={`
        ${sizes[size]} rounded-full flex items-center justify-center 
        bg-gradient-to-br from-mystic-500 to-celestial-600 
        shadow-glow border-2 border-white/20 text-white font-bold
        ${className}
      `}
    >
      {zodiac ? (
        <span role="img" aria-label={zodiac.name}>
          {zodiac.symbol}
        </span>
      ) : (
        <span>{userProfile.name ? userProfile.name.charAt(0).toUpperCase() : '?'}</span>
      )}
    </div>
  );
};

export default Avatar;
