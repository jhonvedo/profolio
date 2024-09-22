import en from '../locales/en.json';
import es from '../locales/es.json';

const languages = {
  en,
  es,
};

export function getTranslations(locale = 'es') {
  return languages[locale] || languages['es'];
}