import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Sparkles, Star, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";

export const WindowCleaning = () => {
  const { t } = useTranslation();
  
  const plans = [
    {
      title: t('windowCleaning.twoSection'),
      price: "300",
      period: t('windowCleaning.currency'),
      features: t('windowCleaning.twoSectionFeatures', { returnObjects: true }),
      popular: false
    },
    {
      title: t('windowCleaning.threeSection'),
      price: "400",
      period: t('windowCleaning.currency'),
      features: t('windowCleaning.threeSectionFeatures', { returnObjects: true }),
      popular: true
    },
    {
      title: t('windowCleaning.fiveSection'),
      price: "600",
      period: t('windowCleaning.currency'),
      features: t('windowCleaning.fiveSectionFeatures', { returnObjects: true }),
      popular: false
    },
    {
      title: t('windowCleaning.panoramic'),
      price: t('windowCleaning.individualPrice'),
      period: "",
      features: t('windowCleaning.panoramicFeatures', { returnObjects: true }),
      popular: false
    }
  ];

  const features = t('windowCleaning.features', { returnObjects: true }) as string[];

  return (
    <section id="window-cleaning" className="py-20 hero-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2">
            <Badge variant="outline" className="mb-4 border-main-green text-main-green">
              {t('windowCleaning.badge')}
            </Badge>
          </div>
          <h2 className="text-4xl lg:text-5xl font-gill-sans font-bold mb-6 text-main-green">
            {t('windowCleaning.title')}
          </h2>
          <p className="text-lg text-main-green/80 font-gill-sans italic">
            — {t('windowCleaning.tagline')}
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-doxent-light">
            {t('windowCleaning.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-doxent-light">
            {t('windowCleaning.description')}
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-gill-sans font-bold text-center mb-8 text-main-green">
            {t('windowCleaning.whyChooseUs')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-white/80 rounded-xl hover:bg-white/90 transition-all duration-300 border-2 border-main-green/70">
                <div className="w-8 h-8 rounded-lg bg-main-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-5 h-5 text-main-green" />
                </div>
                <span className="font-doxent-light text-gray-700 leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-12">
          <h3 className="text-3xl font-gill-sans font-bold text-center mb-12 text-main-green">
            {t('windowCleaning.pricingTitle')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={plan.title} 
                className={`relative border-main-green/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in hover:border-main-green/40 text-center ${
                  plan.popular ? 'border-main-green/50 ring-2 ring-main-green/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-main-green text-white">
                    {t('windowCleaning.popular')}
                  </Badge>
                )}
                
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h4 className="font-gill-sans font-semibold text-lg mb-3 mt-2">{plan.title}</h4>
                    <div className="flex items-baseline justify-center gap-1">
                      {plan.price === t('windowCleaning.individualPrice') ? (
                        <span className="text-xl font-bold text-main-green font-gill-sans">{plan.price}</span>
                      ) : (
                        <>
                          <span className="text-2xl font-bold text-main-green font-gill-sans">{plan.price}</span>
                          <span className="text-sm text-muted-foreground font-doxent-light">{plan.period}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature: string) => (
                      <div key={feature} className="flex items-start justify-center md:justify-start gap-3">
                        <CheckCircle className="w-4 h-4 text-main-green flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-doxent-light text-center md:text-left">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    asChild
                    variant={plan.popular ? "default" : "outline"} 
                    className={`w-full font-gill-sans mt-auto ${plan.popular ? 'bg-main-green hover:bg-main-green/90 text-white' : 'border-main-green text-main-green hover:bg-main-green hover:text-white'}`}
                  >
                    <a href="tel:+37369971222">
                      {t('windowCleaning.choosePackage')}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Minimum Order Notice */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-main-green/10 text-main-green px-6 py-3 rounded-full border border-main-green/20">
            <span className="text-lg">📌</span>
            <span className="font-medium font-doxent-light">
              {t('windowCleaning.minimumOrder')}
            </span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-main-green/5 to-main-green/10 rounded-2xl p-8">
          <p className="text-lg text-gray-700 font-doxent-light leading-relaxed max-w-2xl mx-auto mb-6">
            {t('windowCleaning.cta')}
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-main-green hover:bg-main-green/90 text-white font-gill-sans px-8 py-3 text-xl"
          >
            <a href="tel:+37369971222">
              {t('windowCleaning.choosePackage')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
