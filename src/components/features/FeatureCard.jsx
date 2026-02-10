import React from 'react';
import GlassCard from '@components/ui/GlassCard';
import PalmIcon from '@assets/icons/PalmIcon';
import TarotIcon from '@assets/icons/TarotIcon';
import HeartIcon from '@assets/icons/HeartIcon';
import StarIcon from '@assets/icons/StarIcon';
import ChatIcon from '@assets/icons/ChatIcon';
import { useLanguage } from '@hooks/useLanguage';

// Icon Map
const ICON_MAP = {
  PalmIcon: PalmIcon,
  TarotIcon: TarotIcon,
  HeartIcon: HeartIcon,
  StarIcon: StarIcon,
  ChatIcon: ChatIcon
};

/**
 * 🎫 Single Feature Card
 */
const FeatureCard = ({ feature, onClick, className = '', style }) => {
  const { t } = useLanguage();
  const Icon = ICON_MAP[feature.icon];

  return (
    <GlassCard
      onClick={onClick}
      className={`
        relative group overflow-hidden flex flex-col justify-end p-5
        bg-${feature.color} border-white/5
        hover:border-white/20 hover:shadow-glow
        transition-all duration-300
        ${className}
      `}
      style={style}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${feature.color}`} />
      
      {/* Texture / Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay" />

      {/* Large Floating Icon (Background) */}
      <Icon className="absolute -right-4 -top-4 w-32 h-32 text-white/5 rotate-12 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500" />

      {/* Content */}
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5 text-white" />
        </div>
        
        <h3 className="text-lg font-bold text-white leading-tight">
          {t(feature.titleKey)}
        </h3>
        
        {feature.size === 'large' && (
          <p className="text-xs text-white/70 mt-1 line-clamp-1">
            Tap to explore your destiny
          </p>
        )}
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
    </GlassCard>
  );
};

export default FeatureCard;
