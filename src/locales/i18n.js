import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { localStorageGetItem } from 'src/utils/storage-available';

import { defaultLang } from './config-lang';
import translationEn from './langs/en/translation.json';
import translationAr from './langs/ar/translation.json';
import translationDe from './langs/de/translation.json';
import translationEs from './langs/es/translation.json';
import translationDa from './langs/da/translation.json';
import translationGr from './langs/gr/translation.json';
import translationPn from './langs/pn/translation.json';
import translationPr from './langs/pr/translation.json';
import translationSv from './langs/sv/translation.json';
import translationUr from './langs/ur/translation.json';

// ----------------------------------------------------------------------

const lng = localStorageGetItem('i18nextLng', defaultLang.value);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: translationEn },
      ar: { translations: translationAr },
      de: { translations: translationDe },
      es: { translations: translationEs },
      da: { translations: translationDa },
      gr: { translations: translationGr },
      pn: { translations: translationPn },
      pr: { translations: translationPr },
      sv: { translations: translationSv },
      ur: { translations: translationUr },
    },
    lng,
    fallbackLng: 'en',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
