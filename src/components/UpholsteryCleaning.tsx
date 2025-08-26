import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Droplets, Shield, Zap, Clock, Star, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import upholsteryImage from "@/assets/home-cleaning.jpg";
import officeImage from "@/assets/office-cleaning.jpg";
import deepImage from "@/assets/deep-cleaning.jpg";
import CTA from "./CTA";

export const UpholsteryCleaning = () => {
  const { t } = useTranslation();
  const services = t('upholstery.services', { returnObjects: true });

  const processRaw = t('upholstery.process', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const process = processRaw.map((item, index) => ({
    ...item,
    step: `0${index + 1}`,
  }));

  const testimonials = [
    {
      name: "Maria Ionescu",
      text: "Canapeaua mea din piele arăta ca nouă după serviciul lor!",
      rating: 5,
      service: "Canapea din piele"
    },
    {
      name: "Alexandru Popescu",
      text: "Covorul persian a fost restaurat perfect. Recomand!",
      rating: 5,
      service: "Covor persian"
    },
    {
      name: "Elena Mihai",
      text: "Servicii profesionale pentru mobilierul de birou.",
      rating: 5,
      service: "Mobilier birou"
    }
  ];

  const whyChooseUsList = t('upholstery.whyChooseUsList', { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <section id="upholstery-cleaning" className="section-bg overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-6 border-main-green text-main-green">
            {t('upholstery.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-gill-sans font-bold mb-6 text-main-green">
            {t('upholstery.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-doxent-light">
            {t('upholstery.subtitle')}
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="animate-slide-in-left">
            <div className="relative">
              <img
                src={upholsteryImage}
                alt="Curățenie tapițerie profesională"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-2 md:p-4 bg-main-green/5 rounded-xl border border-main-green/20">
                <Droplets className="w-8 h-8 text-main-green mx-auto mb-2" />
                <div className="text-xs md:text-sm font-semibold text-main-green font-gill-sans">{t('upholstery.efficiency')}</div>
                <div className="text-xs text-muted-foreground font-doxent-light">{t('upholstery.efficiencyDesc')}</div>
              </div>
              <div className="text-center p-2 md:p-4 bg-main-green/5 rounded-xl border border-main-green/20">
                <Shield className="w-8 h-8 text-main-green mx-auto mb-2" />
                <div className="text-xs md:text-sm font-semibold text-main-green font-gill-sans">{t('upholstery.ecoFriendly')}</div>
                <div className="text-xs text-muted-foreground font-doxent-light">{t('upholstery.ecoFriendlyDesc')}</div>
              </div>
              <div className="text-center p-2 md:p-4 bg-main-green/5 rounded-xl border border-main-green/20">
                <Zap className="w-8 h-8 text-main-green mx-auto mb-2" />
                <div className="text-xs md:text-sm font-semibold text-main-green font-gill-sans">{t('upholstery.fastDrying')}</div>
                <div className="text-xs text-muted-foreground font-doxent-light">{t('upholstery.fastDryingDesc')}</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right flex flex-col justify-between">
            <div className="hidden md:block mb-8">
              <h3 className="text-3xl font-gill-sans font-bold mb-6 text-main-green text-center md:text-left">
                {t('upholstery.whyChooseUs')}
              </h3>
              <div className="space-y-4">
                {whyChooseUsList.map((item, index) => (
                  <div key={index} className="flex flex-col items-center md:flex-row md:items-start gap-4 p-4 bg-background rounded-xl border border-main-green/20 text-center md:text-left">
                    <CheckCircle className="w-6 h-6 text-main-green flex-shrink-0 mt-1 md:mt-1 md:mr-0" />
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

            <Button asChild size="lg" className="w-full bg-main-green hover:bg-main-green/90 text-white font-gill-sans">
              <a href="tel:+37369971222">
                <span>{t('upholstery.requestEvaluation')}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>


        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-gill-sans font-bold mb-4 text-main-green">{t('upholstery.ourProcess')}</h3>
            <p className="text-muted-foreground font-doxent-light max-w-2xl mx-auto">
              {t('upholstery.processSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card
                key={index}
                className="text-center border-main-green/20 hover:shadow-lg transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-3xl font-gill-sans font-bold text-main-green mb-2 flex justify-center items-center gap-2">
                    <p>{step.step}</p>
                  </div>

                  <h4 className="font-gill-sans font-semibold text-lg mb-3">{step.title}</h4>
                  <p className="text-sm text-muted-foreground font-doxent-light">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
      </div>
      <CTA heading={t('upholstery.readyToRestore')} />
    </section>
  );
}; 