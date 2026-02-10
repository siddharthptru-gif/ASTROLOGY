import React, { useState } from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useLanguage } from '@hooks/useLanguage';
import HandSelector from '@components/features/HandSelector';
import PalmGuideOverlay from '@components/features/PalmGuideOverlay';
import ImageUploader from '@components/ui/ImageUploader';
import Button from '@components/ui/Button';
import { useImageUpload } from '@hooks/useImageUpload';

const PalmScanScreen = () => {
  const { navigateTo } = useNavigation();
  const { t } = useLanguage();
  const { image, preview, isUploading, error, handleImageSelect, clearImage } = useImageUpload();
  
  const [selectedHand, setSelectedHand] = useState('left');

  const handleAnalyze = () => {
    if (!image) return;
    
    // Pass image and hand info to Result Screen via navigation params
    navigateTo('palm-result', { 
      imageFile: image, 
      previewUrl: preview,
      handSide: selectedHand 
    });
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] p-4">
      {/* Step 1: Hand Selection */}
      <div className="mb-6 animate-fade-in-down">
        <h2 className="text-center text-white/80 mb-4 font-medium">
          Which hand to read?
        </h2>
        <HandSelector 
          selectedHand={selectedHand} 
          onSelect={setSelectedHand} 
        />
      </div>

      {/* Step 2: Image Capture */}
      <div className="flex-1 relative flex flex-col items-center justify-center animate-fade-in-up">
        {preview ? (
          // Preview State
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden border-2 border-mystic-500 shadow-glow">
            <img src={preview} alt="Palm Preview" className="w-full h-full object-cover" />
            
            {/* Retake Button Overlay */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <button 
                onClick={clearImage}
                className="bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-md text-sm hover:bg-black/70"
              >
                Retake Photo
              </button>
            </div>
          </div>
        ) : (
          // Camera/Upload State with Guide
          <div className="relative w-full max-w-sm aspect-[3/4]">
             {/* The Guide Overlay sits on top of the Uploader */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <PalmGuideOverlay hand={selectedHand} />
            </div>
            
            <div className="absolute inset-0 z-0">
               <ImageUploader 
                 onFileSelect={handleImageSelect}
                 isLoading={isUploading}
                 error={error}
               />
               {/* Note: In a real app, ImageUploader would be styled to fill this container perfectly */}
            </div>
          </div>
        )}
      </div>

      {/* Step 3: Analyze Action */}
      <div className="mt-6 pb-4">
        <Button 
          fullWidth 
          size="lg" 
          variant="primary"
          disabled={!image}
          onClick={handleAnalyze}
          className="shadow-glow-cyan"
        >
          {t('palm.analyze')}
        </Button>
      </div>
    </div>
  );
};

export default PalmScanScreen;
