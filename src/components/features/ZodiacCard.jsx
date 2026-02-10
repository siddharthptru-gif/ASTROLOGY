import React from 'react';
import { ZODIAC_SIGNS_DATA } from '@data/zodiacSigns';
import GlowingBorder from '@components/ui/GlowingBorder';

/**
 * ⭐️ Single Zodiac Detail Card
 * Used in profile or reading results.
 */
const ZodiacCard = ({ signName, className = '' }) => {
  const sign = ZODIAC_SIGNS_DATA.find(s => s.name === signName);

  if (!sign) return null;

  const elementColors = {
    Fire: 'text-red-400',
    Water: 'text-blue-400',
    Air: 'text-yellow-200',
    Earth: 'text-emerald-400'
  };

  return (
    <GlowingBorder className={className} color={sign.element === 'Fire' ? 'gold' : 'blue'}>
      <div className="p-6 flex items-center justify-between bg-gradient-to-r from-white/5 to-transparent">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-2xl font-bold text-white">{sign.name}</h3>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full border border-white/10 ${elementColors[sign.element]}`}>
              {sign.element}
            </span>
          </div>
          <p className="text-white/50 text-xs uppercase tracking-wider mb-3">
            {sign.dateRange}
          </p>
          <div className="flex flex-wrap gap-2">
            {sign.traits.slice(0, 3).map(trait => (
              <span key={trait} className="text-[10px] bg-white/10 px-2 py-1 rounded text-white/80">
                {trait}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-6xl opacity-20 transform rotate-12">
          {sign.symbol}
        </div>
      </div>
    </GlowingBorder>
  );
};

export default ZodiacCard;
