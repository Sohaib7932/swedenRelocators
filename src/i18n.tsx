import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { PostProcessorModule } from 'i18next';

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

// Initialize i18next
i18n
  .use(Backend) // Use the backend to load translation files
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .use(multiLineKeyPostProcessor) // Register the custom post-processor
  .init({
    fallbackLng: 'en', // Fallback language if the user's language is not available
    debug: false, // Disable debug mode for production
    backend: {
      loadPath: '/locales/langs/{{lng}}/translation.json', // Path to translation files
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
