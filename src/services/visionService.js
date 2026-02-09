/**
 * 👁️ VISION SERVICE
 * Handles image analysis for Palm Reading using Vision AI models.
 */

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const BASE_URL = 'https://openrouter.ai/api/v1/chat/completions';
const VISION_MODEL = 'allenai/molmo-2-8b:free'; // High-quality free vision model

/**
 * Analyzes a palm image to identify lines
 * @param {string} base64Image - The uploaded image in base64 format
 * @param {string} handSide - 'left' or 'right'
 */
export const analyzePalmImage = async (base64Image, handSide) => {
  if (!API_KEY) throw new Error('API Key Missing');

  const prompt = `
    Analyze this image of a human ${handSide} palm. 
    Identify and describe the visual characteristics of these 4 major lines ONLY:
    1. Heart Line (Top horizontal line)
    2. Head Line (Middle horizontal/sloping line)
    3. Life Line (Curved line around the thumb)
    4. Fate Line (Vertical line going up the center - if visible)

    For each line, describe:
    - Length (Short, Long, extending to...)
    - Depth (Deep, Faint, Broken, Chained)
    - Shape (Curved, Straight, Wavy)
    
    FORMAT OUTPUT AS JSON:
    {
      "heartLine": "description...",
      "headLine": "description...",
      "lifeLine": "description...",
      "fateLine": "description..."
    }
    
    Do NOT interpret the meaning yet. Just describe the physical lines visually.
    If the image is not a hand, return error in JSON.
  `;

  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'HTTP-Referer': 'https://aipalmreader.app',
        'X-Title': 'AI Palm Reader Vision'
      },
      body: JSON.stringify({
        model: VISION_MODEL,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              { type: 'image_url', image_url: { url: base64Image } }
            ]
          }
        ],
        temperature: 0.1, // Low temp for factual visual description
        max_tokens: 500
      })
    });

    if (!response.ok) throw new Error('Vision Analysis Failed');

    const data = await response.json();
    const content = data.choices[0].message.content;

    // Extract JSON from markdown code blocks if present
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    } else {
      // Fallback if model returns raw text (rare with low temp)
      console.warn('Model did not return JSON, returning raw text');
      return { raw: content };
    }

  } catch (error) {
    console.error('Vision Service Error:', error);
    throw error;
  }
};
