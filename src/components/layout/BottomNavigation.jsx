import React from 'react';
import { useNavigation } from '@hooks/useNavigation';
import HomeIcon from '@assets/icons/HomeIcon';
import ChatIcon from '@assets/icons/ChatIcon';
import StarIcon from '@assets/icons/StarIcon';
import SettingsIcon from '@assets/icons/SettingsIcon';

const BottomNavigation = () => {
  const { currentScreen, navigateTo } = useNavigation();

  const navItems = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'daily', icon: StarIcon, label: 'Daily' },
    { id: 'ai-chat', icon: ChatIcon, label: 'Guide' },
    { id: 'settings', icon: SettingsIcon, label: 'Settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-20 pb-safe glass-heavy border-t border-white/10 rounded-t-3xl shadow-glow-lg">
      <div className="flex justify-around items-center h-full px-2">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className="relative flex flex-col items-center justify-center w-16 h-16 active-press"
            >
              {/* Active Glow Indicator */}
              {isActive && (
                <div className="absolute top-1 w-8 h-8 bg-mystic-500/30 rounded-full blur-md" />
              )}
              
              <Icon 
                className={`w-6 h-6 mb-1 transition-all duration-300 ${
                  isActive 
                    ? 'text-mystic-300 scale-110 drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]' 
                    : 'text-text-muted'
                }`} 
              />
              
              <span className={`text-[10px] font-medium tracking-wide transition-colors duration-300 ${
                isActive ? 'text-white' : 'text-text-muted'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
