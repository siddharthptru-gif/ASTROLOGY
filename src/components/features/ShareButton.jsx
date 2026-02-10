import React from 'react';
import ShareIcon from '@assets/icons/ShareIcon';
import Button from '@components/ui/Button';

/**
 * 📤 Share Button
 * Uses Web Share API.
 */
const ShareButton = ({ title, text, url }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || 'My Palm Reading',
          text: text || 'Check out my destiny reading!',
          url: url || window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(`${text} ${url}`);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <Button 
      variant="secondary" 
      icon={<ShareIcon className="w-4 h-4" />}
      onClick={handleShare}
      className="shadow-glow-blue"
    >
      Share Reading
    </Button>
  );
};

export default ShareButton;
