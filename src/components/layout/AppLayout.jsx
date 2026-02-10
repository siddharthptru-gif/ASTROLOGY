import React, { useEffect, Suspense } from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useUser } from '@context/UserContext';
import Header from './Header';
import BottomNavigation from './BottomNavigation';
import ScreenTransition from './ScreenTransition';
import Loader from '@components/ui/Loader';

// Lazy Load Screens for Performance
const SplashScreen = React.lazy(() => import('@screens/SplashScreen'));
const LanguageSelectionScreen = React.lazy(() => import('@screens/LanguageSelectionScreen'));
const OnboardingScreen = React.lazy(() => import('@screens/OnboardingScreen'));
const ProfileSetupScreen = React.lazy(() => import('@screens/ProfileSetupScreen'));
const HomeScreen = React.lazy(() => import('@screens/HomeScreen'));

// Feature Screens
const PalmScanScreen = React.lazy(() => import('@screens/PalmScanScreen'));
const PalmResultScreen = React.lazy(() => import('@screens/PalmResultScreen'));
const AIPalmChatScreen = React.lazy(() => import('@screens/AIPalmChatScreen'));
const TarotCategoryScreen = React.lazy(() => import('@screens/TarotCategoryScreen'));
const TarotReadingScreen = React.lazy(() => import('@screens/TarotReadingScreen'));
const TarotResultScreen = React.lazy(() => import('@screens/TarotResultScreen'));
const DailyGuidanceScreen = React.lazy(() => import('@screens/DailyGuidanceScreen'));
const HoroscopeScreen = React.lazy(() => import('@screens/HoroscopeScreen'));
const LoveReadingScreen = React.lazy(() => import('@screens/LoveReadingScreen'));
const SettingsScreen = React.lazy(() => import('@screens/SettingsScreen'));
const PrivacyPolicyScreen = React.lazy(() => import('@screens/PrivacyPolicyScreen'));

/**
 * 🧱 AppLayout
 * The main shell that decides which screen to render based on navigation state.
 * It handles the "frame" of the application (Header, Content, Bottom Nav).
 */
const AppLayout = () => {
  const { currentScreen } = useNavigation();
  const { userProfile } = useUser();

  // Screens that shouldn't show the standard header/nav
  const fullScreenViews = ['splash', 'language', 'onboarding', 'profile'];
  const isFullScreen = fullScreenViews.includes(currentScreen);

  // Screens that should show Bottom Navigation
  const showBottomNav = ['home', 'daily', 'settings', 'ai-chat'].includes(currentScreen);

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentScreen]);

  /**
   * Screen Registry Map
   */
  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash': return <SplashScreen />;
      case 'language': return <LanguageSelectionScreen />;
      case 'onboarding': return <OnboardingScreen />;
      case 'profile': return <ProfileSetupScreen />;
      case 'home': return <HomeScreen />;
      
      // Features
      case 'palm-scan': return <PalmScanScreen />;
      case 'palm-result': return <PalmResultScreen />;
      case 'ai-chat': return <AIPalmChatScreen />;
      case 'tarot': return <TarotCategoryScreen />;
      case 'tarot-reading': return <TarotReadingScreen />;
      case 'tarot-result': return <TarotResultScreen />;
      case 'daily': return <DailyGuidanceScreen />;
      case 'horoscope': return <HoroscopeScreen />;
      case 'love-reading': return <LoveReadingScreen />;
      
      // Utilities
      case 'settings': return <SettingsScreen />;
      case 'privacy': return <PrivacyPolicyScreen />;
      
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-cosmic-900 text-white overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-mystic-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-celestial-900/20 rounded-full blur-[100px]" />
      </div>

      {/* Main Header (Conditional) */}
      {!isFullScreen && <Header />}

      {/* Main Content Area */}
      <main className={`flex-1 relative z-10 w-full max-w-md mx-auto ${!isFullScreen ? 'pt-16 pb-24' : ''}`}>
        <Suspense fallback={<Loader />}>
          <ScreenTransition key={currentScreen}>
            {renderScreen()}
          </ScreenTransition>
        </Suspense>
      </main>

      {/* Bottom Navigation (Conditional) */}
      {showBottomNav && <BottomNavigation />}

    </div>
  );
};

export default AppLayout;
