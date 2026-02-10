import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '@assets/icons/CloseIcon';
import IconButton from './IconButton';
import { useBackHandler } from '@hooks/useBackHandler';

/**
 * 🖼️ Modal Component
 * Renders into a portal at the document root.
 */
const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  showCloseButton = true,
  fullScreen = false
}) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Handle Android back button
  useBackHandler(() => {
    if (isOpen) {
      onClose();
      return true; // Prevent default back
    }
    return false;
  }, isOpen);

  if (!isOpen) return null;

  const content = (
    <div className="fixed inset-0 z-modal flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        className={`
          relative z-10 w-full max-w-sm 
          bg-cosmic-800/90 border border-white/10 shadow-2xl
          ${fullScreen ? 'h-full max-w-full rounded-none' : 'rounded-3xl max-h-[85vh]'}
          flex flex-col animate-scale-in overflow-hidden
        `}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-4 border-b border-white/5">
            <h3 className="text-lg font-bold text-white pl-2">{title}</h3>
            {showCloseButton && (
              <IconButton 
                icon={<CloseIcon className="w-5 h-5" />} 
                onClick={onClose} 
                variant="ghost"
              />
            )}
          </div>
        )}

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
};

export default Modal;
