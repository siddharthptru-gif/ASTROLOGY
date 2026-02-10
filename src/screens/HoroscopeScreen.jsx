import React, { useState } from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useUser } from '@context/UserContext';
import ZodiacSelector from '@components/features/ZodiacSelector';
import ZodiacCard from '@components/features/ZodiacCard';
import Button from '@components/ui/Button';
import AnimatedBackground from '@components/ui/AnimatedBackground';

const HoroscopeScreen = () => {
  const { navigateTo } = useNavigation();
  const { userProfile } = useUser();
  const [selectedSign, setSelectedSign] = useState(userProfile.zodiacSign || 'Aries');

  const handleReadHoroscope = () => {
    navigateTo('horoscope-result', { sign: selectedSign });
  };

  return (
    <div className="min-h-screen pb-24 flex flex-col">
      <AnimatedBackground />

      <div className="relative z-10 flex-1 flex flex-col p-4">
        <div className="text-center mb-6 pt-4">
          <h1 className="text-2xl font-bold text-white">Daily Horoscope</h1>
          <p className="text-white/50 text-sm">Select a sign to reveal the stars' message.</p>
        </div>

        {/* Zodiac Picker */}
        <div className="mb-8">
          <ZodiacSelector 
            selectedSign={selectedSign} 
            onSelect={setSelectedSign} 
          />
        </div>

        {/* Selected Sign Preview */}
        <div className="flex-1 flex flex-col justify-center animate-fade-in">
          <ZodiacCard signName={selectedSign} className="mb-8" />
          
          <Button 
            fullWidth 
            size="lg" 
            variant="primary"
            onClick={handleReadHoroscope}
            className="shadow-glow-purple"
          >
            Read Horoscope
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HoroscopeScreen;
