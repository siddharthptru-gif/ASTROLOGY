/**
 * ♈ HOROSCOPE SERVICE
 * Manages daily horoscope generation and caching.
 * Prevents API spam by caching results locally for 24h.
 */

import { generateAIResponse } from './aiService';

const CACHE_KEY_PREFIX = 'palm_horoscope_';

/**
 * Gets daily horoscope (Cached or New)
 */
export const getDailyHoroscope = async (sign, language) => {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const cacheKey = `${CACHE_KEY_PREFIX}${sign}_${language}_${today}`;
  
  // 1. Check Cache
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }

  // 2. Generate New if not in cache
  const prompt = `
    Generate a Daily Horoscope for ${sign}.
    Date: ${today}
    
    Structure:
    - 🌌 General Vibe: (1 sentence)
    - ❤️ Love & Relationships: (2-3 sentences)
    - 💼 Career & Finance: (2-3 sentences)
    - 🧘 Spiritual Advice: (1 affirmation)
    - 🍀 Lucky Number & Color
    
    Tone: Empowering, cosmic, specific to the sign's archetype.
  `;

  try {
    const content = await generateAIResponse(prompt, language);
    
    const result = {
      date: today,
      sign,
      content,
      generatedAt: Date.now()
    };

    // 3. Save to Cache
    localStorage.setItem(cacheKey, JSON.stringify(result));
    
    return result;

  } catch (error) {
    console.error('Horoscope Error:', error);
    throw error;
  }
};

/**
 * Gets general daily cosmic energy (for Home Screen)
 */
export const getDailyGuidance = async (language) => {
  const today = new Date().toISOString().split('T')[0];
  const cacheKey = `palm_daily_guidance_${language}_${today}`;

  const cached = localStorage.getItem(cacheKey);
  if (cached) return JSON.parse(cached);

  const prompt = `
    What is the general cosmic energy for today (${today})?
    Provide a "Card of the Day" vibe (doesn't have to be a real tarot card, just a theme).
    Give 3 bullet points on what to focus on today for collective consciousness.
  `;

  const content = await generateAIResponse(prompt, language);
  
  const result = { date: today, content };
  localStorage.setItem(cacheKey, JSON.stringify(result));
  
  return result;
};
