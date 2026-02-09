/**
 * 🗣️ useLanguage Hook
 * Re-export wrapper
 */

import { useLanguage as useLangContext } from '../context/LanguageContext';

export const useLanguage = () => {
  return useLangContext();
};
