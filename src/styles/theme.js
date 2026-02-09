/**
 * 🔮 THEME CONSTANTS
 * Centralized source of truth for Javascript-side styling
 * (Canvas drawing, dynamic inline styles, conditional logic)
 * 
 * Must match tailwind.config.js
 */

export const THEME = {
  colors: {
    // Backgrounds
    background: '#0f0f1a',
    surface: '#1a1a2e',
    surfaceLight: '#16213e',
    
    // Accents
    primary: '#8b5cf6',   // Violet
    secondary: '#3b82f6', // Blue
    accent: '#22d3ee',    // Cyan
    
    // Status
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    
    // Text
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    textMuted: 'rgba(255, 255, 255, 0.4)',
    
    // Palm Analysis Specific
    palm: {
      scanLine: '#22d3ee',
      heartLine: '#ec4899', // Pink
      headLine: '#3b82f6',  // Blue
      lifeLine: '#10b981',  // Green
      fateLine: '#f59e0b',  // Gold
    }
  },
  
  gradients: {
    cosmic: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
    mystic: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 50%, #a78bfa 100%)',
    glass: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
  },
  
  layout: {
    headerHeight: 64,
    bottomNavHeight: 80,
    borderRadius: {
      sm: 8,
      md: 12,
      lg: 16,
      xl: 24,
      xxl: 32
    }
  },
  
  animation: {
    duration: {
      fast: 200,
      normal: 400,
      slow: 800
    },
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  }
};

export default THEME;
