import { Badge } from "@/components/ui/badge";
import { CheckCircle,  Sparkles, Star,} from "lucide-react";
import { useTranslation } from "react-i18next";
import CTA from "./CTA";

export const DeepCleaning = () => {
  const { t } = useTranslation();

  const deepCleaningList = t('deepCleaning.list', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const deepCleaningTypesList = t('deepCleaning.types.list', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const deepCleaningFeatures = t('deepCleaning.features', { returnObjects: true }) as Array<{ title: string; description: string; showRating?: boolean }>;

  return (
    <section id="deep-cleaning" className="py-20 hero-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-main-green text-main-green">
            {t('deepCleaning.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-gill-sans font-bold mb-6 text-main-green">
            {t('deepCleaning.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-doxent-light">
            {t('deepCleaning.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-3 animate-slide-in-left flex flex-col text-center lg:text-left">

            <div className="">
              <h3 className="text-2xl font-gill-sans font-semibold mb-6 text-main-green text-center lg:text-left">{t('deepCleaning.types.title')}</h3>
              <div className="space-y-4">
                {deepCleaningTypesList.map((item, index) => (
                  <div key={index} className="flex flex-col items-center lg:flex-row lg:items-start gap-4 p-4 bg-main-green/5 rounded-xl border border-main-green/10 text-center lg:text-left">
                    <Sparkles className="w-6 h-6 text-main-green flex-shrink-0 mt-1 lg:mt-1 lg:mr-0" />
                    <div>
                      <h4 className="font-gill-sans font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground font-doxent-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-grow mt-6">
              <div className="space-y-4">
                {deepCleaningFeatures.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-main-green/10 to-secondary-green/5 rounded-xl p-6 border border-main-green/10">
                    <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3">
                      <div className="w-12 h-12 rounded-xl bg-main-green/10 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-main-green" />
                      </div>
                      <div>
                        <h3 className="font-gill-sans font-semibold text-lg text-main-green mb-2">{feature.title}</h3>
                        {feature.showRating ? (
                          <div className="flex items-center justify-center sm:justify-start gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="ml-2 text-sm font-medium font-doxent-light">4.9/5 {t('deepCleaning.rating')}</span>
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground font-doxent-light">{feature.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 animate-slide-in-right flex flex-col justify-between text-center lg:text-left">
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-2xl font-gill-sans font-semibold mb-6 text-main-green">{t('deepCleaning.ourServices')}</h3>
              <div className="flex flex-col justify-between h-full  gap-4">
                {deepCleaningList.map((item, index) => (
                  <div key={index} className="flex flex-col items-center lg:flex-row lg:items-start gap-4 p-4 bg-background rounded-xl border border-main-green/20 text-center lg:text-left">
                    <CheckCircle className="w-6 h-6 text-main-green flex-shrink-0 mt-1 lg:mt-1 lg:mr-0" />
                    <div>
                      <h4 className="font-gill-sans font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground font-doxent-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA heading={t('about.cta')} />
    </section>
  );
};