import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from '../assets/locales/en.json';
import translationFR from '../assets/locales/fr.json';

export const initi18next = () => {
  i18n
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
      lng: navigator.language,
      fallbackLng: 'en',
      ns: ['portfolio'],
      defaultNS: 'portfolio',
      resources: {
        en: {
          translation: translationEN,
        },
        fr: {
          translation: translationFR,
        },
      },

      keySeparator: false, // we do not use keys in form messages.welcome

      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
};
