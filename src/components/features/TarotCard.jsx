import React from 'react';

/**
 * 🃏 Tarot Card Component
 * Represents a single card with 3D Flip capability.
 */
const TarotCard = ({ 
  card, 
  isRevealed, 
  onClick, 
  className = '',
  size = 'md' // sm, md, lg
}) => {
  // Size mapping
  const sizes = {
    sm: 'w-24 h-40', // Thumbnail
    md: 'w-32 h-52', // Standard list
    lg: 'w-64 h-96', // Full detail view
  };

  // The card back design (Cosmic Pattern)
  const CardBack = () => (
    <div className="w-full h-full rounded-xl bg-gradient-to-br from-mystic-900 via-cosmic-900 to-mystic-800 border-2 border-mystic-500/30 flex items-center justify-center shadow-2xl">
      <div className="w-[90%] h-[90%] border border-mystic-500/20 rounded-lg flex items-center justify-center bg-pattern-stars opacity-80">
        <div className="w-12 h-12 rounded-full border-2 border-mystic-400/50 flex items-center justify-center">
          <div className="w-8 h-8 rotate-45 border border-mystic-400/30" />
        </div>
      </div>
    </div>
  );

  // The card front (Actual Content)
  // In a real app, <img src={card.image} /> would replace the gradient placeholder
  const CardFront = () => (
    <div className="w-full h-full rounded-xl bg-white p-1 overflow-hidden shadow-2xl relative">
      <div className={`w-full h-full rounded-lg border-2 border-gold-500/30 relative overflow-hidden bg-gradient-to-b from-slate-100 to-slate-300`}>
        {/* Placeholder for Card Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <span className="text-4xl mb-2">
            {card.suit === 'Cups' && '🏆'}
            {card.suit === 'Swords' && '⚔️'}
            {card.suit === 'Wands' && '🪄'}
            {card.suit === 'Pentacles' && '🪙'}
            {card.arcana === 'Major' && '🔮'}
          </span>
          <h3 className="font-serif font-bold text-slate-800 leading-tight">
            {card.name}
          </h3>
          {card.isReversed && (
            <span className="text-[10px] uppercase font-bold text-red-500 mt-1 tracking-widest">
              Reversed
            </span>
          )}
        </div>
        
        {/* Overlay for Reversed State */}
        {card.isReversed && (
          <div className="absolute inset-0 border-4 border-red-500/20 rounded-lg pointer-events-none" />
        )}
      </div>
    </div>
  );

  return (
    <div 
      onClick={onClick}
      className={`
        relative perspective-1000 group cursor-pointer
        ${sizes[size]} 
        ${className}
      `}
    >
      <div 
        className={`
          relative w-full h-full transition-transform duration-700 transform-style-3d
          ${isRevealed ? 'rotate-y-180' : 'hover:scale-105'}
        `}
      >
        {/* Front Face (Card Back Design - initially visible) */}
        <div className="absolute inset-0 backface-hidden">
          <CardBack />
        </div>

        {/* Back Face (Card Content - revealed on flip) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <CardFront />
        </div>
      </div>
    </div>
  );
};

export default TarotCard;
