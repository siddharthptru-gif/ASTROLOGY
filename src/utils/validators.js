/**
 * ✅ VALIDATION UTILITIES
 * Pure functions to validate user inputs and data.
 */

import { APP_CONFIG } from './constants';

/**
 * Validates User Profile Data
 */
export const validateProfile = (data) => {
  const errors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!data.dob) {
    errors.dob = 'Date of birth is required.';
  } else {
    // Simple age check (must be at least 13)
    const birthDate = new Date(data.dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 13) {
      errors.dob = 'You must be at least 13 years old.';
    }
  }

  if (!data.gender) {
    errors.gender = 'Please select a gender.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Validates Image File for Upload
 */
export const validateImageFile = (file) => {
  if (!file) {
    return { valid: false, error: 'No file selected.' };
  }

  if (!APP_CONFIG.SUPPORTED_IMAGE_TYPES.includes(file.type)) {
    return { valid: false, error: 'Unsupported file type. Use JPG or PNG.' };
  }

  if (file.size > APP_CONFIG.MAX_UPLOAD_SIZE_MB * 1024 * 1024) {
    return { valid: false, error: `File too large. Max size is ${APP_CONFIG.MAX_UPLOAD_SIZE_MB}MB.` };
  }

  return { valid: true, error: null };
};

/**
 * Validates if a string is valid JSON
 */
export const isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
