/**
 * 🔮 APP CONSTANTS
 * Single source of truth for configuration strings and enums.
 */

export const APP_CONFIG = {
  NAME: 'AI Palm Reader',
  VERSION: '1.0.0',
  CONTACT_EMAIL: 'support@aipalmreader.app',
  MAX_UPLOAD_SIZE_MB: 5,
  SUPPORTED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  ANIMATION_DURATION: 300,
};

export const STORAGE_KEYS = {
  USER_PROFILE: 'palm_reader_user',
  LANGUAGE: 'palm_reader_language',
  FIRST_LAUNCH: 'palm_reader_first_launch',
  THEME: 'palm_reader_theme',
  HISTORY: 'palm_reader_history',
  DAILY_STREAK: 'palm_reader_streak',
};

export const ZODIAC_SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 
  'Leo', 'Virgo', 'Libra', 'Scorpio', 
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export const PALM_LINES = {
  HEART: 'heartLine',
  HEAD: 'headLine',
  LIFE: 'lifeLine',
  FATE: 'fateLine',
};

export const TAROT_CATEGORIES = {
  LOVE: 'love',
  CAREER: 'career',
  FINANCE: 'finance',
  GROWTH: 'growth',
  DAILY: 'daily',
};

export const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
];

export const CHAT_SUGGESTIONS = [
  "What does my heart line say about love?",
  "Will I have a successful career?",
  "Tell me about my hidden talents.",
  "How can I improve my energy today?",
];
