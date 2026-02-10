import React from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useLanguage } from '@hooks/useLanguage';
import { TAROT_CATEGORIES } from '@utils/constants';
import GlassCard from '@components/ui/GlassCard';
import HeartIcon from '@assets/icons/HeartIcon';
import StarIcon from '@assets/icons/StarIcon';
import SunIcon from '@assets/icons/SunIcon';

const TarotCategoryScreen = () => {
  const { navigateTo } = useNavigation();
  const { t } = useLanguage();

  const categories = [
    { 
      id: TAROT_CATEGORIES.LOVE, 
      titleKey: 'tarot.categories.love', 
      icon: <HeartIcon className="w-8 h-8 text-pink-400" />,
      desc: 'Clarity on relationships & heart matters',
      color: 'pink'
    },
    { 
      id: TAROT_CATEGORIES.CAREER, 
      titleKey: 'tarot.categories.career', 
      icon: <SunIcon className="w-8 h-8 text-gold-400" />,
      desc: 'Direction for work & abundance',
      color: 'yellow'
    },
    { 
      id: TAROT_CATEGORIES.GROWTH, 
      titleKey: 'tarot.categories.growth', 
      icon: <StarIcon className="w-8 h-8 text-purple-400" />,
      desc: 'Spiritual path & self-discovery',
      color: 'purple'
    },
  ];

  return (
    <div className="p-4 pb-20">
      <h2 className="text-center text-white/80 mb-6 font-medium">
        What do you seek guidance on?
      </h2>

      <div className="space-y-4">
        {categories.map((cat, index) => (
          <GlassCard
            key={cat.id}
            onClick={() => navigateTo('tarot-reading', { category: cat.id })}
            className={`
              flex items-center gap-4 p-6 cursor-pointer
              transition-all duration-300 hover:scale-[1.02]
              animate-fade-in-up
            `}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`p-3 rounded-full bg-${cat.color}-500/20 shadow-glow`}>
              {cat.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {t(cat.titleKey)}
              </h3>
              <p className="text-sm text-white/50">
                {cat.desc}
              </p>
            </div>
            <div className="ml-auto opacity-50">
              ➔
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default TarotCategoryScreen;
