import React from 'react';
import { useNavigation } from '@hooks/useNavigation';
import IconButton from '@components/ui/IconButton';
import BackIcon from '@assets/icons/BackIcon';
import AppLogo from '@assets/logos/AppLogo';

const AboutScreen = () => {
  const { goBack } = useNavigation();

  return (
    <div className="min-h-screen bg-cosmic-900 flex flex-col">
      <div className="p-4">
        <IconButton icon={<BackIcon className="w-6 h-6" />} onClick={goBack} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-24 h-24 mb-6 text-white animate-float">
          <AppLogo />
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-2">AI Palm Reader</h1>
        <p className="text-white/60 mb-8">
          Bridging ancient wisdom with modern intelligence.
        </p>

        <div className="space-y-2 text-sm text-white/40">
          <p>Designed for Spiritual Seekers.</p>
          <p>Powered by Advanced Vision AI.</p>
          <p>© 2023 AI Palm Reader Team</p>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
