import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Sparkles, Star, Award, Users } from "lucide-react";
import deepImage1 from "@/assets/deep-cleaning.jpg";

export const DeepCleaning = () => {
  const services = [
    "Curățenie după construcție",
    "Curățenie pentru mutare",
    "Curățenie de primăvară",
    "Dezinfectare completă",
    "Curățenie post-renovare",
    "Curățenie industrială"
  ];

  const stats = [
    { number: "500+", label: "Proiecte Finalizate", icon: Award },
    { number: "98%", label: "Clienți Mulțumiți", icon: Users },
    { number: "24h", label: "Timp de Răspuns", icon: Clock }
  ];

  return (
    <section id="deep-cleaning" className="py-20 hero-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-main-green text-main-green">
            Serviciu Premium
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-gill-sans font-bold mb-6 text-main-green">
            Curățenie Profundă
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-doxent-light">
            Servicii intensive de curățenie pentru mutări, după construcții sau curățenie de primăvară. Rezultate garantate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-in-left flex flex-col justify-between">
            <div className="relative">
              <img 
                src={deepImage1} 
                alt="Curățenie profundă - rezultate profesionale"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-gill-sans font-bold">Echipament Profesional</h4>
                <p className="text-sm font-doxent-light opacity-90">Tehnologie de ultimă generație</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-main-green/20 bg-main-green/5 text-center hover:bg-main-green/10 transition-colors">
                  <CardContent className="p-4">
                    <stat.icon className="w-6 h-6 text-main-green mx-auto mb-2" />
                    <div className="text-2xl font-gill-sans font-bold text-main-green">{stat.number}</div>
                    <p className="text-xs text-muted-foreground font-doxent-light">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-main-green/20 bg-gradient-to-br from-main-green/10 to-secondary-green/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-main-green/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-main-green" />
                  </div>
                  <div >
                    <h3 className="font-gill-sans font-semibold text-lg text-main-green mb-2">Rezultate Garantate</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm font-doxent-light ml-2">4.9/5 Rating</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-gill-sans font-semibold mb-6 text-main-green">Serviciile Noastre</h3>
              <div className="grid gap-3">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-main-green/20 hover:bg-main-green/5 transition-colors">
                    <CheckCircle className="w-5 h-5 text-main-green flex-shrink-0" />
                    <span className="font-doxent-light">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-main-green/5 rounded-xl border border-main-green/20">
                <Clock className="w-8 h-8 text-main-green mx-auto mb-2" />
                <h4 className="font-semibold text-sm font-gill-sans">Rapid</h4>
                <p className="text-xs text-muted-foreground mt-1 font-doxent-light">2-6 ore</p>
              </div>
              <div className="text-center p-4 bg-main-green/5 rounded-xl border border-main-green/20">
                <Shield className="w-8 h-8 text-main-green mx-auto mb-2" />
                <h4 className="font-semibold text-sm font-gill-sans">Sigur</h4>
                <p className="text-xs text-muted-foreground mt-1 font-doxent-light">Produse eco</p>
              </div>
              <div className="text-center p-4 bg-main-green/5 rounded-xl border border-main-green/20">
                <Sparkles className="w-8 h-8 text-main-green mx-auto mb-2" />
                <h4 className="font-semibold text-sm font-gill-sans">Complet</h4>
                <p className="text-xs text-muted-foreground mt-1 font-doxent-light">Până la detalii</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};