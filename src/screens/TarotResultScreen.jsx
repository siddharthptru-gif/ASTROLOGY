import React, { useEffect, useState } from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useLanguage } from '@hooks/useLanguage';
import { interpretTarotSpread } from '@services/tarotService';
import TarotCard from '@components/features/TarotCard';
import Loader from '@components/ui/Loader';
import GlassCard from '@components/ui/GlassCard';
import Button from '@components/ui/Button';
import ShareButton from '@components/features/ShareButton';

const TarotResultScreen = () => {
  const { params, navigateTo } = useNavigation();
  const { language, t } = useLanguage();
  
  const [interpretation, setInterpretation] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInterpretation = async () => {
      if (!params || !params.cards) {
        navigateTo('tarot');
        return;
      }

      try {
        const result = await interpretTarotSpread(
          params.cards,
          params.category,
          '', // No specific question for now
          language
        );
        setInterpretation(result);
      } catch (err) {
        setInterpretation(" The cards are silent right now. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchInterpretation();
  }, []);

  if (isLoading) {
    return <Loader fullScreen text=" Interpreting the spread..." />;
  }

  return (
    <div className="pb-24 p-4">
      {/* Cards Display */}
      <div className="flex justify-center gap-2 mb-8 scale-90">
        {params.cards.map((card, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <TarotCard card={card} isRevealed={true} size="sm" />
            <span className="text-[10px] uppercase mt-2 text-white/50 tracking-wider">
              {idx === 0 ? 'Past' : idx === 1 ? 'Present' : 'Future'}
            </span>
          </div>
        ))}
      </div>

      {/* Interpretation Text */}
      <GlassCard className="mb-6 animate-fade-in-up">
        <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">
          The Oracle Speaks
        </h3>
        <div className="prose prose-invert prose-sm max-w-none text-white/80 leading-relaxed">
          {interpretation.split('\n').map((para, i) => (
            <p key={i} className="mb-3 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      </GlassCard>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <ShareButton 
          title="My Tarot Reading" 
          text={`I just got a powerful reading about ${params.category}!`} 
        />
        <Button 
          variant="ghost" 
          onClick={() => navigateTo('tarot')}
        >
          Draw Again
        </Button>
      </div>
    </div>
  );
};

export default TarotResultScreen;
