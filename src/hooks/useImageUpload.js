import { useState } from 'react';

export const useImageUpload = (maxSizeMB = 5) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageSelect = async (file) => {
    setError(null);
    setIsUploading(true);

    if (!file) {
      setIsUploading(false);
      return;
    }

    // 1. Validate Type
    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file (JPG, PNG).');
      setIsUploading(false);
      return;
    }

    // 2. Validate Size
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`Image size must be less than ${maxSizeMB}MB.`);
      setIsUploading(false);
      return;
    }

    // 3. Create Preview & Process
    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setImage(file);
        setIsUploading(false);
      };
      reader.onerror = () => {
        setError('Failed to read file.');
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError('Something went wrong.');
      setIsUploading(false);
    }
  };

  const clearImage = () => {
    setImage(null);
    setPreview(null);
    setError(null);
  };

  return {
    image,
    preview,
    error,
    isUploading,
    handleImageSelect,
    clearImage
  };
};
