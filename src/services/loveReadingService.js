/**
 * ❤️ LOVE READING SERVICE
 * specialized logic for relationship and compatibility insights.
 */

import { generateAIResponse } from './aiService';

export const getLoveReading = async (status, partnerSign, userProfile, language) => {
  const { name, zodiacSign } = userProfile;
  
  const prompt = `
    Perform a Love & Relationship Reading.
    
    User: ${name || 'Seeker'} (${zodiacSign})
    Relationship Status: ${status}
    ${partnerSign ? `Partner's Sign: ${partnerSign}` : ''}
    
    Please provide insights on:
    1. Current emotional energy
    2. Potential challenges
    3. Advice for harmony
    ${partnerSign ? '4. Compatibility analysis' : '4. Attracting love'}
    
    Tone: Gentle, romantic, constructive. No breakup predictions.
  `;

  return await generateAIResponse(prompt, language);
};

export const calculateCompatibility = (sign1, sign2) => {
  // Simple heuristic for UI display before AI analysis
  // Real analysis happens in AI, this is for immediate visual feedback (e.g., progress bar)
  const elementMap = {
    Aries: 'Fire', Leo: 'Fire', Sagittarius: 'Fire',
    Taurus: 'Earth', Virgo: 'Earth', Capricorn: 'Earth',
    Gemini: 'Air', Libra: 'Air', Aquarius: 'Air',
    Cancer: 'Water', Scorpio: 'Water', Pisces: 'Water'
  };

  const el1 = elementMap[sign1];
  const el2 = elementMap[sign2];

  if (!el1 || !el2) return 50; // Unknown

  if (el1 === el2) return 90; // Same element
  if (
    (el1 === 'Fire' && el2 === 'Air') || (el1 === 'Air' && el2 === 'Fire') ||
    (el1 === 'Water' && el2 === 'Earth') || (el1 === 'Earth' && el2 === 'Water')
  ) return 85; // Harmonious

  if (
    (el1 === 'Fire' && el2 === 'Water') || (el1 === 'Water' && el2 === 'Fire')
  ) return 60; // Steam/Conflict

  return 75; // Neutral/Average
};
