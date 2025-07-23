import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ro' | 'ru';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ro: {
    // Header
    home: "Acasă",
    about: "Despre Noi", 
    deepCleaning: "Curățenie Profundă",
    regularCleaning: "Curățenie Regulată",
    upholsteryCleaning: "Curățenie Tapițerie",
    clients: "Clienți",
    contact: "Contact",
    freeQuote: "Ofertă Gratuită",
    
    // Hero
    heroTitle: "Servicii de Curățenie Profesionale în Chișinău",
    heroSubtitle: "Servicii de curatenie",
    heroDescription: "Transformăm spațiile tale cu servicii profesionale de curățenie. Calitate garantată, echipă expertă și prețuri competitive în Moldova.",
    getStarted: "Începe Acum",
    callNow: "Sună Acum",
    
    // About
    aboutTitle: "Despre Cleaner",
    aboutDescription: "Cu peste 5 ani de experiență în curățenie profesională, Cleaner este liderul pieței din Chișinău. Folosim echipamente moderne și produse ecologice pentru rezultate impecabile.",
    ourMission: "Misiunea Noastră",
    missionText: "Să oferim servicii de curățenie de cea mai înaltă calitate, creând spații curate și sănătoase pentru clienții noștri din Moldova.",
    whyChooseUs: "De Ce Să Ne Alegeți",
    experience: "Experiență",
    experienceText: "Peste 5 ani în domeniu",
    quality: "Calitate",
    qualityText: "Produse și echipamente premium",
    trust: "Încredere",
    trustText: "Peste 500 clienți mulțumiți",
    
    // Services
    deepCleaningTitle: "Curățenie Profundă",
    deepCleaningDesc: "Servicii intensive de curățenie pentru mutări, după construcții sau curățenie de primăvară. Rezultate garantate.",
    regularCleaningTitle: "Curățenie Regulată",
    regularCleaningDesc: "Servicii de întreținere săptămânală sau lunară pentru case și birouri. Menținem spațiul mereu curat.",
    upholsteryCleaningTitle: "Curățenie Tapițerie",
    upholsteryCleaningDesc: "Curățenie specializată pentru mobilier tapițat, covoare și draperii. Îndepărtăm petele și mirosurile.",
    
    // Pricing
    starting: "Începând de la",
    perHour: "MDL/oră",
    perService: "MDL/serviciu",
    contactForPrice: "Contactează pentru preț",
    
    // Contact
    contactTitle: "Contactează-ne",
    phone: "Telefon",
    email: "Email",
    address: "Adresă",
    workingHours: "Ore de lucru",
    mondayFriday: "Luni - Vineri: 08:00 - 18:00",
    saturday: "Sâmbătă: 09:00 - 16:00",
    
    // Footer
    followUs: "Urmărește-ne",
    allRights: "Toate drepturile rezervate",
    
    // Reviews
    clientsTitle: "Clienții Noștri și Recenziile",
    
    // Stats
    happyClients: "Clienți Fericiți",
    completedJobs: "Lucrări Finalizate",
    yearsExperience: "Ani Experiență",
    teamMembers: "Membri Echipă"
  },
  ru: {
    // Header
    home: "Главная",
    about: "О Нас",
    deepCleaning: "Глубокая Уборка",
    regularCleaning: "Регулярная Уборка", 
    upholsteryCleaning: "Чистка Мебели",
    clients: "Клиенты",
    contact: "Контакты",
    freeQuote: "Бесплатное Предложение",
    
    // Hero
    heroTitle: "Профессиональные Услуги Уборки в Кишиневе",
    heroSubtitle: "Услуги по уборке",
    heroDescription: "Преобразуем ваши пространства с профессиональными услугами уборки. Гарантированное качество, экспертная команда и конкурентные цены в Молдове.",
    getStarted: "Начать Сейчас",
    callNow: "Позвонить",
    
    // About
    aboutTitle: "О Компании Cleaner",
    aboutDescription: "С более чем 5-летним опытом в профессиональной уборке, Cleaner - лидер рынка в Кишиневе. Используем современное оборудование и экологичные продукты для безупречных результатов.",
    ourMission: "Наша Миссия",
    missionText: "Предоставлять услуги уборки высочайшего качества, создавая чистые и здоровые пространства для наших клиентов в Молдове.",
    whyChooseUs: "Почему Выбирают Нас",
    experience: "Опыт",
    experienceText: "Более 5 лет в сфере",
    quality: "Качество", 
    qualityText: "Премиум продукты и оборудование",
    trust: "Доверие",
    trustText: "Более 500 довольных клиентов",
    
    // Services
    deepCleaningTitle: "Глубокая Уборка",
    deepCleaningDesc: "Интенсивные услуги уборки для переездов, после строительства или весенней уборки. Гарантированные результаты.",
    regularCleaningTitle: "Регулярная Уборка",
    regularCleaningDesc: "Еженедельные или ежемесячные услуги поддержания чистоты домов и офисов. Поддерживаем пространство всегда чистым.",
    upholsteryCleaningTitle: "Чистка Мебели",
    upholsteryCleaningDesc: "Специализированная чистка мягкой мебели, ковров и штор. Удаляем пятна и запахи.",
    
    // Pricing
    starting: "Начиная от",
    perHour: "леи/час",
    perService: "леи/услуга", 
    contactForPrice: "Свяжитесь для цены",
    
    // Contact
    contactTitle: "Свяжитесь с Нами",
    phone: "Телефон",
    email: "Электронная Почта",
    address: "Адрес",
    workingHours: "Рабочие Часы",
    mondayFriday: "Понедельник - Пятница: 08:00 - 18:00",
    saturday: "Суббота: 09:00 - 16:00",
    
    // Footer
    followUs: "Следите за Нами",
    allRights: "Все права защищены",
    
    // Reviews
    clientsTitle: "Наши Клиенты и Отзывы",
    
    // Stats
    happyClients: "Довольных Клиентов",
    completedJobs: "Выполненных Работ",
    yearsExperience: "Лет Опыта",
    teamMembers: "Членов Команды"
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ro');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ro']] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};