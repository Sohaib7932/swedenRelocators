import i18n from '../i18n';
import Cookies from 'js-cookie';

/**
 * Initialize language from cookies or browser settings
 * This ensures language persistence across page navigation
 */
export const initializeLanguage = () => {
  // Check if language is stored in cookie
  const cookieLang = Cookies.get('i18next');
  
  if (cookieLang) {
    // If we have a language cookie, use it
    i18n.changeLanguage(cookieLang);
  } else {
    // Otherwise, use browser language or default to English
    const browserLang = navigator.language.split('-')[0];
    const supportedLanguages = ['en', 'de', 'da', 'sv', 'es', 'ar', 'pr', 'gr', 'ur', 'pn'];
    
    // Check if browser language is supported
    const langToUse = supportedLanguages.includes(browserLang) ? browserLang : 'en';
    
    // Set language and save to cookie
    i18n.changeLanguage(langToUse);
    Cookies.set('i18next', langToUse, { expires: 365, path: '/' });
  }
};

/**
 * Get the language name from language code
 * @param {string} langCode - The language code (e.g., 'en', 'de')
 * @returns {string} - The language name (e.g., 'English', 'German')
 */
export const getLanguageName = (langCode) => {
  const languageMap = {
    en: 'English',
    de: 'German',
    da: 'Danish',
    sv: 'Swedish',
    es: 'Spanish',
    ar: 'Arabic',
    pr: 'Persian',
    gr: 'Greek',
    ur: 'Urdu',
    pn: 'Punjabi',
  };
  
  return languageMap[langCode] || 'English';
};

/**
 * Get the current language code
 * @returns {string} - The current language code
 */
export const getCurrentLanguageCode = () => {
  return i18n.language || 'en';
};

/**
 * Get the current language name
 * @returns {string} - The current language name
 */
export const getCurrentLanguageName = () => {
  return getLanguageName(getCurrentLanguageCode());
};

/**
 * Change the application language
 * @param {string} langCode - The language code to change to
 */
export const changeLanguage = (langCode) => {
  i18n.changeLanguage(langCode);
  Cookies.set('i18next', langCode, { expires: 365, path: '/' });
};

/**
 * Change the application language by language name
 * @param {string} langName - The language name to change to
 */
export const changeLanguageByName = (langName) => {
  const languageMap = {
    'English': 'en',
    'German': 'de',
    'Danish': 'da',
    'Swedish': 'sv',
    'Spanish': 'es',
    'Arabic': 'ar',
    'Persian': 'pr',
    'Greek': 'gr',
    'Urdu': 'ur',
    'Punjabi': 'pn',
  };
  
  const langCode = languageMap[langName];
  if (langCode) {
    changeLanguage(langCode);
  }
}; 