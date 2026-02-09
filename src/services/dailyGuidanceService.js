/**
 * 🌅 DAILY GUIDANCE SERVICE
 * separate from specific Horoscopes, this provides general
 * spiritual energy readings for the day.
 */

import { generateAIResponse } from './aiService';

const CACHE_KEY_PREFIX = 'palm_daily_energy_';

export const getDailyEnergy = async (language, userProfile) => {
  const today = new Date().toISOString().split('T')[0];
  const cacheKey = `${CACHE_KEY_PREFIX}${language}_${today}`;

  // 1. Check Cache
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }

  // 2. Prepare Prompt
  // Personalized if user name is available
  const greeting = userProfile?.name ? ` for ${userProfile.name}` : '';
  
  const prompt = `
    Generate a generic "Daily Spiritual Guidance"${greeting}.
    Date: ${today}
    
    Output Format (JSON):
    {
      "theme": "Two word theme (e.g. 'Quiet Reflection')",
      "guidance": "2-3 sentences of empowering advice.",
      "affirmation": "A short 'I am' affirmation.",
      "luckyElement": "One element (Fire, Water, Air, Earth, or Ether) to connect with today.",
      "color": "Hex code of a lucky color for today"
    }
    
    Ensure the JSON is valid.
  `;

  // 3. Call AI
  try {
    const rawResponse = await generateAIResponse(prompt, language);
    
    // Attempt to parse JSON
    let result;
    const jsonMatch = rawResponse.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      result = JSON.parse(jsonMatch[0]);
    } else {
      // Fallback if AI fails to give JSON
      result = {
        theme: "Universal Flow",
        guidance: rawResponse,
        affirmation: "I trust the journey.",
        luckyElement: "Ether",
        color: "#8b5cf6"
      };
    }

    // 4. Cache
    const finalData = { ...result, date: today };
    localStorage.setItem(cacheKey, JSON.stringify(finalData));
    
    return finalData;

  } catch (error) {
    console.error("Daily Guidance Error:", error);
    // Silent fail fallback
    return {
      theme: "Peace",
      guidance: "Take a deep breath. The stars are listening.",
      affirmation: "I am calm.",
      luckyElement: "Water",
      color: "#3b82f6"
    };
  }
};
