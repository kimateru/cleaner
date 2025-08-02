import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import CTA from "./CTA";

export const About = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Award,
      title: t('about.experience'),
      description: t('about.experienceDesc')
    },
    {
      icon: Shield,
      title: t('about.quality'),
      description: t('about.qualityDesc')
    },
    {
      icon: Users,
      title: t('about.trust'),
      description: t('about.trustDesc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 mb-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 animate-fade-in text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-gill-sans font-bold mb-6 text-main-green">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-doxent-light">
              {t('about.description')}
            </p>
            
            <div className="md:mb-8">
              <h3 className="text-2xl font-gill-sans font-semibold mb-4 text-main-green">
                {t('about.mission')}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-doxent-light">
                {t('about.missionDesc')}
              </p>
            </div>

            <div className="hidden md:block space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-3 p-3 bg-main-green/5 rounded-lg border border-main-green/10 hover:bg-main-green/10 transition-colors duration-200">
                <CheckCircle className="w-5 h-5 text-main-green flex-shrink-0" />
                <span className="font-medium font-doxent-light text-gray-700">
                  {t('about.licensed')}
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 p-3 bg-main-green/5 rounded-lg border border-main-green/10 hover:bg-main-green/10 transition-colors duration-200">
                <CheckCircle className="w-5 h-5 text-main-green flex-shrink-0" />
                <span className="font-medium font-doxent-light text-gray-700">
                  {t('about.equipment')}
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 p-3 bg-main-green/5 rounded-lg border border-main-green/10 hover:bg-main-green/10 transition-colors duration-200">
                <CheckCircle className="w-5 h-5 text-main-green flex-shrink-0" />
                <span className="font-medium font-doxent-light text-gray-700">
                  {t('about.ecoProducts')}
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:block lg:col-span-2 animate-fade-in text-center lg:text-left">
            <h3 className="text-2xl font-gill-sans font-semibold mb-6 text-main-green">
              {t('about.whyChooseUs')}
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card key={feature.title} className="border-main-green/20 hover:shadow-lg transition-all duration-300 hover:border-main-green/40">
                  <CardContent className="p-6 flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
                    <div className="w-12 h-12 rounded-xl bg-main-green/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-main-green" />
                    </div>
                    <div>
                      <h4 className="font-gill-sans font-semibold text-lg mb-1 text-main-green">{feature.title}</h4>
                      <p className="text-muted-foreground font-doxent-light">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
        <CTA heading={t('about.cta')} />
    </section>
  );
};