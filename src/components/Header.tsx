import { Button } from "@/components/ui/button";
import { Sparkles, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
  const { t } = useTranslation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-main-green/20">
      <div className="container mx-auto px-2 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 animate-fade-in">
          <img
            src="/logo-big.svg"
            alt="Cleaner Logo"
            className="w-24 h-24 object-contain"
            loading="lazy"
          />
      </div>

        <nav className="hidden xl:flex items-center gap-2 xl:gap-5 animate-fade-in">
          <a href="#home" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm 2xl:text-base">{t('nav.home')}</a>
          <a href="#about" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm 2xl:text-base">{t('nav.about')}</a>
          <a href="#general-cleaning" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm 2xl:text-base">{t('nav.generalCleaning')}</a>
          <a href="#deep-cleaning" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm 2xl:text-base">{t('nav.deepCleaning')}</a>
          <a href="#regular-cleaning" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm 2xl:text-base">{t('nav.regularCleaning')}</a>
          <a href="#upholstery-cleaning" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm 2xl:text-base">{t('nav.upholsteryCleaning')}</a>
          <a href="#window-cleaning" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm 2xl:text-base">{t('nav.windowCleaning')}</a>
          <a href="#before-after" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm 2xl:text-base">{t('nav.beforeAfter')}</a>
          <a href="#clients" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm 2xl:text-base">{t('nav.clients')}</a>
          <a href="#contact" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm 2xl:text-base">{t('nav.contact')}</a>
        </nav>

        <div className="flex items-center gap-4 animate-fade-in">
          <LanguageSwitcher />
          <Button variant="default" size="sm" className="bg-main-green hover:bg-main-green/90 text-white font-gill-sans">
            <Phone className="w-4 h-4 text-white" />
            <a href="tel:+37369971222" className="text-sm font-medium font-doxent-light">
              {t('common.phone')}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};