import React from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useLanguage } from '@hooks/useLanguage';
import BackIcon from '@assets/icons/BackIcon';
import SettingsIcon from '@assets/icons/SettingsIcon';
import ShareIcon from '@assets/icons/ShareIcon';
import IconButton from '@components/ui/IconButton';

const Header = () => {
  const { currentScreen, goBack, navigateTo } = useNavigation();
  const { t } = useLanguage();

  // Determine Title based on Screen
  const getTitle = () => {
    switch (currentScreen) {
      case 'home': return t('common.appName');
      case 'palm-scan': return t('palm.title');
      case 'palm-result': return t('palm.resultTitle');
      case 'tarot': return t('tarot.title');
      case 'horoscope': return t('horoscope.title');
      case 'settings': return t('settings.title');
      case 'ai-chat': return 'AI Spirit Guide';
      case 'love-reading': return t('home.features.love');
      case 'daily': return t('onboarding.slide3_title');
      default: return '';
    }
  };

  const isHome = currentScreen === 'home';

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'AI Palm Reader',
          text: 'Discover your destiny with AI Palm Reader!',
          url: window.location.origin
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 px-4 flex items-center justify-between glass border-b border-white/10">
      {/* Left Action: Back or Logo/Empty */}
      <div className="w-10">
        {!isHome && (
          <IconButton 
            onClick={() => goBack()} 
            icon={<BackIcon className="w-6 h-6 text-white" />}
            label="Back"
          />
        )}
      </div>

      {/* Center Title */}
      <div className="flex-1 text-center">
        <h1 className="text-lg font-bold tracking-wide bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent truncate px-2">
          {getTitle()}
        </h1>
      </div>

      {/* Right Action: Settings or Share */}
      <div className="w-10 flex justify-end">
        {isHome ? (
          <IconButton 
            onClick={() => navigateTo('settings')} 
            icon={<SettingsIcon className="w-6 h-6 text-white" />}
            label="Settings"
          />
        ) : (
          <IconButton 
            onClick={handleShare} 
            icon={<ShareIcon className="w-5 h-5 text-white" />}
            label="Share"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
