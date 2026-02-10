import React from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useLanguage } from '@hooks/useLanguage';
import { LANGUAGES } from '@utils/constants';
import LanguageOption from '@components/features/LanguageOption';
import Button from '@components/ui/Button';
import AnimatedBackground from '@components/ui/AnimatedBackground';

const LanguageSelectionScreen = () => {
  const { navigateTo } = useNavigation();
  const { language, changeLanguage } = useLanguage();

  const handleContinue = () => {
    navigateTo('onboarding');
  };

  return (
    <div className="relative min-h-screen flex flex-col p-6 pt-12">
      <AnimatedBackground />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Choose Language</h1>
          <p className="text-white/60">Select your preferred language for readings.</p>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto pb-4 scrollbar-hide">
          {LANGUAGES.map((lang) => (
            <LanguageOption
              key={lang.code}
              lang={lang}
              isSelected={language === lang.code}
              onClick={() => changeLanguage(lang.code)}
            />
          ))}
        </div>

        <div className="pt-6 pb-safe">
          <Button 
            fullWidth 
            size="lg" 
            onClick={handleContinue}
            className="shadow-glow"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectionScreen;
