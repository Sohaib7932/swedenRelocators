import "./App.css";
import Routing from "./routes/Routing";

import ThemeProvider from '../src/theme';
import './styles/buttons.css';
import './styles/styles.css';
import './styles/flaticon.css';
import './styles/themify-icons.css';
import './styles/animate.css';
import "./styles/animate.css";
import './i18n-static';

import CookieModal from "./components/CookieModel";


import SnackbarProvider from './components/snackbar/snackbar-provider';

import TranslationProvider from './context/TranslationContext';

import { SettingsDrawer, SettingsProvider } from './components/settings';

// Import tracking snippets hook
import { useTrackingSnippets } from './hooks/use-tracking-snippets';

function App() {
  // Initialize tracking snippets
  const { isLoading, isInitialized, error } = useTrackingSnippets();

  // Optionally log the tracking snippets status (remove in production)
  if (process.env.NODE_ENV === 'development') {
    if (error) {
      console.warn('Tracking snippets error:', error);
    } else if (isInitialized) {
      console.log('Tracking snippets initialized successfully');
    }
  }

  return (
    <>
   <TranslationProvider>
                  <Routing />
                  <CookieModal />
                  </TranslationProvider>

      
    </>
  );
}

export default App;
