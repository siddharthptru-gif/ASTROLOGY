import React, { useEffect, useState } from 'react';
import { useToastListener } from '@hooks/useToast';
import CheckIcon from '@assets/icons/CheckIcon';
import WarningIcon from '@assets/icons/WarningIcon';
import InfoIcon from '@assets/icons/InfoIcon';

/**
 * 🍞 Toast Notification Component
 * Subscribes to toast events globally.
 */
const Toast = () => {
  const { toast, hideToast } = useToastListener();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (toast) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(hideToast, 300); // Wait for animation to finish
      }, toast.duration || 3000);
      return () => clearTimeout(timer);
    }
  }, [toast, hideToast]);

  if (!toast) return null;

  const icons = {
    success: <CheckIcon className="w-5 h-5 text-emerald-400" />,
    error: <WarningIcon className="w-5 h-5 text-red-400" />,
    info: <InfoIcon className="w-5 h-5 text-blue-400" />,
  };

  const bgColors = {
    success: 'bg-emerald-900/80 border-emerald-500/30',
    error: 'bg-red-900/80 border-red-500/30',
    info: 'bg-slate-800/80 border-slate-500/30',
  };

  return (
    <div className="fixed top-20 left-0 right-0 z-toast pointer-events-none flex justify-center px-4">
      <div 
        className={`
          flex items-center gap-3 px-4 py-3 rounded-2xl border backdrop-blur-md shadow-xl
          transition-all duration-300 transform
          ${isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-4 opacity-0 scale-95'}
          ${bgColors[toast.type] || bgColors.info}
        `}
      >
        <div className="flex-shrink-0">
          {icons[toast.type] || icons.info}
        </div>
        <p className="text-sm font-medium text-white tracking-wide">
          {toast.message}
        </p>
      </div>
    </div>
  );
};

export default Toast;
