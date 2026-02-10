import React from 'react';
import { useNavigation } from '@hooks/useNavigation';
import GlassCard from '@components/ui/GlassCard';
import IconButton from '@components/ui/IconButton';
import BackIcon from '@assets/icons/BackIcon';

const PrivacyPolicyScreen = () => {
  const { goBack } = useNavigation();

  return (
    <div className="min-h-screen bg-cosmic-900 pb-20">
      {/* Custom Header */}
      <div className="sticky top-0 z-50 bg-cosmic-900/95 backdrop-blur-md border-b border-white/10 p-4 flex items-center gap-4">
        <IconButton icon={<BackIcon className="w-6 h-6" />} onClick={goBack} />
        <h1 className="text-lg font-bold text-white">Privacy Policy</h1>
      </div>

      <div className="p-4 space-y-6 text-white/80 text-sm leading-relaxed">
        <GlassCard className="p-6">
          <h2 className="text-lg font-bold text-white mb-2">Data Privacy</h2>
          <p>
            Your privacy is sacred. We do not store your palm images on any external server permanently. 
            Images are processed in real-time by our AI and discarded immediately after analysis.
          </p>
        </GlassCard>

        <GlassCard className="p-6">
          <h2 className="text-lg font-bold text-white mb-2">Local Storage</h2>
          <p>
            Your profile data (name, birth date) is stored locally on your device using LocalStorage. 
            We do not have access to this data.
          </p>
        </GlassCard>

        <GlassCard className="p-6">
          <h2 className="text-lg font-bold text-white mb-2">AI Processing</h2>
          <p>
            We use third-party AI providers (OpenRouter) to generate interpretations. 
            Anonymized text prompts are sent to these services to generate your readings.
          </p>
        </GlassCard>
        
        <p className="text-center text-xs text-white/40 pt-8">
          Last Updated: October 2023
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyScreen;
