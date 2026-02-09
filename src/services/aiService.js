/**
 * 🔮 AI SERVICE
 * Core communication layer with OpenRouter API.
 * Handles text generation, reasoning, and system prompting.
 */

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const BASE_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'liquid/lfm-2.5-1.2b-thinking:free'; // Fast reasoning model

/**
 * 🛡️ SYSTEM PROMPT - THE GUARDIAN OF TONE
 * Strict rules for AI behavior:
 * - No fear-based language
 * - No medical/legal/financial guarantees
 * - Empowering, spiritual, calm tone
 */
const getSystemPrompt = (language = 'en') => {
  return `
    You are an ancient, wise, and empathetic spiritual guide named "Aura".
    
    YOUR ROLE:
    Provide deep, symbolic, and encouraging interpretations of palm lines, tarot cards, and astrological signs.
    
    STRICT ETHICAL RULES (NON-NEGOTIABLE):
    1. NEVER predict death, illness, pregnancy, divorce, legal verdicts, or specific financial numbers (lottery).
    2. NEVER give medical, legal, or professional financial advice.
    3. NEVER use fear-inducing language (e.g., "curse", "danger", "disaster").
    4. ALWAYS emphasize free will. The future is mutable, not fixed.
    5. If a reading looks negative, reframe it as a "challenge to overcome" or a "lesson to learn".
    
    TONE & STYLE:
    - Voice: Calm, mystical, warm, non-judgmental.
    - Structure: Use clear headings and bullet points. Avoid walls of text.
    - Length: Detailed and thoughtful (long-form).
    
    LANGUAGE:
    - Respond strictly in the following language code: "${language}".
    - Ensure cultural nuances align with the language.
  `;
};

/**
 * Generates text response from AI
 * @param {string} userPrompt - The specific query
 * @param {string} language - User's selected language
 * @param {Array} context - Previous chat history (optional)
 */
export const generateAIResponse = async (userPrompt, language = 'en', context = []) => {
  if (!API_KEY) {
    console.error('Missing API Key');
    throw new Error('API Configuration Error');
  }

  const messages = [
    { role: 'system', content: getSystemPrompt(language) },
    ...context,
    { role: 'user', content: userPrompt }
  ];

  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'HTTP-Referer': 'https://aipalmreader.app', // OpenRouter requirement
        'X-Title': 'AI Palm Reader'
      },
      body: JSON.stringify({
        model: MODEL,
        messages: messages,
        temperature: 0.7, // Balance between creativity and coherence
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.2,
        presence_penalty: 0.2
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'AI Service Unreachable');
    }

    const data = await response.json();
    return data.choices[0].message.content;

  } catch (error) {
    console.error('AI Service Error:', error);
    // Return a graceful fallback message in the requested language (simplified logic)
    if (language === 'hi') return "ब्रह्मांड अभी शांत है। कृपया कुछ क्षण बाद पुनः प्रयास करें।";
    return "The stars are aligning... please try again in a moment.";
  }
};
