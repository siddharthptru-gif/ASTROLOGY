import React, { useState, useEffect } from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useLanguage } from '@hooks/useLanguage';
import { drawCards } from '@services/tarotService';
import TarotCardReveal from '@components/features/TarotCardReveal';
import AnimatedBackground from '@components/ui/AnimatedBackground';
import Loader from '@components/ui/Loader';

const TarotReadingScreen = () => {
  const { params, navigateTo } = useNavigation();
  const { t } = useLanguage();
  
  const [cards, setCards] = useState([]);
  const [isShuffling, setIsShuffling] = useState(true);

  useEffect(() => {
    // Simulate Shuffling Animation
    const timer = setTimeout(() => {
      // Draw 3 cards: Past, Present, Future
      const drawn = drawCards(3);
      setCards(drawn);
      setIsShuffling(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleRevealComplete = () => {
    // Navigate to results with the drawn cards
    navigateTo('tarot-result', { 
      cards, 
      category: params?.category || 'general' 
    });
  };

  if (isShuffling) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-140px)]">
        <AnimatedBackground />
        <div className="relative">
          {/* Card shuffle animation stack */}
          <div className="w-32 h-52 bg-mystic-800 rounded-xl border border-white/20 absolute top-0 left-0 animate-[shuffle_0.5s_infinite]" />
          <div className="w-32 h-52 bg-mystic-700 rounded-xl border border-white/20 absolute top-2 left-2 rotate-3" />
          <div className="w-32 h-52 bg-mystic-600 rounded-xl border border-white/20 absolute top-4 left-4 rotate-6" />
        </div>
        <p className="mt-8 text-white/70 animate-pulse tracking-widest uppercase text-xs">
          Shuffling the deck...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-80px)] p-4 relative">
      <AnimatedBackground />
      
      <div className="text-center mb-6 z-10">
        <h2 className="text-xl font-bold text-white mb-1">
          {t('tarot.title')}
        </h2>
        <p className="text-sm text-white/50">
          {t('tarot.pickCard')}
        </p>
      </div>

      <div className="flex-1 w-full z-10">
        <TarotCardReveal 
          cards={cards} 
          onComplete={handleRevealComplete} 
        />
      </div>
    </div>
  );
};

export default TarotReadingScreen;
