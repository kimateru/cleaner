import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Sparkles, Star, Award, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import deepImage from "@/assets/deep-cleaning.jpg";

export const DeepCleaning = () => {
  const { t } = useTranslation();

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
          <div className="lg:col-span-3 animate-slide-in-left flex flex-col justify-between text-center lg:text-left">
            <div className="relative">
              <img 
                src={deepImage} 
                alt="Servicii de curățenie profundă în Chișinău"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-main-green/30 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-main-green rounded-full animate-pulse"></div>
                  <span className="font-medium text-main-green font-gill-sans">{t('deepCleaning.equipment')}</span>
                </div>
                <p className="text-sm text-muted-foreground font-doxent-light">{t('deepCleaning.equipmentDesc')}</p>
              </div>
            </div>

            <Card className="border-main-green/20 bg-gradient-to-br from-main-green/10 to-secondary-green/5 mt-6">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3">
                  <div className="w-12 h-12 rounded-xl bg-main-green/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-main-green" />
                  </div>
                  <div>
                    <h3 className="font-gill-sans font-semibold text-lg text-main-green mb-2">{t('deepCleaning.guaranteed')}</h3>
                    <div className="flex items-center justify-center sm:justify-start gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm font-medium font-doxent-light">4.9/5 {t('deepCleaning.rating')}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 animate-slide-in-right flex flex-col justify-between text-center lg:text-left">
            <div className="mb-8">
              <h3 className="text-2xl font-gill-sans font-semibold mb-6 text-main-green">{t('deepCleaning.ourServices')}</h3>
              <div className="space-y-4">
                {t('deepCleaning.services', { returnObjects: true }).map((service, index) => (
                  <div key={service} className="flex items-center justify-center lg:justify-start gap-3 p-3 bg-main-green/5 rounded-lg border border-main-green/10">
                    <CheckCircle className="w-5 h-5 text-main-green flex-shrink-0" />
                    <span className="font-doxent-light">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-main-green/5 rounded-xl border border-main-green/20">
                <Clock className="w-8 h-8 text-main-green mx-auto mb-2" />
                <div className="text-sm font-semibold text-main-green font-gill-sans">{t('deepCleaning.fast')}</div>
                <div className="text-xs text-muted-foreground font-doxent-light">{t('deepCleaning.fastDesc')}</div>
              </div>
              <div className="text-center p-4 bg-main-green/5 rounded-xl border border-main-green/20">
                <Shield className="w-8 h-8 text-main-green mx-auto mb-2" />
                <div className="text-sm font-semibold text-main-green font-gill-sans">{t('deepCleaning.safe')}</div>
                <div className="text-xs text-muted-foreground font-doxent-light">{t('deepCleaning.safeDesc')}</div>
              </div>
              <div className="text-center p-4 bg-main-green/5 rounded-xl border border-main-green/20">
                <Sparkles className="w-8 h-8 text-main-green mx-auto mb-2" />
                <div className="text-sm font-semibold text-main-green font-gill-sans">{t('deepCleaning.complete')}</div>
                <div className="text-xs text-muted-foreground font-doxent-light">{t('deepCleaning.completeDesc')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};