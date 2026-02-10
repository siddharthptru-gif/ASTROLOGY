import React, { useState } from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useUser } from '@context/UserContext';
import { useLanguage } from '@hooks/useLanguage';
import { getLoveReading, calculateCompatibility } from '@services/loveReadingService';
import Select from '@components/ui/Select';
import Button from '@components/ui/Button';
import GlassCard from '@components/ui/GlassCard';
import Loader from '@components/ui/Loader';
import ProgressBar from '@components/ui/ProgressBar';
import { ZODIAC_SIGNS } from '@utils/constants';

const LoveReadingScreen = () => {
  const { userProfile } = useUser();
  const { language } = useLanguage();
  const { navigateTo } = useNavigation();

  const [status, setStatus] = useState('single');
  const [partnerSign, setPartnerSign] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [compatibilityScore, setCompatibilityScore] = useState(0);

  const handleAnalyze = async () => {
    setIsLoading(true);
    
    // Calculate simple compatibility score for visual effect
    if (partnerSign) {
      const score = calculateCompatibility(userProfile.zodiacSign, partnerSign);
      setCompatibilityScore(score);
    }

    try {
      const reading = await getLoveReading(status, partnerSign, userProfile, language);
      setResult(reading);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loader fullScreen text="Consulting Venus..." />;

  // Result View
  if (result) {
    return (
      <div className="pb-24 p-4 animate-fade-in">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Love Insight</h1>

        {partnerSign && (
          <GlassCard className="mb-6 text-center py-6">
            <h3 className="text-sm uppercase tracking-widest text-white/50 mb-2">Compatibility</h3>
            <div className="text-4xl font-bold text-pink-400 mb-2">{compatibilityScore}%</div>
            <ProgressBar progress={compatibilityScore} color="pink" className="h-2 w-32 mx-auto" />
          </GlassCard>
        )}

        <GlassCard className="p-6 whitespace-pre-line leading-relaxed text-white/80">
          {result}
        </GlassCard>

        <div className="mt-6 flex flex-col gap-3">
          <Button onClick={() => setResult(null)} variant="outline">
            New Reading
          </Button>
        </div>
      </div>
    );
  }

  // Input View
  return (
    <div className="pb-24 p-4 min-h-screen">
      <h1 className="text-2xl font-bold text-white mb-2">Love & Relationships</h1>
      <p className="text-white/60 mb-8 text-sm">Discover what the stars have in store for your heart.</p>

      <GlassCard className="space-y-6 p-6">
        <Select
          label="Relationship Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          options={[
            { value: 'single', label: 'Single / Looking' },
            { value: 'dating', label: 'Dating' },
            { value: 'committed', label: 'Committed / Married' },
            { value: 'complicated', label: 'It\'s Complicated' },
            { value: 'breakup', label: 'Going through a breakup' },
          ]}
        />

        <Select
          label="Partner's Sign (Optional)"
          value={partnerSign}
          onChange={(e) => setPartnerSign(e.target.value)}
          placeholder="Select Sign"
          options={ZODIAC_SIGNS.map(s => ({ value: s, label: s }))}
        />

        <div className="pt-4">
          <Button 
            fullWidth 
            size="lg" 
            variant="primary"
            onClick={handleAnalyze}
            className="shadow-glow-pink bg-gradient-to-r from-pink-600 to-rose-500"
          >
            Reveal Love Destiny
          </Button>
        </div>
      </GlassCard>
    </div>
  );
};

export default LoveReadingScreen;
