/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 🔮 AI PALM READER - TAILWIND CSS CONFIGURATION
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * Theme: Dark Astrology / Cosmic / Premium
 * Design System: Mobile-first, Glassmorphism, Glowing Effects
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ══════════════════════════════════════════════════════════
      // COLOR PALETTE - Cosmic Dark Theme
      // ══════════════════════════════════════════════════════════
      colors: {
        // Primary Background Colors
        cosmic: {
          900: '#0a0a14', // Deepest black-blue
          800: '#0f0f1a', // Deep dark
          700: '#141428', // Dark base
          600: '#1a1a2e', // Midnight blue
          500: '#16213e', // Deep navy
          400: '#1f2b5e', // Navy blue
          300: '#2d3a7d', // Medium navy
          200: '#3d4f9f', // Lighter navy
          100: '#5a6fc2', // Light navy
        },
        
        // Accent Colors - Mystical Purples
        mystic: {
          900: '#2e1065', // Deep purple
          800: '#3b0764', // Dark purple
          700: '#4c1d95', // Purple
          600: '#5b21b6', // Vivid purple
          500: '#6d28d9', // Primary purple
          400: '#7c3aed', // Light purple
          300: '#8b5cf6', // Bright purple
          200: '#a78bfa', // Soft purple
          100: '#c4b5fd', // Pale purple
          50: '#ede9fe',  // Very pale purple
        },
        
        // Accent Colors - Celestial Blues
        celestial: {
          900: '#1e3a5f', // Deep blue
          800: '#1e40af', // Dark blue
          700: '#1d4ed8', // Blue
          600: '#2563eb', // Vivid blue
          500: '#3b82f6', // Primary blue
          400: '#60a5fa', // Light blue
          300: '#93c5fd', // Bright blue
          200: '#bfdbfe', // Soft blue
          100: '#dbeafe', // Pale blue
        },
        
        // Glow Colors - Neon Accents
        glow: {
          cyan: '#22d3ee',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          pink: '#ec4899',
          gold: '#fbbf24',
        },
        
        // Semantic Colors
        success: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#f87171',
          dark: '#dc2626',
        },
        
        // Text Colors
        text: {
          primary: '#ffffff',
          secondary: 'rgba(255, 255, 255, 0.8)',
          tertiary: 'rgba(255, 255, 255, 0.6)',
          muted: 'rgba(255, 255, 255, 0.4)',
          disabled: 'rgba(255, 255, 255, 0.25)',
        },
        
        // Glass Colors
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',
          lighter: 'rgba(255, 255, 255, 0.15)',
          light: 'rgba(255, 255, 255, 0.08)',
          dark: 'rgba(0, 0, 0, 0.3)',
          darker: 'rgba(0, 0, 0, 0.5)',
          border: 'rgba(255, 255, 255, 0.18)',
        },
      },
      
      // ══════════════════════════════════════════════════════════
      // TYPOGRAPHY
      // ══════════════════════════════════════════════════════════
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '0.875rem' }],  // 10px
        'xs': ['0.75rem', { lineHeight: '1rem' }],        // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],    // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],    // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],     // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],        // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],   // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],     // 36px
        '5xl': ['3rem', { lineHeight: '1.2' }],           // 48px
        '6xl': ['3.75rem', { lineHeight: '1.1' }],        // 60px
      },
      
      // ══════════════════════════════════════════════════════════
      // SPACING & SIZING
      // ══════════════════════════════════════════════════════════
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      
      // ══════════════════════════════════════════════════════════
      // BORDER RADIUS - Large Rounded Corners (24-32px)
      // ══════════════════════════════════════════════════════════
      borderRadius: {
        'xl': '0.75rem',   // 12px
        '2xl': '1rem',     // 16px
        '3xl': '1.5rem',   // 24px
        '4xl': '2rem',     // 32px
        '5xl': '2.5rem',   // 40px
        '6xl': '3rem',     // 48px
      },
      
      // ══════════════════════════════════════════════════════════
      // BOX SHADOWS - Glowing Effects
      // ══════════════════════════════════════════════════════════
      boxShadow: {
        'glow-sm': '0 0 10px rgba(139, 92, 246, 0.3)',
        'glow': '0 0 20px rgba(139, 92, 246, 0.4)',
        'glow-lg': '0 0 30px rgba(139, 92, 246, 0.5)',
        'glow-xl': '0 0 50px rgba(139, 92, 246, 0.6)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.4)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.4)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.4)',
        'glow-gold': '0 0 20px rgba(251, 191, 36, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(139, 92, 246, 0.2)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.25)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.35)',
      },
      
      // ══════════════════════════════════════════════════════════
      // BACKGROUND IMAGES - Gradients
      // ══════════════════════════════════════════════════════════
      backgroundImage: {
        // Main App Gradients
        'cosmic-gradient': 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
        'cosmic-radial': 'radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1a 100%)',
        
        // Card Gradients
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'glass-border': 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
        
        // Accent Gradients
        'mystic-gradient': 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 50%, #a78bfa 100%)',
        'celestial-gradient': 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)',
        'aurora-gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 33%, #ec4899 66%, #f43f5e 100%)',
        
        // Feature Card Gradients
        'tarot-gradient': 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)',
        'palm-gradient': 'linear-gradient(135deg, #1e3a5f 0%, #3b82f6 100%)',
        'love-gradient': 'linear-gradient(135deg, #be185d 0%, #ec4899 100%)',
        'horoscope-gradient': 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)',
        'daily-gradient': 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
        
        // Button Gradients
        'btn-primary': 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)',
        'btn-secondary': 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
        'btn-glow': 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(59,130,246,0.2) 100%)',
      },
      
      // ══════════════════════════════════════════════════════════
      // BACKDROP BLUR - Glassmorphism
      // ══════════════════════════════════════════════════════════
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
        '3xl': '64px',
      },
      
      // ══════════════════════════════════════════════════════════
      // ANIMATIONS & TRANSITIONS
      // ══════════════════════════════════════════════════════════
      animation: {
        // Fade Animations
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-out': 'fadeOut 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
        
        // Slide Animations
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.4s ease-out forwards',
        'slide-in-up': 'slideInUp 0.4s ease-out forwards',
        'slide-in-down': 'slideInDown 0.4s ease-out forwards',
        'slide-out-right': 'slideOutRight 0.4s ease-out forwards',
        'slide-out-left': 'slideOutLeft 0.4s ease-out forwards',
        
        // Scale Animations
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'scale-out': 'scaleOut 0.3s ease-out forwards',
        'bounce-in': 'bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        
        // Glow Animations
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        
        // Card Animations
        'card-flip': 'cardFlip 0.8s ease-in-out forwards',
        'card-reveal': 'cardReveal 1s ease-out forwards',
        
        // Loading Animations
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      
      keyframes: {
        // Fade Keyframes
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        
        // Slide Keyframes
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideOutRight: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(100%)' },
        },
        slideOutLeft: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-100%)' },
        },
        
        // Scale Keyframes
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.9)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        
        // Glow Keyframes
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.7)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        
        // Card Keyframes
        cardFlip: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(180deg)' },
        },
        cardReveal: {
          '0%': {
            opacity: '0',
            transform: 'perspective(1000px) rotateY(-90deg) scale(0.8)',
          },
          '100%': {
            opacity: '1',
            transform: 'perspective(1000px) rotateY(0deg) scale(1)',
          },
        },
      },
      
      // ══════════════════════════════════════════════════════════
      // TRANSITION TIMING
      // ══════════════════════════════════════════════════════════
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      // ══════════════════════════════════════════════════════════
      // Z-INDEX SCALE
      // ══════════════════════════════════════════════════════════
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        'modal': '1000',
        'toast': '1100',
        'tooltip': '1200',
        'overlay': '900',
      },
      
      // ══════════════════════════════════════════════════════════
      // ASPECT RATIOS
      // ══════════════════════════════════════════════════════════
      aspectRatio: {
        'card': '2.5 / 3.5',
        'tarot': '2 / 3',
        'palm': '3 / 4',
      },
    },
  },
  
  // ══════════════════════════════════════════════════════════════
  // PLUGINS
  // ══════════════════════════════════════════════════════════════
  plugins: [],
};
