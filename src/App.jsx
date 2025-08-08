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

function App() {
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
