import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Home, Zap } from "lucide-react";
import officeImage from "@/assets/office-cleaning.jpg";
import homeImage from "@/assets/home-cleaning.jpg";
import deepImage from "@/assets/deep-cleaning.jpg";

const services = [
  {
    icon: Building2,
    title: "Offices",
    description: "Professional office cleaning services to maintain a productive work environment.",
    image: officeImage,
    features: ["Daily cleaning", "Sanitization", "Waste management", "Window cleaning"]
  },
  {
    icon: Home,
    title: "Homes",
    description: "Comprehensive residential cleaning services for your comfort and peace of mind.",
    image: homeImage,
    features: ["Deep cleaning", "Regular maintenance", "Kitchen & bathroom", "Carpet cleaning"]
  },
  {
    icon: Zap,
    title: "Deep Clean",
    description: "Intensive cleaning services for spaces that need extra attention and care.",
    image: deepImage,
    features: ["Move-in/out", "Post-construction", "Spring cleaning", "Sanitization"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            OUR CLEANING <span className="text-success">SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide a wide range of cleaning services for residential and commercial spaces. 
            From deep cleaning to regular maintenance, we ensure your space stays pristine.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="success" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-6 group-hover:border-success group-hover:text-success">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};