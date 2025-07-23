import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, Award } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

export const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 hero-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-main-green/10 text-main-green px-4 py-2 rounded-full text-sm font-medium font-doxent-light animate-fade-in">
                <Award className="w-4 h-4" />
                #1 Serviciu de Curățenie în Chișinău
              </div>

              <h1 className="text-5xl lg:text-6xl font-gill-sans font-bold leading-tight animate-fade-in">
                Servicii de Curățenie Profesionale în Chișinău{" "}
                <span className="text-main-green">CLEANER</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed font-doxent-light animate-fade-in">
                Transformăm spațiile tale cu servicii profesionale de curățenie. Calitate garantată, echipă expertă și prețuri competitive în Moldova.
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <p className="text-md text-muted-foreground font-doxent-light">Peste 500 clienți mulțumiți</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in justify-center lg:justify-start">
              <div className="text-center">
                <Button size="lg" className="bg-main-green hover:bg-main-green/90 text-white font-gill-sans">
                  Programează Consultație Gratuită
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 animate-fade-in">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-main-green" />
                  <span className="font-semibold text-main-green font-gill-sans">Licențiați</span>
                </div>
                <p className="text-sm text-muted-foreground font-doxent-light">Companie autorizată</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-main-green" />
                  <span className="font-semibold text-main-green font-gill-sans">Asigurați</span>
                </div>
                <p className="text-sm text-muted-foreground font-doxent-light">Protecție completă</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-main-green" />
                  <span className="font-semibold text-main-green font-gill-sans">Garanție</span>
                </div>
                <p className="text-sm text-muted-foreground font-doxent-light">100% satisfacție</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img
                src={heroImage}
                alt="Servicii profesionale de curățenie în Chișinău - Cleaner Moldova"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl img-optimized"
                loading="eager"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-main-green/20 to-transparent rounded-2xl" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-float">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium font-doxent-light">Disponibil Acum</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-main-green text-white p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold font-gill-sans">4.9★</div>
                <div className="text-xs font-doxent-light">Rating Client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};