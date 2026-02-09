import { useEffect } from 'react';

/**
 * Hook to handle hardware back button (Android) or browser back
 * specifically for closing modals/overlays before navigating back.
 */
export const useBackHandler = (handler, active = true) => {
  useEffect(() => {
    if (!active) return;

    const handlePopState = (event) => {
      // If the handler returns true, it means it handled the event
      // and we should stop the default back behavior (if possible)
      // Note: In browsers we can't easily cancel popstate, 
      // but we can push state back to cancel the effect.
      
      const shouldPreventDefault = handler();
      
      if (shouldPreventDefault) {
        // Push state back to stay on current page visually
        window.history.pushState(null, '', window.location.pathname);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [handler, active]);
};
