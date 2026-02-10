import React from 'react';
import { FEATURES_LIST } from '@data/featuresList';
import FeatureCard from './FeatureCard';

/**
 * 🍱 Home Screen Grid
 * Masonry-like grid for app features.
 */
const FeatureGrid = ({ onNavigate }) => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 pb-24">
      {FEATURES_LIST.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          feature={feature}
          onClick={() => onNavigate(feature.route)}
          className={`
            animate-fade-in-up 
            ${feature.size === 'large' ? 'col-span-2 aspect-[2/1]' : 'col-span-1 aspect-[1/1]'}
          `}
          style={{ animationDelay: `${index * 100}ms` }}
        />
      ))}
    </div>
  );
};

export default FeatureGrid;
