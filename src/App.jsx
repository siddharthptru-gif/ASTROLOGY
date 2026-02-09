import React from 'react';
import { AppProvider } from '@context/AppContext';
import { LanguageProvider } from '@context/LanguageContext';
import { UserProvider } from '@context/UserContext';
import { ThemeProvider } from '@context/ThemeContext';
import { NavigationProvider } from '@context/NavigationContext';

// Layout & UI
import AppLayout from '@components/layout/AppLayout';
import Toast from '@components/ui/Toast';
import ExitConfirmModal from '@components/features/ExitConfirmModal';
import Loader from '@components/ui/Loader';

/**
 * 🔮 AppContent
 * Separation of concerns: Internal component that has access to contexts
 */
const AppContent = () => {
  return (
    <>
      {/* Main App Layout handles Routing & Transitions */}
      <AppLayout />
      
      {/* Global UI Overlays */}
      <Toast />
      <ExitConfirmModal />
      
      {/* PWA Update Listener (Logic handled in AppLayout or specific hook) */}
    </>
  );
};

/**
 * 🔮 App
 * Root component that sets up all Global Context Providers
 * Order of Providers is critical for dependency injection
 */
export default function App() {
  return (
    <AppProvider>
      <LanguageProvider>
        <ThemeProvider>
          <UserProvider>
            <NavigationProvider>
              
              {/* The actual application UI */}
              <React.Suspense fallback={<Loader fullScreen text="Summoning energies..." />}>
                <AppContent />
              </React.Suspense>

            </NavigationProvider>
          </UserProvider>
        </ThemeProvider>
      </LanguageProvider>
    </AppProvider>
  );
}
