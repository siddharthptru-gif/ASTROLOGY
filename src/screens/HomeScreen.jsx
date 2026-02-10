import React, { useEffect, useState } from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useUser } from '@context/UserContext';
import { useLanguage } from '@hooks/useLanguage';
import { getDailyGuidance } from '@services/horoscopeService';
import DailyCard from '@components/features/DailyCard';
import FeatureGrid from '@components/features/FeatureGrid';
import DisclaimerBanner from '@components/features/DisclaimerBanner';
import Avatar from '@components/ui/Avatar';

const HomeScreen = () => {
  const { navigateTo } = useNavigation();
  const { userProfile } = useUser();
  const { t, language } = useLanguage();
  const [dailyData, setDailyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Daily Guidance
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDailyGuidance(language);
        setDailyData(data.content); // Assuming content matches DailyCard props structure
      } catch (err) {
        console.error('Failed to load daily guidance', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [language]);

  return (
    <div className="min-h-screen pb-20">
      {/* Top Bar */}
      <div className="px-6 py-4 flex justify-between items-center bg-gradient-to-b from-cosmic-900 to-transparent sticky top-0 z-20">
        <div>
          <p className="text-sm text-white/60">{t('home.greeting')}</p>
          <h1 className="text-xl font-bold text-white">
            {userProfile.name || 'Seeker'}
          </h1>
        </div>
        <button onClick={() => navigateTo('profile')}>
          <Avatar size="md" />
        </button>
      </div>

      <div className="space-y-2">
        {/* Daily Guidance Widget */}
        <DailyCard 
          data={dailyData} 
          isLoading={isLoading} 
          onClick={() => navigateTo('daily')} 
        />

        {/* Features Grid */}
        <div className="px-4 mb-2">
          <h2 className="text-white/80 font-bold mb-4 pl-2">
            Explore Destiny
          </h2>
          <FeatureGrid onNavigate={navigateTo} />
        </div>

        <DisclaimerBanner />
      </div>
    </div>
  );
};

export default HomeScreen;
