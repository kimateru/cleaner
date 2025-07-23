import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Star, Home } from "lucide-react";
import homeImage from "@/assets/home-cleaning.jpg";
import officeImage from "@/assets/office-cleaning.jpg";

export const RegularCleaning = () => {
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
          <Badge variant="outline" className="mb-4 border-main-green text-main-green">
            Cel Mai Popular
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-gill-sans font-bold mb-6 text-main-green">
            Curățenie Regulată
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-doxent-light">
            Servicii de întreținere săptămânală sau lunară pentru case și birouri. Menținem spațiul mereu curat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={plan.title}
              className={`relative border-main-green/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in hover:border-main-green/40 ${plan.popular ? 'border-main-green/50 ring-2 ring-main-green/20' : ''
                }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-main-green text-white">
                  Recomandat
                </Badge>
              )}

              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="font-gill-sans font-semibold text-xl mb-2">{plan.title}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-main-green font-gill-sans">{plan.price}</span>
                    <span className="text-sm text-muted-foreground font-doxent-light">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-main-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-doxent-light">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full font-gill-sans ${plan.popular ? 'bg-main-green hover:bg-main-green/90 text-white' : 'border-main-green text-main-green hover:bg-main-green/10'}`}
                >
                  Alege Planul
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};