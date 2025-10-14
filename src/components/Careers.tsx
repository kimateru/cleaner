import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import CTA from "./CTA";

export const Careers = () => {
  const { t } = useTranslation();

  return (
    <section id="careers" className="py-20 hero-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge variant="outline" className="mb-4 border-main-green text-main-green">
            {t('careers.badge')}
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-gill-sans font-bold mb-6 text-main-green">
            {t('careers.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-doxent-light max-w-3xl mx-auto">
            {t('careers.description')}
          </p>

          <CTA heading={t('careers.ctaHeading')} />
        </div>
      </div>
    </section>
  );
};

