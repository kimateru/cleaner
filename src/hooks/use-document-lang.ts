import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const keywords = {
  ro: "curățenie Chișinău, servicii curățenie Moldova, curățenie profesională, curățenie birouri Chișinău, curățenie case Moldova, curățenie profundă, dezinfectare, curățenie tapițerie",
  ru: "уборка Кишинёв, клининговые услуги Молдова, профессиональная уборка, уборка офисов Кишинёв, уборка домов Молдова, глубокая уборка, дезинфекция, чистка мебели"
};

const metaDescriptions = {
  ro: "Cleaner oferă servicii profesionale de curățenie în Chișinău, Moldova pentru spații rezidențiale și comerciale. Curățenie de calitate, prețuri accesibile. Contactează-ne pentru ofertă gratuită!",
  ru: "Cleaner предлагает профессиональные услуги уборки в Кишинёве, Молдова для жилых и коммерческих помещений. Качественная уборка по доступным ценам. Свяжитесь с нами для бесплатного предложения!"
};

const titles = {
  ro: "Cleaner - Servicii de Curățenie Profesionale în Chișinău, Moldova | Curățenie Comercială și Rezidențială",
  ru: "Cleaner - Профессиональные услуги уборки в Кишинёве, Молдова | Коммерческая и жилая уборка"
};

const ogLocales = {
  ro: "ro_MD",
  ru: "ru_MD"
};

export const useDocumentLang = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = i18n.language;

    // Update meta description and keywords
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metaDescriptions[i18n.language as keyof typeof metaDescriptions]);
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords[i18n.language as keyof typeof keywords]);
    }

    // Update document title
    document.title = titles[i18n.language as keyof typeof titles];

    // Update Open Graph locale
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', ogLocales[i18n.language as keyof typeof ogLocales]);
    }

    // Update Open Graph title and description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    if (ogTitle) {
      ogTitle.setAttribute('content', titles[i18n.language as keyof typeof titles]);
    }
    if (ogDescription) {
      ogDescription.setAttribute('content', metaDescriptions[i18n.language as keyof typeof metaDescriptions]);
    }
    if (twitterTitle) {
      twitterTitle.setAttribute('content', titles[i18n.language as keyof typeof titles]);
    }
    if (twitterDescription) {
      twitterDescription.setAttribute('content', metaDescriptions[i18n.language as keyof typeof metaDescriptions]);
    }
  }, [i18n.language]);
};