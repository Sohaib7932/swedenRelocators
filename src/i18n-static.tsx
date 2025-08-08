import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { PostProcessorModule } from 'i18next';

// Import all translations statically
import enTranslations from './locales/translations/en';
import arTranslations from './locales/translations/ar';
import deTranslations from './locales/translations/de';
import daTranslations from './locales/translations/da';
import svTranslations from './locales/translations/sv';
import esTranslations from './locales/translations/es';
import urTranslations from './locales/translations/ur';
import prTranslations from './locales/translations/pr';
import grTranslations from './locales/translations/gr';
import pnTranslations from './locales/translations/pn';

// Custom Post-Processor for Normalizing Multiline Keys
const multiLineKeyPostProcessor: PostProcessorModule = {
  type: 'postProcessor',
  name: 'multiLineKeyPostProcessor',
  process(value, originalKey, options, translator) {
    let normalizedKey = '';

    // Handle if originalKey is an array
    if (Array.isArray(originalKey)) {
      normalizedKey = originalKey
        .map((item) => {
          if (typeof item === 'string') {
            return item.replace(/\s+/g, ' ').trim();
          }
          return String(item).replace(/\s+/g, ' ').trim();
        })
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();
    }
    // Handle if originalKey is an object
    else if (typeof originalKey === 'object' && originalKey !== null) {
      normalizedKey = Object.values(originalKey)
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();
    }
    // Handle if originalKey is already a string
    else if (typeof originalKey === 'string') {
      normalizedKey = originalKey.replace(/\s+/g, ' ').trim();
    } else {
      return value; // Fallback if the type is unrecognized
    }

    // Attempt to re-translate with the normalized key
    if (value === originalKey && normalizedKey && normalizedKey !== originalKey) {
      const secondAttempt = translator.translate(normalizedKey, options);
      if (secondAttempt !== normalizedKey) {
        return secondAttempt; // Return translation if found
      }
    }

    // Return the original value if all else fails
    return value;
  },
};

// Initialize i18next with static resources
i18n
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .use(multiLineKeyPostProcessor) // Register the custom post-processor
  .init({
    fallbackLng: 'en', // Fallback language if the user's language is not available
    debug: false, // Disable debug mode for production
    resources: {
      en: {
        translation: enTranslations,
      },
      ar: {
        translation: arTranslations,
      },
      de: {
        translation: deTranslations,
      },
      da: {
        translation: daTranslations,
      },
      sv: {
        translation: svTranslations,
      },
      es: {
        translation: esTranslations,
      },
      ur: {
        translation: urTranslations,
      },
      pr: {
        translation: prTranslations,
      },
      gr: {
        translation: grTranslations,
      },
      pn: {
        translation: pnTranslations,
      },
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie'], // Cache the user's language preference in cookies
    },
    interpolation: {
      escapeValue: false, // React already escapes values, so no need to escape
    },
    postProcess: ['multiLineKeyPostProcessor'], // Add the custom post-processor
  });

export default i18n; 