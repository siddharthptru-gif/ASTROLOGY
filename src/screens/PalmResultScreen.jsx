import React, { useEffect, useState } from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useUser } from '@context/UserContext';
import { useLanguage } from '@hooks/useLanguage';
import { processPalmReading } from '@services/palmAnalysisService';
import Loader from '@components/ui/Loader';
import PalmLineResult from '@components/features/PalmLineResult';
import GlassCard from '@components/ui/GlassCard';
import ShareButton from '@components/features/ShareButton';
import Button from '@components/ui/Button';

const PalmResultScreen = () => {
  const { params, navigateTo } = useNavigation();
  const { userProfile, savePalmImage } = useUser();
  const { language, t } = useLanguage();
  
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const analyze = async () => {
      if (!params || !params.imageFile) {
        setError('No image provided');
        setIsLoading(false);
        return;
      }

      try {
        const data = await processPalmReading(
          params.imageFile, 
          params.handSide, 
          userProfile,
          language
        );
        
        setResult(data);
        savePalmImage(params.handSide, params.previewUrl);

      } catch (err) {
        console.error(err);
        setError('Failed to read palm. Please try again with a clearer photo.');
      } finally {
        setIsLoading(false);
      }
    };

    analyze();
  }, []);

  if (isLoading) {
    return <Loader fullScreen text={t('palm.analyzing')} />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        <div className="text-red-400 mb-4 text-4xl">⚠️</div>
        <p className="text-white mb-6">{error}</p>
        <Button onClick={() => navigateTo('palm-scan')}>
          {t('common.tryAgain')}
        </Button>
      </div>
    );
  }

  // Parse structured output from AI text
  // NOTE: In a real implementation, processPalmReading returns structured JSON.
  // We assume result.visualData is JSON and result.interpretation is text or JSON.
  // For this UI, let's assume result.interpretation is a JSON object with keys matching PALM_LINES_DATA
  // or we render the raw text if structure fails.
  
  const renderResults = () => {
    if (typeof result.interpretation === 'string') {
        // Fallback if AI returned unstructured text
        return (
            <GlassCard className="p-4 text-sm leading-relaxed text-gray-200 whitespace-pre-wrap">
                {result.interpretation}
            </GlassCard>
        );
    }
    
    // Structured rendering
    return (
        <div className="space-y-4">
            {['heartLine', 'headLine', 'lifeLine', 'fateLine'].map(lineId => (
                <PalmLineResult
                    key={lineId}
                    lineId={lineId}
                    visualData={result.visualData?.[lineId]}
                    interpretation={result.interpretation?.[lineId]}
                />
            ))}
        </div>
    );
  };

  return (
    <div className="pb-20 p-4">
      {/* Header Image */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-mystic-500 shadow-glow">
          <img src={params.previewUrl} alt="Your Palm" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">{t('palm.resultTitle')}</h2>
          <p className="text-sm text-white/50 capitalize">{params.handSide} Hand Analysis</p>
        </div>
      </div>

      {/* Main Analysis */}
      {renderResults()}

      {/* Footer Actions */}
      <div className="mt-8 flex flex-col gap-4">
        <ShareButton 
           title="My AI Palm Reading" 
           text="I just discovered my destiny with AI Palm Reader!" 
        />
        <Button 
            variant="outline" 
            onClick={() => navigateTo('ai-chat', { context: result })}
        >
            Ask AI about this reading
        </Button>
      </div>
    </div>
  );
};

export default PalmResultScreen;
