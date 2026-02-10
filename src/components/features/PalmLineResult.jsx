import React from 'react';
import GlassCard from '@components/ui/GlassCard';
import { PALM_LINES_DATA } from '@data/palmLines';
import { useLanguage } from '@hooks/useLanguage';

/**
 * 📉 Displays a single palm line result
 * Used in the PalmResultScreen list.
 */
const PalmLineResult = ({ lineId, visualData, interpretation }) => {
  const { t } = useLanguage();
  const lineInfo = PALM_LINES_DATA[lineId];
  
  // Extract specific parts from the big AI text response if possible,
  // or pass down specific chunks as props. 
  // For this component, we assume 'interpretation' is the specific text block for this line.

  if (!lineInfo) return null;

  return (
    <GlassCard className="mb-4 animate-fade-in-up">
      <div className="flex items-start gap-4">
        {/* Icon / Color Indicator */}
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1"
          style={{ backgroundColor: `${lineInfo.color}20`, border: `1px solid ${lineInfo.color}` }}
        >
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lineInfo.color }} />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-1">
            {t(`palm.${lineId}`)}
          </h3>
          
          {/* Visual Analysis (Objective) */}
          {visualData && (
            <div className="text-xs text-white/50 mb-3 bg-white/5 p-2 rounded-lg">
               👁️ AI Vision: {visualData}
            </div>
          )}

          {/* Interpretation (Subjective) */}
          <div className="text-sm text-gray-200 leading-relaxed">
            {interpretation}
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default PalmLineResult;
