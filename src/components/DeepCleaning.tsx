import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Sparkles } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import deepImage1 from "@/assets/deep-cleaning.jpg";

export const DeepCleaning = () => {
  const { t } = useTranslation();

  const services = [
    "Curățenie după construcție",
    "Curățenie pentru mutare",
    "Curățenie de primăvară",
    "Dezinfectare completă",
    "Curățenie post-renovare",
    "Curățenie industrială"
  ];

  const beforeAfter = [
    {
      title: "Apartament după renovare",
      description: "Curățenie completă după renovarea unei bucătării moderne",
      image: deepImage1
    },
    {
      title: "Birou după construcție", 
      description: "Pregătire spațiu de lucru pentru deschidere",
      image: deepImage1
    }
  ];

  return (
    <section id="deep-cleaning" className="py-20 hero-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-success text-success">
            Serviciu Premium
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            {t('deepCleaningTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('deepCleaningDesc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-in-left">
            <img 
              src={deepImage1} 
              alt="Curățenie profundă - rezultate profesionale"
              className="w-full h-96 object-cover rounded-2xl shadow-xl mb-6"
              loading="lazy"
            />
            
            <Card className="border-success/20 bg-success/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">Rezultate Garantate</h3>
                    <p className="text-sm text-muted-foreground">100% satisfacție sau refacem gratuit</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-heading font-semibold mb-6">Ce Include Serviciul</h3>
            <div className="grid gap-4 mb-8">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="font-medium">{service}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-xl p-6 mb-8">
              <h4 className="font-heading font-semibold text-lg mb-4">Detalii Preț</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Apartament 1-2 camere</span>
                  <span className="font-semibold">1,500-2,500 MDL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Apartament 3-4 camere</span>
                  <span className="font-semibold">2,500-4,000 MDL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Casă până la 150m²</span>
                  <span className="font-semibold">4,000-6,000 MDL</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm">4-8 ore</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Asigurare inclusă</span>
              </div>
            </div>

            <Button size="lg" className="w-full bg-success hover:bg-success/90 text-success-foreground">
              Solicită Evaluare Gratuită
            </Button>
          </div>
        </div>

        <div className="animate-fade-in">
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">Lucrări Realizate</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfter.map((project, index) => (
              <Card key={index} className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <h4 className="font-heading font-semibold text-lg mb-2">{project.title}</h4>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};