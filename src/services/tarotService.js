/**
 * 🃏 TAROT SERVICE
 * Handles deck management, card drawing, and interpretation.
 */

import { generateAIResponse } from './aiService';
import { TAROT_DECK } from '../data/tarotDeck'; // We will create this data file later

/**
 * Draws random cards from the deck
 * @param {number} count - Number of cards to draw (1, 3, or 5)
 */
export const drawCards = (count = 3) => {
  const deck = [...TAROT_DECK]; // Copy deck
  const drawn = [];
  
  // Fisher-Yates Shuffle
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  // Select cards & determine orientation (Upright/Reversed)
  for (let i = 0; i < count; i++) {
    const card = deck[i];
    const isReversed = Math.random() < 0.3; // 30% chance of reversal
    drawn.push({ ...card, isReversed });
  }

  return drawn;
};

/**
 * Interprets the spread using AI
 */
export const interpretTarotSpread = async (cards, category, question, language) => {
  const cardNames = cards.map(c => 
    `${c.name} (${c.isReversed ? 'Reversed' : 'Upright'})`
  ).join(', ');

  const prompt = `
    Perform a Tarot Reading.
    Context: ${category} Reading.
    Question (if any): ${question || 'General guidance'}
    
    Cards Drawn:
    ${cardNames}
    
    Please interpret this spread. 
    1. Analyze each card individually in the context of the position/order.
    2. Analyze the synthesis/interaction between the cards.
    3. Provide actionable spiritual advice based on this spread.
    
    Keep the tone mystical but practical.
  `;

  return await generateAIResponse(prompt, language);
};
