import React from 'react';
import PalmLeftHand from '@assets/illustrations/PalmLeftHand';
import PalmRightHand from '@assets/illustrations/PalmRightHand';
import GlassCard from '@components/ui/GlassCard';

/**
 * ✋ Hand Selection (Left vs Right)
 */
const HandSelector = ({ selectedHand, onSelect }) => {
  return (
    <div className="flex gap-4 justify-center w-full px-4">
      {/* Left Hand */}
      <button 
        className="flex-1"
        onClick={() => onSelect('left')}
      >
        <GlassCard 
          variant={selectedHand === 'left' ? 'default' : 'light'}
          className={`
            flex flex-col items-center justify-center py-6 gap-3 transition-all duration-300
            ${selectedHand === 'left' ? 'border-mystic-400 bg-mystic-500/20 shadow-glow' : 'opacity-60'}
          `}
        >
          <PalmLeftHand className={`w-16 h-16 ${selectedHand === 'left' ? 'text-mystic-300' : 'text-white/50'}`} />
          <span className="text-sm font-bold">Left Hand</span>
          <span className="text-[10px] text-white/50">Inherited Traits</span>
        </GlassCard>
      </button>

      {/* Right Hand */}
      <button 
        className="flex-1"
        onClick={() => onSelect('right')}
      >
        <GlassCard 
          variant={selectedHand === 'right' ? 'default' : 'light'}
          className={`
            flex flex-col items-center justify-center py-6 gap-3 transition-all duration-300
            ${selectedHand === 'right' ? 'border-mystic-400 bg-mystic-500/20 shadow-glow' : 'opacity-60'}
          `}
        >
          <PalmRightHand className={`w-16 h-16 ${selectedHand === 'right' ? 'text-mystic-300' : 'text-white/50'}`} />
          <span className="text-sm font-bold">Right Hand</span>
          <span className="text-[10px] text-white/50">Acquired Traits</span>
        </GlassCard>
      </button>
    </div>
  );
};

export default HandSelector;
