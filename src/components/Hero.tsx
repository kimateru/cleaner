import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, Award } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

export const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 hero-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-main-green/10 text-main-green px-4 py-2 rounded-full text-sm font-medium font-doxent-light">
                <Award className="w-4 h-4" />
                #1 Serviciu de Curățenie în Chișinău
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-gill-sans font-bold leading-tight">
                Servicii de Curățenie Profesionale în Chișinău{" "}
                <span className="text-main-green">CLEANER</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed font-doxent-light">
                Transformăm spațiile tale cu servicii profesionale de curățenie. Calitate garantată, echipă expertă și prețuri competitive în Moldova.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-5">
                <p className="text-md text-muted-foreground font-doxent-light">Peste 500 clienți mulțumiți</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-main-green hover:bg-main-green/90 text-white font-gill-sans">
                Sună Acum
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
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
          
          {/* Right Content */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Servicii profesionale de curățenie în Chișinău, Moldova" 
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover img-optimized"
                loading="eager"
                width={600}
                height={600}
              />
              
              {/* Floating Stats Card */}
              <Card className="absolute top-8 right-8 p-6 bg-background/90 backdrop-blur-sm border-main-green/20 animate-float">
                <div className="text-center">
                  <div className="text-3xl font-bold text-main-green animate-count-up font-gill-sans">792</div>
                  <div className="text-sm text-muted-foreground font-doxent-light">CURĂȚENII</div>
                  <div className="text-xs text-muted-foreground mt-1 font-doxent-light">REALIZATE ÎN CHIȘINĂU</div>
                </div>
              </Card>
              
              {/* Floating Team Card */}
              <Card className="absolute bottom-8 left-8 p-4 bg-background/90 backdrop-blur-sm border-main-green/20 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                    <span className="text-white font-semibold font-gill-sans">EC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm font-gill-sans">Echipă Expertă</div>
                    <div className="text-xs text-muted-foreground font-doxent-light">Profesioniști în curățenie</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};