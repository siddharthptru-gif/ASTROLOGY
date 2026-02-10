import React from 'react';
import GlassCard from '@components/ui/GlassCard';

/**
 * 🌍 Language Selection Card
 */
const LanguageOption = ({ lang, isSelected, onClick }) => {
  return (
    <GlassCard
      onClick={onClick}
      className={`
        flex items-center gap-4 p-4 transition-all duration-300
        ${isSelected 
          ? 'border-mystic-400 bg-mystic-500/20 shadow-glow scale-[1.02]' 
          : 'hover:bg-white/5'
        }
      `}
    >
      <span className="text-3xl filter drop-shadow-md">
        {lang.flag}
      </span>
      <div className="flex-1">
        <h3 className={`font-bold ${isSelected ? 'text-white' : 'text-white/80'}`}>
          {lang.name}
        </h3>
        <p className="text-xs text-white/40">
          {lang.nativeName || lang.name}
        </p>
      </div>
      {isSelected && (
        <div className="w-6 h-6 rounded-full bg-mystic-500 flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      )}
    </GlassCard>
  );
};

export default LanguageOption;
