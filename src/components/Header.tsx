import { Button } from "@/components/ui/button";
import { Sparkles, Phone, Languages } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export const Header = () => {
  const { language, setLanguage, t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-success rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-success-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-heading font-bold text-foreground">Cleaner</h1>
            <p className="text-xs text-muted-foreground">{t('heroSubtitle')}</p>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-6">
          <a href="#home" className="text-foreground hover:text-success transition-colors font-medium">{t('home')}</a>
          <a href="#about" className="text-foreground hover:text-success transition-colors font-medium">{t('about')}</a>
          <a href="#deep-cleaning" className="text-foreground hover:text-success transition-colors font-medium">{t('deepCleaning')}</a>
          <a href="#regular-cleaning" className="text-foreground hover:text-success transition-colors font-medium">{t('regularCleaning')}</a>
          <a href="#upholstery-cleaning" className="text-foreground hover:text-success transition-colors font-medium">{t('upholsteryCleaning')}</a>
          <a href="#clients" className="text-foreground hover:text-success transition-colors font-medium">{t('clients')}</a>
          <a href="#contact" className="text-foreground hover:text-success transition-colors font-medium">{t('contact')}</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === 'ro' ? 'ru' : 'ro')}
            className="flex items-center gap-1 px-2 py-1 rounded-md border border-border hover:bg-muted transition-colors"
          >
            <Languages className="w-4 h-4" />
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
          </button>
          
          <div className="hidden sm:flex items-center gap-2 text-foreground">
            <Phone className="w-4 h-4 text-success" />
            <span className="text-sm font-medium">+373 (60) 123-456</span>
          </div>
          <Button variant="default" size="sm" className="bg-success hover:bg-success/90 text-success-foreground">
            {t('freeQuote')}
          </Button>
        </div>
      </div>
    </header>
  );
};