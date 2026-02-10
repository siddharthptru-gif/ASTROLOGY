import React from 'react';
import { useLanguage } from '@hooks/useLanguage';

// Illustrative Placeholders (Using Icons for now since SVGs are minimal)
import PalmIcon from '@assets/icons/PalmIcon';
import TarotIcon from '@assets/icons/TarotIcon';
import StarIcon from '@assets/icons/StarIcon';

const ICON_MAP = {
  illustration_destiny: StarIcon,
  illustration_palm: PalmIcon,
  illustration_tarot: TarotIcon
};

/**
 * 📱 Single Onboarding Slide
 */
const OnboardingSlide = ({ slide }) => {
  const { t } = useLanguage();
  const Icon = ICON_MAP[slide.image] || StarIcon;

  return (
    <div className="flex flex-col items-center justify-center text-center px-8 h-full pb-20">
      {/* Animated Icon Circle */}
      <div 
        className="w-64 h-64 rounded-full flex items-center justify-center mb-10 relative"
        style={{ backgroundColor: `${slide.color}20` }}
      >
        <div className="absolute inset-0 rounded-full animate-ping-slow opacity-20" style={{ backgroundColor: slide.color }} />
        <div className="absolute inset-4 rounded-full border border-white/10" />
        
        <Icon 
          className="w-32 h-32 animate-float drop-shadow-lg" 
          style={{ color: slide.color }} 
        />
      </div>

      <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in-up">
        {t(slide.titleKey)}
      </h2>

      <p className="text-white/70 text-lg leading-relaxed animate-fade-in-up delay-100">
        {t(slide.descKey)}
      </p>
    </div>
  );
};

export default OnboardingSlide;
