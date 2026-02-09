/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 🔮 AI PALM READER - POSTCSS CONFIGURATION
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * This configuration enables:
 * - TailwindCSS for utility-first styling
 * - Autoprefixer for cross-browser compatibility
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

export default {
  plugins: {
    /**
     * TailwindCSS
     * Utility-first CSS framework for rapid UI development
     * Configuration is in tailwind.config.js
     */
    tailwindcss: {},

    /**
     * Autoprefixer
     * Automatically adds vendor prefixes to CSS rules
     * Uses browserslist from package.json
     */
    autoprefixer: {},
  },
};
