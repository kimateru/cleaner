import { useTranslation } from "react-i18next";
import { Star, Shield, Award } from "lucide-react";
import { QuoteForm } from "@/components/ui/quote-form";
import { HeroBackground } from "@/components/ui/hero-background";

export const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <HeroBackground />

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-block bg-success/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium mb-4 border border-success/20">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                {t('hero.badge')}
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur-[2px] p-6 rounded-2xl border border-white/5">
              <h1 className="text-5xl lg:text-6xl font-bold font-gill-sans text-white leading-tight mb-4">
                {t('hero.title')}{" "}
                <span className="text-success">CLEANER</span>
              </h1>
              
              <p className="text-xl text-white/90 font-doxent-light">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex items-center gap-3 mt-4 justify-center lg:justify-start bg-success/10 px-4 py-2 rounded-lg inline-flex">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <span className="font-doxent-light text-white/90">
                  {t('hero.clients')}
                </span>
              </div>
            </div>
            
            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-xl p-6 border border-white/10">
                <div className="flex flex-col items-center lg:items-start gap-3">
                  <div className="bg-success/20 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white font-gill-sans mb-1">{t('hero.licensed')}</h3>
                    <p className="text-sm text-white/90 font-doxent-light leading-relaxed">{t('hero.licensedDesc')}</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-xl p-6 border border-white/10">
                <div className="flex flex-col items-center lg:items-start gap-3">
                  <div className="bg-success/20 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white font-gill-sans mb-1">{t('hero.insured')}</h3>
                    <p className="text-sm text-white/90 font-doxent-light leading-relaxed">{t('hero.insuredDesc')}</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-xl p-6 border border-white/10">
                <div className="flex flex-col items-center lg:items-start gap-3">
                  <div className="bg-success/20 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white font-gill-sans mb-1">{t('hero.guarantee')}</h3>
                    <p className="text-sm text-white/90 font-doxent-light leading-relaxed">{t('hero.guaranteeDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Now Badge */}
            <div className="inline-flex items-center gap-2 bg-success/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {t('hero.available')}
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="relative animate-fade-in lg:justify-self-end">
            <QuoteForm />
            
            {/* Rating Badge */}
            <div className="absolute -bottom-8 right-0 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <span className="text-2xl font-bold font-gill-sans">4.9</span>
                <span className="text-sm text-muted-foreground font-doxent-light">{t('hero.rating')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};