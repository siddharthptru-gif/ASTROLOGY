/**
 * 💾 STORAGE SERVICE
 * Centralized wrapper for LocalStorage to handle JSON parsing 
 * and error safety.
 */

export const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      if (item === null) return defaultValue;
      return JSON.parse(item);
    } catch (e) {
      console.warn(`Error reading ${key} from storage`, e);
      return defaultValue;
    }
  },

  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error(`Error saving ${key} to storage`, e);
      return false;
    }
  },

  remove: (key) => {
    localStorage.removeItem(key);
  },

  // Save a reading to history
  saveHistory: (type, data) => {
    try {
      const history = storage.get('palm_reader_history', []);
      const newEntry = {
        id: Date.now(),
        type, // 'palm', 'tarot', 'horoscope'
        date: new Date().toISOString(),
        summary: data.summary || 'Reading',
        data: data
      };
      
      // Keep last 20 readings only
      const updatedHistory = [newEntry, ...history].slice(0, 20);
      storage.set('palm_reader_history', updatedHistory);
    } catch (e) {
      console.error('Failed to save history', e);
    }
  },

  getHistory: () => {
    return storage.get('palm_reader_history', []);
  }
};
