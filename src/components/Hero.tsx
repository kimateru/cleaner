import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, Award } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import heroImage from "@/assets/hero-cleaning.jpg";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="pt-20 pb-16 hero-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                #1 Serviciu de Curățenie în Chișinău
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-heading font-bold leading-tight">
                {t('heroTitle')}{" "}
                <span className="text-success">CLEANER</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('heroDescription')}
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-success/20 border-2 border-background flex items-center justify-center">
                  <span className="text-success font-semibold text-sm">A</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-success/20 border-2 border-background flex items-center justify-center">
                  <span className="text-success font-semibold text-sm">M</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-success/20 border-2 border-background flex items-center justify-center">
                  <span className="text-success font-semibold text-sm">S</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-success/20 border-2 border-background flex items-center justify-center">
                  <span className="text-success font-semibold text-sm">+</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Încrederea a peste 500+ clienți din Chișinău</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="bg-success hover:bg-success/90 text-success-foreground">
                {t('getStarted')}
              </Button>
              <Button variant="outline" size="xl" className="border-success text-success hover:bg-success/10">
                {t('callNow')}
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">Licențiat & Asigurat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">Suport 24/7</span>
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
              <Card className="absolute top-8 right-8 p-6 bg-background/90 backdrop-blur-sm border-success/20 animate-float">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success animate-count-up">792</div>
                  <div className="text-sm text-muted-foreground">CURĂȚENII</div>
                  <div className="text-xs text-muted-foreground mt-1">REALIZATE ÎN CHIȘINĂU</div>
                </div>
              </Card>
              
              {/* Floating Team Card */}
              <Card className="absolute bottom-8 left-8 p-4 bg-background/90 backdrop-blur-sm border-success/20 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                    <span className="text-white font-semibold">EC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Echipă Expertă</div>
                    <div className="text-xs text-muted-foreground">Profesioniști în curățenie</div>
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