import { useState, useEffect, useCallback } from 'react';

// Custom event name
const TOAST_EVENT = 'app-toast';

/**
 * Hook to dispatch toasts from anywhere
 */
export const useToast = () => {
  const showToast = useCallback((message, type = 'info', duration = 3000) => {
    const event = new CustomEvent(TOAST_EVENT, {
      detail: { message, type, duration }
    });
    window.dispatchEvent(event);
  }, []);

  return { showToast };
};

/**
 * Hook for the ToastContainer to listen for events
 */
export const useToastListener = () => {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const handleToast = (event) => {
      setToast(event.detail);
    };

    window.addEventListener(TOAST_EVENT, handleToast);
    return () => window.removeEventListener(TOAST_EVENT, handleToast);
  }, []);

  const hideToast = () => setToast(null);

  return { toast, hideToast };
};
