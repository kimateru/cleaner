import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Droplets, Shield, Zap } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import upholsteryImage from "@/assets/home-cleaning.jpg";

export const UpholsteryCleaning = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: "Canapele și Fotolii",
      price: "200-500 MDL",
      description: "Curățenie profundă pentru toate tipurile de țesături"
    },
    {
      title: "Covoare și Mochete",
      price: "15-25 MDL/m²",
      description: "Eliminarea petelor și mirosurilor neplăcute"
    },
    {
      title: "Draperii și Perdele",
      price: "150-300 MDL",
      description: "Curățenie delicată pentru materiale fine"
    },
    {
      title: "Saltele",
      price: "300-600 MDL",
      description: "Dezinfectare și eliminarea acarienilor"
    },
    {
      title: "Scaune de Birou",
      price: "100-200 MDL",
      description: "Întreținere profesională mobilier de birou"
    },
    {
      title: "Covoare Persane",
      price: "30-50 MDL/m²",
      description: "Tratament special pentru covoare valoroase"
    }
  ];

  const beforeAfterResults = [
    {
      title: "Canapea din Piele",
      problem: "Pete de grăsime și uzură zilnică",
      result: "Restaurare completă aspect și culoare",
      image: upholsteryImage
    },
    {
      title: "Covor Persian",
      problem: "Pete vechi de vin și mirosuri",
      result: "Eliminare completă pete și parfum fresh",
      image: upholsteryImage
    }
  ];

  const process = [
    {
      step: "1",
      title: "Evaluare",
      description: "Inspectăm materialul și identificăm petele"
    },
    {
      step: "2", 
      title: "Pre-tratare",
      description: "Aplicăm soluții specializate pentru pete"
    },
    {
      step: "3",
      title: "Curățenie",
      description: "Folosim echipamente profesionale cu abur"
    },
    {
      step: "4",
      title: "Uscare",
      description: "Accelerăm procesul cu ventilatoare speciale"
    }
  ];

  return (
    <section id="upholstery-cleaning" className="py-20 hero-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-success text-success">
            Specialiști în Tapițerie
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            {t('upholsteryCleaningTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('upholsteryCleaningDesc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-in-left">
            <img 
              src={upholsteryImage} 
              alt="Curățenie tapițerie profesională"
              className="w-full h-96 object-cover rounded-2xl shadow-xl mb-8"
              loading="lazy"
            />

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-success/5 rounded-xl">
                <Droplets className="w-8 h-8 text-success mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Eliminare Pete</h4>
                <p className="text-xs text-muted-foreground mt-1">99% eficiență</p>
              </div>
              <div className="text-center p-4 bg-success/5 rounded-xl">
                <Shield className="w-8 h-8 text-success mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Dezinfectare</h4>
                <p className="text-xs text-muted-foreground mt-1">Anti-bacterian</p>
              </div>
              <div className="text-center p-4 bg-success/5 rounded-xl">
                <Zap className="w-8 h-8 text-success mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Uscare Rapidă</h4>
                <p className="text-xs text-muted-foreground mt-1">2-4 ore</p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-heading font-semibold mb-6">Servicii și Prețuri</h3>
            <div className="space-y-4 mb-8">
              {services.map((service) => (
                <Card key={service.title} className="border-border/50">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{service.title}</h4>
                      <span className="text-success font-bold">{service.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-muted/50 border-success/20">
              <CardContent className="p-6">
                <h4 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  Garanție și Beneficii
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Garanție 30 zile pentru serviciu</li>
                  <li>• Produse eco-friendly, sigure pentru copii și animale</li>
                  <li>• Echipament profesional cu tehnologie cu abur</li>
                  <li>• Personal certificat și cu experiență</li>
                  <li>• Evaluare și ofertă gratuită la domiciliu</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">Procesul Nostru de Lucru</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step) => (
              <Card key={step.step} className="text-center border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-success text-success-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-heading font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="animate-fade-in">
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">Rezultate Înainte și După</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {beforeAfterResults.map((result, index) => (
              <Card key={index} className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300">
                <img 
                  src={result.image} 
                  alt={result.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <h4 className="font-heading font-semibold text-lg mb-3">{result.title}</h4>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium text-destructive">Problemă: </span>
                      <span className="text-sm text-muted-foreground">{result.problem}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-success">Rezultat: </span>
                      <span className="text-sm text-muted-foreground">{result.result}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-success hover:bg-success/90 text-success-foreground">
              Solicită Evaluare Gratuită
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};