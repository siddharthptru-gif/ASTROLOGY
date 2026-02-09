import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/globals.css';
import './styles/animations.css';
import './styles/glassmorphism.css';
import { registerSW } from 'virtual:pwa-register';

// Initialize PWA Service Worker
const updateSW = registerSW({
  onNeedRefresh() {
    // This event is handled inside App.jsx or a Toast component
    // We dispatch a custom event that the UI can listen to
    window.dispatchEvent(new CustomEvent('pwa-update-available'));
  },
  onOfflineReady() {
    console.log('App is ready for offline work.');
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
