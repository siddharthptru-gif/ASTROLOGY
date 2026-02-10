import React, { useEffect, useState } from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useUser } from '@context/UserContext';
import { useLanguage } from '@hooks/useLanguage';
import { getDailyEnergy } from '@services/dailyGuidanceService';
import Loader from '@components/ui/Loader';
import GlassCard from '@components/ui/GlassCard';
import AnimatedBackground from '@components/ui/AnimatedBackground';
import SunIcon from '@assets/icons/SunIcon';
import MoonIcon from '@assets/icons/MoonIcon';

const DailyGuidanceScreen = () => {
  const { userProfile } = useUser();
  const { language } = useLanguage();
  
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadDaily = async () => {
      try {
        const result = await getDailyEnergy(language, userProfile);
        setData(result);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadDaily();
  }, []);

  if (isLoading) return <Loader fullScreen text="Aligning cosmic energies..." />;

  return (
    <div className="min-h-screen pb-24 p-4 relative overflow-hidden">
      <AnimatedBackground />

      {/* Header */}
      <div className="relative z-10 text-center mb-8 pt-4">
        <h1 className="text-2xl font-bold text-white mb-1">
          Daily Guidance
        </h1>
        <p className="text-sm text-white/50">
          {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Main Card */}
      <div className="relative z-10 space-y-6">
        {/* Theme Card */}
        <GlassCard variant="heavy" className="text-center py-8 border-t-4 border-t-gold-400">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold-300 to-orange-500 rounded-full flex items-center justify-center shadow-glow-gold animate-float">
            <SunIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 font-serif">
            {data.theme}
          </h2>
          <p className="text-white/60 text-sm uppercase tracking-widest">
            Today's Theme
          </p>
        </GlassCard>

        {/* Guidance Text */}
        <GlassCard className="animate-fade-in-up delay-100">
          <h3 className="font-bold text-white mb-3 flex items-center gap-2">
            <span>✨</span> Cosmic Advice
          </h3>
          <p className="text-white/80 leading-relaxed text-sm">
            {data.guidance}
          </p>
        </GlassCard>

        {/* Affirmation */}
        <GlassCard className="bg-gradient-to-r from-mystic-900 to-cosmic-900 border-mystic-500/30 animate-fade-in-up delay-200">
          <h3 className="font-bold text-mystic-300 mb-2 text-xs uppercase tracking-wider">
            Mantra
          </h3>
          <p className="text-lg font-serif italic text-white text-center py-2">
            "{data.affirmation}"
          </p>
        </GlassCard>

        {/* Lucky Elements Grid */}
        <div className="grid grid-cols-2 gap-4 animate-fade-in-up delay-300">
          <GlassCard className="flex flex-col items-center justify-center p-4">
            <span className="text-2xl mb-1">🎨</span>
            <span className="text-xs text-white/50 uppercase">Color</span>
            <span className="font-bold text-white">{data.color}</span>
            <div className="w-4 h-4 rounded-full mt-2" style={{ backgroundColor: data.color }} />
          </GlassCard>
          
          <GlassCard className="flex flex-col items-center justify-center p-4">
            <span className="text-2xl mb-1">🍀</span>
            <span className="text-xs text-white/50 uppercase">Element</span>
            <span className="font-bold text-white">{data.luckyElement}</span>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default DailyGuidanceScreen;
