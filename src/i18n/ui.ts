// Define available languages and their corresponding names
export const languages = {
  en: 'English',
  fr: 'Français',
};

// List of supported locales
export const locales = ['en', 'fr'];

// Default language
export const defaultLang = 'en';

// Define UI text for each language
export const ui = {
  // English UI text
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.twitter': 'Twitter',
  },
  // French UI text
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.twitter': 'Twitter',
  },
} as const;
