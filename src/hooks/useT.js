import { en } from '../i18n/en';
import { en as de } from '../i18n/de';
import { useLanguage } from '../context/LanguageContext';

const translations = { en, de };

export default function useT() {
  const { language } = useLanguage();
  return translations[language];
}
