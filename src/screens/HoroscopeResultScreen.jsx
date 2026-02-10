import React, { useEffect, useState } from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useLanguage } from '@hooks/useLanguage';
import { getDailyHoroscope } from '@services/horoscopeService';
import Loader from '@components/ui/Loader';
import GlassCard from '@components/ui/GlassCard';
import ShareButton from '@components/features/ShareButton';

const HoroscopeResultScreen = () => {
  const { params } = useNavigation();
  const { language } = useLanguage();
  
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHoroscope = async () => {
      if (!params?.sign) return;
      
      try {
        const data = await getDailyHoroscope(params.sign, language);
        setResult(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHoroscope();
  }, [params, language]);

  if (isLoading) return <Loader fullScreen text={`Reading stars for ${params?.sign}...`} />;

  return (
    <div className="pb-24 p-4 min-h-screen">
      <div className="mb-6 flex justify-between items-end border-b border-white/10 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-white">{params?.sign}</h1>
          <p className="text-sm text-white/50">
            {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <div className="text-4xl opacity-50">✨</div>
      </div>

      <GlassCard className="mb-6 p-6 animate-fade-in-up">
        <div className="prose prose-invert prose-sm max-w-none text-white/80 leading-relaxed whitespace-pre-line">
          {result?.content}
        </div>
      </GlassCard>

      <ShareButton 
        title={`Daily Horoscope for ${params?.sign}`} 
        text={`Here is what the stars say for ${params?.sign} today!`} 
      />
    </div>
  );
};

export default HoroscopeResultScreen;
