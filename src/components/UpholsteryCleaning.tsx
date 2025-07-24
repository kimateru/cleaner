import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Droplets, Shield, Zap, Clock, Star, ArrowRight } from "lucide-react";
import upholsteryImage from "@/assets/home-cleaning.jpg";
import officeImage from "@/assets/office-cleaning.jpg";
import deepImage from "@/assets/deep-cleaning.jpg";

export const UpholsteryCleaning = () => {
  const services = [
    {
      title: "Canapele și Fotolii",
      price: "200-500 MDL",
      description: "Curățenie profundă pentru toate tipurile de țesături și piele",
      icon: "🛋️",
      features: ["Eliminare pete", "Dezinfectare", "Protecție țesături"]
    },
    {
      title: "Covoare și Mochete",
      price: "15-25 MDL/m²",
      description: "Restaurare completă cu echipamente profesionale",
      icon: "🏠",
      features: ["Curățare profundă", "Eliminare mirosuri", "Uscare rapidă"]
    },
    {
      title: "Draperii și Perdele",
      price: "150-300 MDL",
      description: "Tratament delicat pentru materiale fine și valoroase",
      icon: "🪟",
      features: ["Curățare delicată", "Menținere formă", "Culori vii"]
    },
    {
      title: "Saltele și Perne",
      price: "300-600 MDL",
      description: "Dezinfectare completă și eliminarea acarienilor",
      icon: "🛏️",
      features: ["Anti-acarieni", "Dezinfectare", "Igienizare completă"]
    },
    {
      title: "Mobilier de Birou",
      price: "100-300 MDL",
      description: "Întreținere profesională pentru mediul de lucru",
      icon: "💺",
      features: ["Curățare regulată", "Menținere aspect", "Durabilitate"]
    },
    {
      title: "Covoare Persane",
      price: "30-50 MDL/m²",
      description: "Tratament special pentru covoare valoroase și antice",
      icon: "🎨",
      features: ["Tehnică specială", "Conservare valoare", "Restaurare culori"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Evaluare Gratuită",
      description: "Analizăm tipul de material și gradul de murdărire",
      icon: "🔍"
    },
    {
      step: "02", 
      title: "Pre-tratament",
      description: "Aplicăm soluții speciale pentru pete și murdărie",
      icon: "🧪"
    },
    {
      step: "03",
      title: "Curățare Profundă",
      description: "Folosim echipamente cu abur și aspiration puternică",
      icon: "💨"
    },
    {
      step: "04",
      title: "Finalizare",
      description: "Aplicăm protecție și verificăm calitatea rezultatului",
      icon: "✨"
    }
  ];

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

  return (
    <section id="upholstery-cleaning" className="section-bg overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-6 border-main-green text-main-green">
            Specializare Premium
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-gill-sans font-bold mb-6 text-main-green">
            Curățenie Tapițerie
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-doxent-light">
            Redăm viața mobilierului tău cu servicii specializate de curățenie pentru tapițerie, covoare și draperii. 
            Tehnologie avansată și experiență de peste 5 ani.
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
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-gill-sans font-bold mb-2">Rezultate Garantate</h3>
                <p className="font-doxent-light">100% satisfacție sau refacem gratuit</p>
              </div>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-6 bg-main-green/5 rounded-2xl border border-main-green/20 hover:bg-main-green/10 transition-colors">
                <Droplets className="w-10 h-10 text-main-green mx-auto mb-3" />
                <h4 className="font-gill-sans font-semibold text-main-green mb-1">99% Eficiență</h4>
                <p className="text-xs text-muted-foreground font-doxent-light">Eliminare pete</p>
              </div>
              <div className="text-center p-6 bg-main-green/5 rounded-2xl border border-main-green/20 hover:bg-main-green/10 transition-colors">
                <Shield className="w-10 h-10 text-main-green mx-auto mb-3" />
                <h4 className="font-gill-sans font-semibold text-main-green mb-1">Eco-Friendly</h4>
                <p className="text-xs text-muted-foreground font-doxent-light">Produse sigure</p>
              </div>
              <div className="text-center p-6 bg-main-green/5 rounded-2xl border border-main-green/20 hover:bg-main-green/10 transition-colors">
                <Zap className="w-10 h-10 text-main-green mx-auto mb-3" />
                <h4 className="font-gill-sans font-semibold text-main-green mb-1">Uscare Rapidă</h4>
                <p className="text-xs text-muted-foreground font-doxent-light">2-4 ore</p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-3xl font-gill-sans font-bold mb-6 text-main-green text-center md:text-left">
                De Ce Să Ne Alegeți?
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col items-center md:flex-row md:items-start gap-4 p-4 bg-background rounded-xl border border-main-green/20 text-center md:text-left">
                  <CheckCircle className="w-6 h-6 text-main-green flex-shrink-0 mt-1 md:mt-1 md:mr-0" />
                  <div>
                    <h4 className="font-gill-sans font-semibold mb-1">Echipamente Profesionale</h4>
                    <p className="text-sm text-muted-foreground font-doxent-light">
                      Tehnologie cu abur de ultimă generație pentru rezultate perfecte
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center md:flex-row md:items-start gap-4 p-4 bg-background rounded-xl border border-main-green/20 text-center md:text-left">
                  <CheckCircle className="w-6 h-6 text-main-green flex-shrink-0 mt-1 md:mt-1 md:mr-0" />
                  <div>
                    <h4 className="font-gill-sans font-semibold mb-1">Experiență de 5+ Ani</h4>
                    <p className="text-sm text-muted-foreground font-doxent-light">
                      Peste 1000 de piese de mobilier restaurate cu succes
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center md:flex-row md:items-start gap-4 p-4 bg-background rounded-xl border border-main-green/20 text-center md:text-left">
                  <CheckCircle className="w-6 h-6 text-main-green flex-shrink-0 mt-1 md:mt-1 md:mr-0" />
                  <div>
                    <h4 className="font-gill-sans font-semibold mb-1">Garanție Completă</h4>
                    <p className="text-sm text-muted-foreground font-doxent-light">
                      30 de zile garanție pentru toate serviciile noastre
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-main-green/10 to-secondary-green/5 border-main-green/20">
              <CardContent className="p-6">
                <div className="flex flex-col items-center md:flex-row md:items-center gap-3 mb-4 text-center md:text-left">
                  <Clock className="w-8 h-8 text-main-green" />
                  <div>
                    <h4 className="font-gill-sans font-bold text-lg text-main-green">Program Flexibil</h4>
                    <p className="text-sm text-muted-foreground font-doxent-light">Disponibili 7 zile din 7</p>
                  </div>
                </div>
                <Button size="lg" className="w-full bg-main-green hover:bg-main-green/90 text-white font-gill-sans">
                  <span>Solicită Evaluare Gratuită</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>


        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-gill-sans font-bold mb-4 text-main-green">Procesul Nostru de Lucru</h3>
            <p className="text-muted-foreground font-doxent-light max-w-2xl mx-auto">
              Urmăm un proces structurat pentru a garanta cele mai bune rezultate
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
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-3xl font-gill-sans font-bold text-main-green mb-2">{step.step}</div>
                  <h4 className="font-gill-sans font-semibold text-lg mb-3">{step.title}</h4>
                  <p className="text-sm text-muted-foreground font-doxent-light">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <Card className="bg-gradient-to-r from-main-green to-secondary-green text-white w-full mx-auto">
            <CardContent className="p-12">
              <h3 className="text-4xl font-gill-sans font-bold mb-4">Gata să Îți Restaurezi Mobilierul?</h3>
              <p className="text-xl font-doxent-light mb-2
               opacity-90">
                Contactează-ne astăzi pentru o evaluare gratuită și redă strălucirea mobilierului tău
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <p className="text-3xl font-doxent-light mb-4 opacity-90">Sună Acum:</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel: " className="bg-white text-main-green font-gill-sans text-lg transition-all duration-300 w-full md:w-[300px] rounded-xl py-2 px-4 hover:scale-105">
                  📞 +373 (60) 123-456
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}; 