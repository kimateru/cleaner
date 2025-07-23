import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export const ClientsReviews = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      name: "Maria Popescu",
      role: "Manager Restaurant",
      location: "Centru, Chișinău",
      rating: 5,
      text: "Cleaner a transformat complet bucătăria restaurantului nostru. Echipa lor este foarte profesionista și punctuală. Recomand cu încredere!",
      service: "Curățenie Comercială",
      phone: "+373 68 123 456"
    },
    {
      name: "Alexandru Ionescu", 
      role: "Proprietar Apartament",
      location: "Botanica, Chișinău",
      rating: 5,
      text: "Am folosit serviciile pentru curățenie după renovare. Rezultatul a fost exceptional - apartamentul arăta ca nou. Foarte mulțumit!",
      service: "Curățenie Profundă",
      phone: "+373 69 234 567"
    },
    {
      name: "Elena Mihai",
      role: "Director Birou IT",
      location: "Râșcani, Chișinău",
      rating: 5,
      text: "Colaborăm cu Cleaner de 2 ani pentru curățenia biroului. Echipa este de încredere și serviciul este impecabil. Nu ne-au dezamăgit niciodată.",
      service: "Curățenie Regulată",
      phone: "+373 67 345 678"
    },
    {
      name: "Sergiu Petrov",
      role: "Proprietar Canapea Antică",
      location: "Centru, Chișinău", 
      rating: 5,
      text: "Canapeaua mea din piele avea pete vechi pe care nu credeam că se pot șterge. Cleaner a făcut minuni - arată ca nouă!",
      service: "Curățenie Tapițerie",
      phone: "+373 60 456 789"
    },
    {
      name: "Irina Constantinescu",
      role: "Proprietar Casă",
      location: "Buiucani, Chișinău",
      rating: 5,
      text: "Curățenia de primăvară făcută de echipa Cleaner a fost perfectă. Au lucrat 6 ore non-stop și casa noastră strălucește acum.",
      service: "Curățenie de Primăvară",
      phone: "+373 68 567 890"
    },
    {
      name: "Dmitri Smirnov",
      role: "Manager Hotel",
      location: "Centru, Chișinău",
      rating: 5,
      text: "Pentru hotelul nostru, calitatea curățeniei este esențială. Cleaner ne-a depășit așteptările cu profesionalismul și atenția la detalii.",
      service: "Curățenie Comercială",
      phone: "+373 69 678 901"
    }
  ];

  const clients = [
    {
      name: "Restaurant La Taifas",
      type: "Restaurant",
      location: "Centru, Chișinău",
      services: ["Curățenie zilnică", "Dezinfectare bucătărie"],
      collaboration: "3 ani"
    },
    {
      name: "IT Company Moldova",
      type: "Birou IT", 
      location: "Râșcani, Chișinău",
      services: ["Curățenie bi-săptămânală", "Curățenie geamuri"],
      collaboration: "2 ani"
    },
    {
      name: "Hotel Central Plaza",
      type: "Hotel",
      location: "Centru, Chișinău", 
      services: ["Curățenie camere", "Curățenie spații comune"],
      collaboration: "4 ani"
    },
    {
      name: "Clinica Medicală Sănătatea",
      type: "Clinică Medicală",
      location: "Botanica, Chișinău",
      services: ["Dezinfectare medicală", "Curățenie specializată"],
      collaboration: "1 an"
    }
  ];

  return (
    <section id="clients" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-success text-success">
            Recenzii Verificate
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            {t('clientsTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Peste 500 de clienți mulțumiți în Chișinău și împrejurimi. Citește experiențele lor reale cu serviciile noastre.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-heading font-semibold mb-6">Recenzii Clienți</h3>
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-heading font-semibold text-success">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-heading font-semibold">{review.name}</h4>
                          <Badge variant="outline" className="text-xs">{review.service}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{review.location}</span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Quote className="w-6 h-6 text-success/20 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground leading-relaxed pl-4">
                        {review.text}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
                      <Phone className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium">{review.phone}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-heading font-semibold mb-6">Clienții Noștri</h3>
            <div className="space-y-6">
              {clients.map((client, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-heading font-semibold text-lg mb-1">{client.name}</h4>
                        <p className="text-sm text-muted-foreground">{client.type}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{client.location}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                        {client.collaboration}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Servicii:</h5>
                      <div className="flex flex-wrap gap-2">
                        {client.services.map((service) => (
                          <Badge key={service} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="bg-success/5 border-success/20">
                <CardContent className="p-6 text-center">
                  <h4 className="font-heading font-semibold text-lg mb-2">Devino și Tu Clientul Nostru</h4>
                  <p className="text-muted-foreground mb-4">
                    Alătură-te celor peste 500 de clienți mulțumiți din Chișinău
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4 text-success" />
                      <span>+373 (60) 123-456</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4 text-success" />
                      <span>contact@cleaner.md</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in">
          <Card className="bg-gradient-to-r from-success/10 to-success/5 border-success/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <span className="text-2xl font-bold">4.9/5.0</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Rating Mediu</h3>
              <p className="text-muted-foreground">
                Bazat pe 127 recenzii verificate de la clienții noștri din Chișinău
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};