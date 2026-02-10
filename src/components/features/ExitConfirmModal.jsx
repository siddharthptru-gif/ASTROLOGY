import React, { useState, useEffect } from 'react';
import Modal from '@components/ui/Modal';
import Button from '@components/ui/Button';
import { useNavigation } from '@hooks/useNavigation';

/**
 * 🚪 Exit Confirmation Modal
 * Catches the user before they leave the app (PWA behavior).
 */
const ExitConfirmModal = () => {
  const { currentScreen, history } = useNavigation();
  const [showExitModal, setShowExitModal] = useState(false);

  useEffect(() => {
    // Only intercept if we are on the Home screen and back is pressed
    const handlePopState = (event) => {
      if (currentScreen === 'home' && history.length <= 1) {
        // We are at root, show modal
        // Note: In real browsers, preventing exit is hard. 
        // We usually use double-tap toast or this modal if we manage history manually.
        setShowExitModal(true);
        
        // Push state back to prevent immediate exit
        window.history.pushState(null, '', window.location.pathname);
      }
    };

    // window.addEventListener('popstate', handlePopState);
    // return () => window.removeEventListener('popstate', handlePopState);
    
    // NOTE: For PWA, simple "Press back again to exit" toast is often better (handled in AppLayout)
    // This modal is optional if specific "Quit App?" dialog is requested.
  }, [currentScreen, history]);

  // For this implementation, we will assume this is triggered explicitly or via custom back handler
  
  return (
    <Modal
      isOpen={showExitModal}
      onClose={() => setShowExitModal(false)}
      title="Leave the Stars?"
      showCloseButton={false}
    >
      <div className="text-center py-4">
        <p className="text-white/80 mb-6">
          Are you sure you want to exit? Your destiny awaits.
        </p>
        
        <div className="flex gap-4">
          <Button 
            variant="ghost" 
            fullWidth 
            onClick={() => setShowExitModal(false)}
          >
            Stay
          </Button>
          <Button 
            variant="primary" 
            fullWidth 
            onClick={() => {
              // Actual exit logic (close window or navigate away)
              window.close();
            }}
          >
            Exit
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ExitConfirmModal;
