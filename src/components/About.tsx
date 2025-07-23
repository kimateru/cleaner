import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, CheckCircle } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Award,
      title: "Experiență",
      description: "Peste 5 ani în domeniu"
    },
    {
      icon: Shield,
      title: "Calitate",
      description: "Produse și echipamente premium"
    },
    {
      icon: Users,
      title: "Încredere",
      description: "Peste 500 clienți mulțumiți"
    }
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-gill-sans font-bold mb-6 text-main-green">
              Despre Cleaner
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-doxent-light">
              Cu peste 5 ani de experiență în curățenie profesională, Cleaner este liderul pieței din Chișinău. Folosim echipamente moderne și produse ecologice pentru rezultate impecabile.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-gill-sans font-semibold mb-4 text-main-green">
                Misiunea Noastră
              </h3>
              <p className="text-muted-foreground leading-relaxed font-doxent-light">
                Să oferim servicii de curățenie de cea mai înaltă calitate, creând spații curate și sănătoase pentru clienții noștri din Moldova.
              </p>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="w-5 h-5 text-main-green" />
              <span className="font-medium font-doxent-light">Licențiați și asigurați</span>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="w-5 h-5 text-main-green" />
              <span className="font-medium font-doxent-light">Echipamente profesionale</span>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="w-5 h-5 text-main-green" />
              <span className="font-medium font-doxent-light">Produse ecologice</span>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="mb-8">
              <h3 className="text-2xl font-gill-sans font-semibold mb-6 text-center text-main-green">
                De Ce Să Ne Alegeți
              </h3>
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <Card key={feature.title} className="border-main-green/20 hover:shadow-lg transition-all duration-300 hover:border-main-green/40">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-main-green/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-main-green" />
                      </div>
                      <div>
                        <h4 className="font-gill-sans font-semibold text-lg mb-1 text-main-green">{feature.title}</h4>
                        <p className="text-muted-foreground font-doxent-light">{feature.description}</p>
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