import React, { useState, useEffect } from 'react';
import TarotCard from './TarotCard';
import Button from '@components/ui/Button';

/**
 * 🕵️ Tarot Card Reveal Animation
 * Orchestrates drawing and flipping cards one by one.
 */
const TarotCardReveal = ({ cards, onComplete }) => {
  const [revealedIndices, setRevealedIndices] = useState([]);
  const [canProceed, setCanProceed] = useState(false);

  // Auto reveal logic or manual?
  // Let's go manual tap-to-reveal for better engagement.

  const handleCardClick = (index) => {
    if (revealedIndices.includes(index)) return;

    // Add index to revealed list
    const newRevealed = [...revealedIndices, index];
    setRevealedIndices(newRevealed);

    // If all cards revealed, enable completion
    if (newRevealed.length === cards.length) {
      setTimeout(() => setCanProceed(true), 800);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-8">
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {cards.map((card, index) => (
          <div 
            key={card.id || index} 
            className={`transition-all duration-500 delay-${index * 100} animate-fade-in-up`}
          >
            <div className="mb-4 text-center">
              <span className="text-xs uppercase tracking-widest text-white/50">
                {index === 0 && 'Past / Situation'}
                {index === 1 && 'Present / Action'}
                {index === 2 && 'Future / Outcome'}
              </span>
            </div>
            
            <TarotCard
              card={card}
              isRevealed={revealedIndices.includes(index)}
              onClick={() => handleCardClick(index)}
              size="md"
            />
          </div>
        ))}
      </div>

      <div className="h-16 flex items-center justify-center">
        {!canProceed ? (
          <p className="text-white/70 animate-pulse text-sm">
            Tap the cards to reveal your fate...
          </p>
        ) : (
          <Button 
            onClick={onComplete} 
            variant="primary" 
            size="lg"
            className="animate-bounce-in shadow-glow-gold"
          >
            Read Interpretation
          </Button>
        )}
      </div>
    </div>
  );
};

export default TarotCardReveal;
