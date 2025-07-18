import React, { createContext, useContext, useState, useEffect } from 'react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  languages: Language[];
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' }
];

const translations: Record<string, Record<string, string>> = {
  en: {
    'nav.about': 'About Us',
    'nav.privacy': 'Privacy Policy',
    'nav.terms': 'Terms & Conditions',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'search.placeholder': 'Search for teams, competitions, or venues...',
    'hero.title': 'Find Your Perfect Football Tickets',
    'hero.subtitle': 'Compare prices from trusted partners and secure your seats for the biggest matches',
    'sections.competitions': 'Top Competitions',
    'sections.teams': 'Major Club Teams',
    'sections.national': 'National Teams',
    'sections.fixtures': 'Major Fixtures',
    'sections.venues': 'Iconic Venues',
    'footer.competitions': 'Top Competitions',
    'footer.teams': 'Top Teams',
    'footer.fixtures': 'Major Fixtures',
    'footer.venues': 'Top Venues'
  },
  de: {
    'nav.about': 'Über uns',
    'nav.privacy': 'Datenschutz',
    'nav.terms': 'Nutzungsbedingungen',
    'nav.login': 'Anmelden',
    'nav.register': 'Registrieren',
    'search.placeholder': 'Suche nach Teams, Wettbewerben oder Stadien...',
    'hero.title': 'Finde deine perfekten Fußball-Tickets',
    'hero.subtitle': 'Vergleiche Preise von vertrauenswürdigen Partnern und sichere dir deine Plätze für die größten Spiele',
    'sections.competitions': 'Top Wettbewerbe',
    'sections.teams': 'Große Vereinsmannschaften',
    'sections.national': 'Nationalmannschaften',
    'sections.fixtures': 'Große Begegnungen',
    'sections.venues': 'Ikonische Stadien',
    'footer.competitions': 'Top Wettbewerbe',
    'footer.teams': 'Top Teams',
    'footer.fixtures': 'Große Begegnungen',
    'footer.venues': 'Top Stadien'
  },
  es: {
    'nav.about': 'Sobre Nosotros',
    'nav.privacy': 'Política de Privacidad',
    'nav.terms': 'Términos y Condiciones',
    'nav.login': 'Iniciar Sesión',
    'nav.register': 'Registrarse',
    'search.placeholder': 'Buscar equipos, competiciones o estadios...',
    'hero.title': 'Encuentra tus Entradas de Fútbol Perfectas',
    'hero.subtitle': 'Compara precios de socios confiables y asegura tus asientos para los partidos más grandes',
    'sections.competitions': 'Principales Competiciones',
    'sections.teams': 'Grandes Equipos de Club',
    'sections.national': 'Equipos Nacionales',
    'sections.fixtures': 'Grandes Partidos',
    'sections.venues': 'Estadios Icónicos',
    'footer.competitions': 'Principales Competiciones',
    'footer.teams': 'Principales Equipos',
    'footer.fixtures': 'Grandes Partidos',
    'footer.venues': 'Principales Estadios'
  },
  it: {
    'nav.about': 'Chi Siamo',
    'nav.privacy': 'Informativa sulla Privacy',
    'nav.terms': 'Termini e Condizioni',
    'nav.login': 'Accedi',
    'nav.register': 'Registrati',
    'search.placeholder': 'Cerca squadre, competizioni o stadi...',
    'hero.title': 'Trova i Tuoi Biglietti Calcio Perfetti',
    'hero.subtitle': 'Confronta i prezzi di partner affidabili e assicurati i tuoi posti per le partite più grandi',
    'sections.competitions': 'Principali Competizioni',
    'sections.teams': 'Grandi Squadre di Club',
    'sections.national': 'Squadre Nazionali',
    'sections.fixtures': 'Grandi Partite',
    'sections.venues': 'Stadi Iconici',
    'footer.competitions': 'Principali Competizioni',
    'footer.teams': 'Principali Squadre',
    'footer.fixtures': 'Grandi Partite',
    'footer.venues': 'Principali Stadi'
  },
  fr: {
    'nav.about': 'À Propos',
    'nav.privacy': 'Politique de Confidentialité',
    'nav.terms': 'Conditions Générales',
    'nav.login': 'Se Connecter',
    'nav.register': 'S\'inscrire',
    'search.placeholder': 'Rechercher des équipes, compétitions ou stades...',
    'hero.title': 'Trouvez vos Billets de Football Parfaits',
    'hero.subtitle': 'Comparez les prix de partenaires de confiance et réservez vos places pour les plus grands matchs',
    'sections.competitions': 'Principales Compétitions',
    'sections.teams': 'Grandes Équipes de Club',
    'sections.national': 'Équipes Nationales',
    'sections.fixtures': 'Grands Matchs',
    'sections.venues': 'Stades Iconiques',
    'footer.competitions': 'Principales Compétitions',
    'footer.teams': 'Principales Équipes',
    'footer.fixtures': 'Grands Matchs',
    'footer.venues': 'Principaux Stades'
  },
  ar: {
    'nav.about': 'من نحن',
    'nav.privacy': 'سياسة الخصوصية',
    'nav.terms': 'الشروط والأحكام',
    'nav.login': 'تسجيل الدخول',
    'nav.register': 'التسجيل',
    'search.placeholder': 'البحث عن الفرق أو المسابقات أو الملاعب...',
    'hero.title': 'اعثر على تذاكر كرة القدم المثالية',
    'hero.subtitle': 'قارن الأسعار من الشركاء الموثوقين واحجز مقاعدك لأكبر المباريات',
    'sections.competitions': 'أهم المسابقات',
    'sections.teams': 'الفرق الكبيرة',
    'sections.national': 'المنتخبات الوطنية',
    'sections.fixtures': 'المباريات الكبرى',
    'sections.venues': 'الملاعب الأيقونية',
    'footer.competitions': 'أهم المسابقات',
    'footer.teams': 'أهم الفرق',
    'footer.fixtures': 'المباريات الكبرى',
    'footer.venues': 'أهم الملاعب'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    // Detect language from URL or browser preference
    const path = window.location.pathname;
    const langFromPath = path.split('/')[1];
    const detectedLang = languages.find(lang => lang.code === langFromPath);
    
    if (detectedLang) {
      setCurrentLanguage(detectedLang);
    } else {
      const browserLang = navigator.language.slice(0, 2);
      const browserLanguage = languages.find(lang => lang.code === browserLang);
      if (browserLanguage) {
        setCurrentLanguage(browserLanguage);
      }
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};