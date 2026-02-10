import React, { useState } from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useLanguage } from '@hooks/useLanguage';
import { ONBOARDING_SLIDES } from '@data/onboardingSlides';
import OnboardingSlide from '@components/features/OnboardingSlide';
import Button from '@components/ui/Button';
import AnimatedBackground from '@components/ui/AnimatedBackground';

const OnboardingScreen = () => {
  const { navigateTo } = useNavigation();
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < ONBOARDING_SLIDES.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      navigateTo('profile');
    }
  };

  return (
    <div className="relative h-screen flex flex-col overflow-hidden">
      <AnimatedBackground />

      {/* Slide Content */}
      <div className="flex-1 relative z-10">
        <OnboardingSlide slide={ONBOARDING_SLIDES[currentIndex]} />
      </div>

      {/* Footer Controls */}
      <div className="relative z-20 px-6 pb-safe w-full bg-gradient-to-t from-cosmic-900 to-transparent pt-12">
        {/* Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {ONBOARDING_SLIDES.map((_, idx) => (
            <div 
              key={idx}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/20'}
              `}
            />
          ))}
        </div>

        <Button 
          fullWidth 
          size="lg" 
          onClick={handleNext}
          variant="primary"
          className="mb-4"
        >
          {currentIndex === ONBOARDING_SLIDES.length - 1 
            ? t('onboarding.getStarted') 
            : t('common.next')}
        </Button>

        {/* Skip Button */}
        {currentIndex < ONBOARDING_SLIDES.length - 1 && (
          <button 
            onClick={() => navigateTo('profile')}
            className="w-full py-2 text-sm text-white/40 font-medium hover:text-white transition-colors"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
};

export default OnboardingScreen;
