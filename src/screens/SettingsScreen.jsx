import React from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useLanguage } from '@hooks/useLanguage';
import { useUser } from '@context/UserContext';
import { useApp } from '@context/AppContext';
import GlassCard from '@components/ui/GlassCard';
import Avatar from '@components/ui/Avatar';
import Divider from '@components/ui/Divider';
import Button from '@components/ui/Button';

const SettingsScreen = () => {
  const { navigateTo } = useNavigation();
  const { t, changeLanguage, language } = useLanguage();
  const { userProfile, clearUserData } = useUser();
  const { installPWA, showInstallPrompt } = useApp();

  const handleReset = () => {
    if (window.confirm('Are you sure? All your data will be lost.')) {
      clearUserData();
      window.location.reload();
    }
  };

  return (
    <div className="pb-24 p-4 min-h-screen">
      <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>

      {/* Profile Summary */}
      <GlassCard className="flex items-center gap-4 p-4 mb-6" onClick={() => navigateTo('profile')}>
        <Avatar size="md" />
        <div className="flex-1">
          <h3 className="font-bold text-white">{userProfile.name || 'User'}</h3>
          <p className="text-xs text-white/50">{userProfile.zodiacSign || 'No Sign'}</p>
        </div>
        <span className="text-white/40">✎</span>
      </GlassCard>

      {/* App Settings */}
      <div className="space-y-4">
        <GlassCard className="p-0 overflow-hidden">
          <div className="p-4 border-b border-white/10 flex justify-between items-center">
            <span className="text-white">Language</span>
            <select 
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-transparent text-mystic-300 font-bold focus:outline-none text-right"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          
          <button 
            className="w-full p-4 text-left text-white border-b border-white/10 hover:bg-white/5"
            onClick={() => navigateTo('privacy')}
          >
            Privacy Policy
          </button>
          
          <button 
            className="w-full p-4 text-left text-white hover:bg-white/5"
            onClick={() => navigateTo('about')}
          >
            About App
          </button>
        </GlassCard>

        {showInstallPrompt && (
          <Button fullWidth variant="secondary" onClick={installPWA}>
            Install App to Home Screen
          </Button>
        )}

        <Divider />

        <Button 
          fullWidth 
          variant="outline" 
          className="border-red-500/30 text-red-400 hover:bg-red-500/10"
          onClick={handleReset}
        >
          Reset All Data
        </Button>
        
        <p className="text-center text-xs text-white/30 mt-4">
          Version 1.0.0 • AI Powered
        </p>
      </div>
    </div>
  );
};

export default SettingsScreen;
