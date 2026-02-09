/**
 * 🛠️ HELPER UTILITIES
 * General purpose helper functions.
 */

/**
 * Pauses execution for a set time (useful for simulating thinking/animations)
 * @param {number} ms 
 */
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Capitalizes the first letter of a string
 * @param {string} string 
 */
export const capitalize = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Generates a random integer between min and max (inclusive)
 */
export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Selects a random item from an array
 */
export const randomItem = (array) => {
  if (!array || array.length === 0) return null;
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Truncates text to a specific length and adds ellipsis
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

/**
 * Detects if the device is likely a mobile device
 */
export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

/**
 * Safely parses JSON string with a fallback
 */
export const safeJsonParse = (jsonString, fallback = null) => {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return fallback;
  }
};

/**
 * Vibrates the device (Haptic Feedback)
 * @param {number} ms - Duration in ms (default 50)
 */
export const vibrate = (ms = 10) => {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(ms);
  }
};
