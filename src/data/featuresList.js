/**
 * 🚀 HOME SCREEN FEATURES
 * Defines the grid layout and routing for the dashboard.
 */

export const FEATURES_LIST = [
  {
    id: 'palm',
    titleKey: 'home.features.palm',
    icon: 'PalmIcon',
    route: 'palm-scan',
    color: 'palm-gradient',
    size: 'large' // Spans 2 columns
  },
  {
    id: 'tarot',
    titleKey: 'home.features.tarot',
    icon: 'TarotIcon',
    route: 'tarot',
    color: 'tarot-gradient',
    size: 'normal'
  },
  {
    id: 'love',
    titleKey: 'home.features.love',
    icon: 'HeartIcon',
    route: 'love-reading',
    color: 'love-gradient',
    size: 'normal'
  },
  {
    id: 'horoscope',
    titleKey: 'home.features.horoscope',
    icon: 'StarIcon',
    route: 'horoscope',
    color: 'horoscope-gradient',
    size: 'normal'
  },
  {
    id: 'chat',
    titleKey: 'home.features.chat',
    icon: 'ChatIcon',
    route: 'ai-chat',
    color: 'mystic-gradient',
    size: 'large'
  }
];
