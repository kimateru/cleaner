import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Home, Zap, Shield, Clock, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import CTA from "./CTA";

export const GeneralCleaning = () => {
  const { t } = useTranslation();

  const generalCleaningList = t('generalCleaning.services', { returnObjects: true }) as string[];
  const generalCleaningTypesList = t('generalCleaning.types.list', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const generalCleaningFeatures = t('generalCleaning.features', { returnObjects: true }) as Array<{ title: string; description: string }>;

  const icons = [Home, Zap, Shield, Clock, Award, CheckCircle];

  return (
    <section id="general-cleaning" className="bg-gradient-to-br from-slate-50 via-white to-main-green/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        {/* Hero Section with Centered Layout */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge variant="outline" className="mb-4 border-main-green text-main-green">
              {t('generalCleaning.badge')}
            </Badge>
          </div>
          <h2 className="text-4xl lg:text-5xl font-gill-sans font-bold mb-6 text-main-green">
            {t('generalCleaning.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-doxent-light mb-10">
            {t('generalCleaning.subtitle')}
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {generalCleaningFeatures.map((feature, index) => (
              <div key={index} className="inline-flex items-center gap-2 bg-main-green/10 text-main-green px-6 py-3 rounded-full border border-main-green/20 hover:bg-main-green/15 transition-colors">
                <Zap className="w-5 h-5" />
                <span className="font-medium font-doxent-light">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content - Horizontal Layout */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-gill-sans font-bold text-main-green mb-4">
              {t('generalCleaning.types.title')}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-doxent-light">
              {t('generalCleaning.types.subtitle')}
            </p>
          </div>

          {/* Room Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {generalCleaningTypesList.map((item, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm border-2 border-main-green/20">
                  <CardContent className="p-8 text-center">
                    <h4 className="font-gill-sans font-bold text-xl mb-4 text-gray-800 group-hover:text-main-green transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground font-doxent-light leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Services List - Modern Horizontal Cards */}
        <div className="bg-gradient-to-r from-main-green/5 to-main-green/10 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-gill-sans font-bold text-main-green mb-4">
              {t('generalCleaning.ourServices')}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {generalCleaningList.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-main-green/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-main-green" />
                </div>
                <span className="font-gill-sans font-semibold text-gray-800 text-lg">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTA heading={t('about.cta')}/>
    </section>
  );
};
