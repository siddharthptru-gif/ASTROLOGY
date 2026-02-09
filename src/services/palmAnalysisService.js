/**
 * ✋ PALM ANALYSIS ORCHESTRATOR
 * Connects Vision AI (What is seen) with Reasoning AI (What it means).
 */

import { analyzePalmImage } from './visionService';
import { generateAIResponse } from './aiService';

export const processPalmReading = async (imageFile, handSide, userProfile, language) => {
  // 1. Convert File to Base64
  const base64Image = await convertFileToBase64(imageFile);

  // 2. Get Visual Description (Vision AI)
  // This step is objective: "Line is long and curved"
  let visualData;
  try {
    visualData = await analyzePalmImage(base64Image, handSide);
  } catch (err) {
    throw new Error('Failed to analyze image. Please ensure photo is clear.');
  }

  // 3. Generate Spiritual Interpretation (Reasoning AI)
  // This step is subjective: "A long curved line implies emotional depth..."
  const prompt = `
    I have analyzed a user's ${handSide} palm. 
    User Profile: ${userProfile.name}, Gender: ${userProfile.gender}, Zodiac: ${userProfile.zodiacSign}.
    
    Here is the visual analysis of their lines:
    ${JSON.stringify(visualData)}

    Please provide a spiritual palm reading based on this visual data.
    Structure the response into 4 sections:
    1. 💖 The Heart Line (Emotional Self)
    2. 🧠 The Head Line (Intellectual Path)
    3. 🌱 The Life Line (Vitality & Resilience) - (Note: Length does NOT equal lifespan)
    4. ✨ The Fate Line (Career & Destiny)

    End with a short "Soul Message" summary.
  `;

  const interpretation = await generateAIResponse(prompt, language);

  return {
    visualData,
    interpretation,
    timestamp: new Date().toISOString(),
    handSide
  };
};

// Helper: File to Base64
const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
