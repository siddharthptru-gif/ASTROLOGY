import React, { useRef } from 'react';
import CameraIcon from '@assets/icons/CameraIcon';
import GalleryIcon from '@assets/icons/GalleryIcon';
import UploadIcon from '@assets/icons/UploadIcon';
import Button from './Button';

/**
 * 📸 Image Uploader UI
 * Handles drag & drop UI and file input triggering.
 */
const ImageUploader = ({ 
  onFileSelect, 
  previewUrl, 
  isLoading, 
  error 
}) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) onFileSelect(file);
  };

  return (
    <div className="w-full">
      {/* Upload Area */}
      <div 
        onClick={handleClick}
        className={`
          relative w-full aspect-[4/3] rounded-3xl overflow-hidden
          border-2 border-dashed transition-all duration-300 cursor-pointer
          group active:scale-[0.99]
          ${error 
            ? 'border-red-500/50 bg-red-500/5' 
            : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-mystic-400/50'
          }
        `}
      >
        {previewUrl ? (
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50 group-hover:text-mystic-200 transition-colors">
            <div className="w-16 h-16 mb-4 rounded-full bg-white/5 flex items-center justify-center">
              <UploadIcon className="w-8 h-8" />
            </div>
            <p className="text-sm font-medium uppercase tracking-widest">
              Tap to Upload
            </p>
            <p className="text-xs mt-2 opacity-50">
              Supports JPG, PNG
            </p>
          </div>
        )}

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-cosmic-900/60 flex items-center justify-center backdrop-blur-sm">
            <div className="w-10 h-10 border-4 border-white/20 border-t-mystic-400 rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-red-400 text-xs mt-2 text-center animate-pulse">
          {error}
        </p>
      )}

      {/* Hidden Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Action Buttons (Optional helper if direct tap isn't obvious) */}
      {!previewUrl && (
        <div className="flex gap-4 mt-4">
          <Button 
            variant="secondary" 
            fullWidth 
            size="sm"
            icon={<CameraIcon className="w-4 h-4" />}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            Camera
          </Button>
          <Button 
            variant="secondary" 
            fullWidth 
            size="sm"
            icon={<GalleryIcon className="w-4 h-4" />}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            Gallery
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
