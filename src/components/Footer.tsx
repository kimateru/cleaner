import { Sparkles, Facebook, Twitter, Instagram, Linkedin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="footer-bg text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 animate-fade-in text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-14 h-14 bg-success rounded-xl flex items-center justify-center p-2">
                <img 
                  src="/logo2.svg" 
                  alt="Cleaner Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Cleaner</h3>
                <p className="text-xs text-background/70">Servicii de Curățenie</p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-success transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-success transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-success transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#deep-cleaning" className="hover:text-success transition-colors">
                  {t('nav.deepCleaning')}
                </a>
              </li>
              <li>
                <a href="#regular-cleaning" className="hover:text-success transition-colors">
                  {t('nav.regularCleaning')}
                </a>
              </li>
              <li>
                <a href="#upholstery-cleaning" className="hover:text-success transition-colors">
                  {t('nav.upholsteryCleaning')}
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-success transition-colors">
                  {t('nav.beforeAfter')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="animate-fade-in text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#about" className="hover:text-success transition-colors">
                  {t('footer.aboutUs')}
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-success transition-colors">
                  {t('footer.clients')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-success transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-background/70">
              <li>{t('footer.phone')}</li>
              <li>{t('footer.email')}</li>
              <li dangerouslySetInnerHTML={{ __html: t('footer.address') }}></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70 animate-fade-in">
          <p>&copy; 2024 Cleaner. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};