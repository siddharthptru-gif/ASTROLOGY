/**
 * 🧭 useNavigation Hook
 * Re-exports the hook from Context to allow clean imports like:
 * import { useNavigation } from '@hooks/useNavigation';
 */

import { useNavigation as useNavContext } from '../context/NavigationContext';

export const useNavigation = () => {
  const nav = useNavContext();
  
  // Add convenience methods here if needed
  const goHome = () => nav.resetNavigation('home');
  
  return {
    ...nav,
    goHome
  };
};
