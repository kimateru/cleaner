import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, CheckCircle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Award,
      title: t('experience'),
      description: t('experienceText')
    },
    {
      icon: Shield,
      title: t('quality'),
      description: t('qualityText')
    },
    {
      icon: Users,
      title: t('trust'),
      description: t('trustText')
    }
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('aboutDescription')}
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-success">
                {t('ourMission')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('missionText')}
              </p>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="font-medium">Licențiați și asigurați</span>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="font-medium">Echipamente profesionale</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="font-medium">Produse ecologice</span>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-center">
                {t('whyChooseUs')}
              </h3>
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <Card key={feature.title} className="border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-success" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-lg mb-1">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};