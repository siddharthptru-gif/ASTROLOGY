import React from 'react';
import GlassCard from '@components/ui/GlassCard';
import StarIcon from '@assets/icons/StarIcon';
import SunIcon from '@assets/icons/SunIcon';
import MoonIcon from '@assets/icons/MoonIcon';

/**
 * 🌞 Daily Guidance Card (Home Widget)
 */
const DailyCard = ({ data, onClick, isLoading }) => {
  return (
    <GlassCard 
      onClick={onClick}
      variant="heavy"
      className="mx-4 mb-6 p-6 relative overflow-hidden group border-mystic-500/30"
    >
      {/* Background Ambience */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-mystic-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-bold text-mystic-300 uppercase tracking-widest">
              Today's Energy
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              {isLoading ? 'Aligning Stars...' : (data?.theme || 'Cosmic Insight')}
            </h2>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg animate-float">
            <SunIcon className="w-6 h-6 text-white" />
          </div>
        </div>

        {isLoading ? (
          <div className="space-y-2 animate-pulse">
            <div className="h-2 bg-white/10 rounded w-full" />
            <div className="h-2 bg-white/10 rounded w-3/4" />
          </div>
        ) : (
          <p className="text-sm text-white/80 leading-relaxed line-clamp-2">
            {data?.guidance || "Tap to reveal your daily spiritual guidance and lucky elements."}
          </p>
        )}

        {/* Footer Stats */}
        {!isLoading && data && (
          <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-1.5 text-xs text-white/60">
              <StarIcon className="w-3 h-3 text-yellow-400" />
              <span>{data.luckyElement}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/60">
              <MoonIcon className="w-3 h-3 text-purple-400" />
              <span>{data.color}</span>
            </div>
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export default DailyCard;
