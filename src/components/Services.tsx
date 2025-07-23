import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Home, Zap } from "lucide-react";
import officeImage from "@/assets/office-cleaning.jpg";
import homeImage from "@/assets/home-cleaning.jpg";
import deepImage from "@/assets/deep-cleaning.jpg";

const services = [
  {
    icon: Building2,
    title: "Birouri",
    description: "Servicii profesionale de curățenie pentru birouri pentru menținerea unui mediu de lucru productiv în Chișinău.",
    image: officeImage,
    features: ["Curățenie zilnică", "Dezinfectare", "Gestionarea deșeurilor", "Curățarea geamurilor"]
  },
  {
    icon: Home,
    title: "Case",
    description: "Servicii complete de curățenie rezidențială pentru confortul și liniștea dumneavoastră în Moldova.",
    image: homeImage,
    features: ["Curățenie profundă", "Întreținere regulată", "Bucătărie & baie", "Curățare covoare"]
  },
  {
    icon: Zap,
    title: "Curățenie Profundă",
    description: "Servicii intensive de curățenie pentru spațiile care necesită atenție și îngrijire suplimentară.",
    image: deepImage,
    features: ["Mutare/ieșire", "Post-construcție", "Curățenie de primăvară", "Dezinfectare"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            SERVICIILE NOASTRE DE <span className="text-success">CURĂȚENIE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferim o gamă largă de servicii de curățenie pentru spații rezidențiale și comerciale în Chișinău, Moldova. 
            De la curățenie profundă la întreținere regulată, ne asigurăm că spațiul dumneavoastră rămâne impecabil.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border/50 animate-fade-in text-center md:text-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`${service.title} - Servicii de curățenie în Chișinău`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 img-optimized"
                  loading="lazy"
                  width={400}
                  height={256}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="success" size="lg">
                    Află Mai Mult
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center justify-center md:justify-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-center md:text-right">
                    <div className="text-2xl font-bold text-main-green font-gill-sans">{service.price}</div>
                    <div className="text-sm text-muted-foreground font-doxent-light">{service.duration}</div>
                  </div>
                  <Button className="bg-main-green hover:bg-main-green/90 text-white font-gill-sans">
                    Rezervă Acum
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};