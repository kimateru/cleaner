import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles, Clock, Check } from "lucide-react";

interface SectionCTAProps {
  variant?: 'default' | 'highlight' | 'feature';
  ctaKey: keyof typeof ctaKeys;
  className?: string;
  features?: string[];
}

const ctaKeys = {
  getQuote: 'cta.getQuote',
  scheduleNow: 'cta.scheduleNow',
  contactUs: 'cta.contactUs',
  learnMore: 'cta.learnMore',
  seeResults: 'cta.seeResults',
  bookService: 'cta.bookService',
  freeConsultation: 'cta.freeConsultation',
  instantQuote: 'cta.instantQuote',
  viewPricing: 'cta.viewPricing',
  startNow: 'cta.startNow'
} as const;

export const SectionCTA = ({ 
  variant = 'default', 
  ctaKey, 
  className = '',
  features = ['Răspuns Rapid', 'Preț Competitiv', 'Calitate Garantată']
}: SectionCTAProps) => {
  const { t, i18n } = useTranslation();

  const defaultFeatures = {
    ro: ['Răspuns Rapid', 'Preț Competitiv', 'Calitate Garantată'],
    ru: ['Быстрый Ответ', 'Конкурентная Цена', 'Гарантия Качества']
  };

  const currentFeatures = i18n.language === 'ru' ? defaultFeatures.ru : defaultFeatures.ro;

  const variants = {
    default: "py-12 text-center",
    highlight: "py-16 text-center bg-gradient-to-r from-success/5 via-success/10 to-success/5",
    feature: "py-16 text-center bg-gradient-to-b from-white to-success/5 dark:from-background dark:to-success/5"
  };

  return (
    <div className={`${variants[variant]} ${className} relative overflow-hidden`}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-success/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-success/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {variant === 'feature' && (
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-success" />
              <span className="text-success font-semibold">
                {i18n.language === 'ru' ? 'Премиум Сервис' : 'Serviciu Premium'}
              </span>
            </div>
          )}

          <div className="flex flex-col items-center gap-8">
            <Button 
              variant="cta" 
              size="xl"
              className="group relative"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {t(ctaKeys[ctaKey])}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>

            {/* Quick Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              {currentFeatures.map((feature, index) => (
                <div 
                  key={feature}
                  className="flex items-center justify-center gap-2 text-muted-foreground"
                >
                  <Check className="w-4 h-4 text-success" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Response Time Indicator */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <Clock className="w-4 h-4 text-success" />
              <span>
                {i18n.language === 'ru' 
                  ? 'Среднее время ответа: 15 минут'
                  : 'Timp mediu de răspuns: 15 minute'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};