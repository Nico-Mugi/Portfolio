import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from '../assets/locales/en.json';
import translationFR from '../assets/locales/fr.json';

export const init = () => {
  i18n
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
      lng: navigator.language,
      fallbackLng: 'fr-FR',
      ns: ['portfolio'],
      defaultNS: 'portfolio',
      resources: {
        en: {
          portfolio: translationEN,
        },
        fr: {
          portfolio: translationFR,
        },
      },
      interpolation: {
        escapeValue: false,
      },
    });
};
