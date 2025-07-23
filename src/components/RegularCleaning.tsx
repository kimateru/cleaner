import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Star, Home } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import homeImage from "@/assets/home-cleaning.jpg";
import officeImage from "@/assets/office-cleaning.jpg";

export const RegularCleaning = () => {
  const { t } = useTranslation();

  const plans = [
    {
      title: "Plan Săptămânal",
      price: "800-1,200",
      period: "MDL/vizită",
      features: [
        "Curățenie completă săptămânală",
        "Aspirare și ștergere",
        "Curățenie băi și bucătărie",
        "Schimbare așternuturi",
        "Reducere 15% pentru contract anual"
      ],
      popular: false
    },
    {
      title: "Plan Bi-săptămânal",
      price: "1,000-1,500",
      period: "MDL/vizită",
      features: [
        "Curățenie la 2 săptămâni",
        "Curățenie profundă periodică",
        "Întreținere regulată",
        "Flexibilitate program",
        "Cea mai populară opțiune"
      ],
      popular: true
    },
    {
      title: "Plan Lunar", 
      price: "1,500-2,200",
      period: "MDL/vizită",
      features: [
        "Curățenie lunară intensivă",
        "Perfect pentru birouri",
        "Curățenie geamuri inclusă",
        "Fără contract pe termen lung",
        "Ideal pentru întreținere"
      ],
      popular: false
    }
  ];

  const workSites = [
    {
      title: "Apartament Central Chișinău",
      type: "Apartament 3 camere",
      frequency: "Săptămânal",
      image: homeImage,
      description: "Întreținere regulată pentru familie tânără"
    },
    {
      title: "Birou IT Company",
      type: "Spațiu comercial",
      frequency: "Bi-săptămânal", 
      image: officeImage,
      description: "Menținerea curățeniei într-un mediu profesional"
    }
  ];

  return (
    <section id="regular-cleaning" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-success text-success">
            Cel Mai Popular
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            {t('regularCleaningTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('regularCleaningDesc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={plan.title} 
              className={`relative border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                plan.popular ? 'border-success/50 ring-2 ring-success/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-success text-success-foreground">
                  Recomandat
                </Badge>
              )}
              
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="font-heading font-semibold text-xl mb-2">{plan.title}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-success">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className={`w-full ${plan.popular ? 'bg-success hover:bg-success/90 text-success-foreground' : 'border-success text-success hover:bg-success/10'}`}
                >
                  Alege Planul
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="animate-fade-in">
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">Locații Unde Lucrăm</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {workSites.map((site, index) => (
              <Card key={index} className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300">
                <img 
                  src={site.image} 
                  alt={site.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="w-4 h-4 text-success" />
                    <span className="text-sm text-muted-foreground">{site.type}</span>
                  </div>
                  <h4 className="font-heading font-semibold text-lg mb-2">{site.title}</h4>
                  <p className="text-muted-foreground mb-3">{site.description}</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-success" />
                    <span className="text-sm font-medium">Frecvență: {site.frequency}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-success/5 border-success/20">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-success" />
                <Star className="w-6 h-6 text-success" />
                <Star className="w-6 h-6 text-success" />
                <Star className="w-6 h-6 text-success" />
                <Star className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Garantăm Calitatea</h3>
              <p className="text-muted-foreground mb-6">
                Dacă nu ești mulțumit cu serviciul nostru, îl refacem gratuit în 24 de ore.
              </p>
              <Button size="lg" className="bg-success hover:bg-success/90 text-success-foreground">
                Începe Abonamentul
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};