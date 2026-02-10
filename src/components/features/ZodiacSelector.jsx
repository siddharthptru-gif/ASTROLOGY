import React from 'react';
import { ZODIAC_SIGNS_DATA } from '@data/zodiacSigns';
import GlassCard from '@components/ui/GlassCard';

/**
 * ♈ Zodiac Sign Selector
 * Horizontal scroller for picking a sign.
 */
const ZodiacSelector = ({ selectedSign, onSelect }) => {
  return (
    <div className="w-full">
      <div className="flex overflow-x-auto gap-4 py-4 px-2 scrollbar-hide snap-x snap-mandatory">
        {ZODIAC_SIGNS_DATA.map((sign) => {
          const isSelected = selectedSign === sign.name;
          
          return (
            <div 
              key={sign.id} 
              className="snap-center shrink-0"
              onClick={() => onSelect(sign.name)}
            >
              <GlassCard
                variant={isSelected ? 'default' : 'light'}
                className={`
                  w-28 h-36 flex flex-col items-center justify-center gap-2
                  transition-all duration-300
                  ${isSelected 
                    ? 'border-mystic-400 bg-mystic-500/20 scale-105 shadow-glow' 
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                  }
                `}
              >
                <span className="text-4xl">{sign.symbol}</span>
                <span className="font-bold text-sm">{sign.name}</span>
                <span className="text-[10px] text-white/50 text-center leading-tight px-1">
                  {sign.dateRange}
                </span>
              </GlassCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ZodiacSelector;
