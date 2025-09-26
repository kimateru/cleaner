
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Star, Home } from "lucide-react";
import { useTranslation } from "react-i18next";
import homeImage from "@/assets/home-cleaning.jpg";
import officeImage from "@/assets/office-cleaning.jpg";

export const RegularCleaning = () => {
  const { t } = useTranslation();
  
  const plans = [
    {
      title: t('regularCleaning.weekly'),
      price: "900 - 1300",
      period: t('regularCleaning.currency'),
      features: t('regularCleaning.weeklyFeatures', { returnObjects: true }),
      popular: false
    },
    {
      title: t('regularCleaning.biweekly'),
      price: "1100 - 1600",
      period: t('regularCleaning.currency'),
      features: t('regularCleaning.biweeklyFeatures', { returnObjects: true }),
      popular: true
    },
    {
      title: t('regularCleaning.monthly'),
      price: "1500-2700",
      period: t('regularCleaning.currency'),
      features: t('regularCleaning.monthlyFeatures', { returnObjects: true }),
      popular: false
    }
  ];



  return (
    <section id="regular-cleaning" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-main-green text-main-green">
            {t('regularCleaning.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-gill-sans font-bold mb-6 text-main-green">
            {t('regularCleaning.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-doxent-light">
            {t('regularCleaning.subtitle')} <span className="text-main-green font-bold">{t('regularCleaning.pricePerSquare')}</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={plan.title} 
              className={`relative border-main-green/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in hover:border-main-green/40 text-center md:text-left ${
                plan.popular ? 'border-main-green/50 ring-2 ring-main-green/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-main-green text-white">
                  {t('regularCleaning.popular')}
                </Badge>
              )}
              
              <CardContent className="p-6 flex flex-col h-full">
                <div className="text-center mb-6">
                  <h3 className="font-gill-sans font-semibold text-xl mb-2 mt-2">{plan.title}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-main-green font-gill-sans">{plan.price}</span>
                    <span className="text-sm text-muted-foreground font-doxent-light">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature: string) => (
                    <div key={feature} className="flex items-start justify-center md:justify-start gap-3">
                      <CheckCircle className="w-5 h-5 text-main-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-doxent-light text-center md:text-left">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  asChild
                  variant={plan.popular ? "default" : "outline"} 
                  className={`w-full font-gill-sans mt-auto ${plan.popular ? 'bg-main-green hover:bg-main-green/90 text-white' : 'border-main-green text-main-green hover:bg-main-green/90'}`}
                >
                  <a href="tel:+37369971222">
                    {t('regularCleaning.choosePackage')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};