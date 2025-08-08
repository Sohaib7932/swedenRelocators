





import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const TranslationContext = createContext();
const API_KEY = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY;
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  // Function to translate a specific text
  const translateText = async (text) => {
    if (translations[text]) {
      // Return from cache if already translated
      return translations[text];
    }

    try {
      const response = await axios.post(
        `${API_URL}?key=${API_KEY}`,
        {
          q: text,
          target: language,
        }
      );

      const translatedText = response.data.data.translations[0].translatedText;

      // Cache the translated text for future use
      setTranslations((prevTranslations) => ({
        ...prevTranslations,
        [text]: translatedText,
      }));

      return translatedText;
    } catch (error) {
      console.error('Translation failed:', error);
      return text; // Fallback to original text if translation fails
    }
  };

  // Function to translate any text on demand
  const t = (text) => {
    // Return from cache if available
    if (translations[text]) {
      return translations[text];
    } else {
      // Translate if not cached
    //  translateText(text);
      return text; // Return original text until translation is available
    }
  };

  useEffect(() => {
    // Clear translations cache when language changes
    setTranslations({});
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);

export default TranslationProvider;
