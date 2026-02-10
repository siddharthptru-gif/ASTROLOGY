import React, { useState } from 'react';
import InfoIcon from '@assets/icons/InfoIcon';

/**
 * ⚠️ Disclaimer Banner
 * Legal requirement: Not intended for medical/serious advice.
 */
const DisclaimerBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="mx-4 mt-4 p-3 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
      <InfoIcon className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="text-[10px] text-white/60 leading-relaxed">
          This app is for entertainment and spiritual reflection only. 
          AI interpretations should not replace professional medical, legal, or financial advice.
        </p>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="text-white/40 hover:text-white p-1"
      >
        ×
      </button>
    </div>
  );
};

export default DisclaimerBanner;
