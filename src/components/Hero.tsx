import { useTranslation } from "react-i18next";
import { Star, Shield, Award } from "lucide-react";
import { QuoteForm } from "@/components/ui/quote-form";
import { HeroBackground } from "@/components/ui/hero-background";

export const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      <HeroBackground />

      <div className="container mx-auto px-4 relative z-10 py-12 md:py-20 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="w-full lg:col-span-7 text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-block bg-black/50 backdrop-blur-md px-6 py-2.5 rounded-full text-white font-medium mb-6 border border-white/10 shadow-lg">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-success" />
                {t('hero.badge')}
              </div>
            </div>
            
            <div className="bg-black/50 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-gill-sans text-white leading-tight mb-6 drop-shadow-md">
                <div className="inline-block">
                  {t('hero.title')}{" "}
                  <span className="bg-gradient-to-r from-success to-success/80 text-transparent bg-clip-text whitespace-nowrap">CLEANER</span>
                </div>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-white font-doxent-light leading-relaxed max-w-[90%] mx-auto lg:mx-0">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex items-center gap-3 mt-6 justify-center lg:justify-start bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl inline-flex border border-white/5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <span className="font-doxent-light text-white">
                  {t('hero.clients')}
                </span>
              </div>
            </div>
            
            {/* Features */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8">
              <div className="group bg-main-green/5 backdrop-blur-md hover:bg-black/60 transition-all duration-300 rounded-xl p-6 border border-white/10 shadow-lg">
                <div className="flex flex-col items-center lg:items-start gap-3">
                  <div className="bg-success/20 p-3 rounded-lg border border-success/20 shadow-success/10 shadow-lg">
                    <Award className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white font-gill-sans mb-2 drop-shadow-sm">{t('hero.licensed')}</h3>
                    <p className="text-sm text-white font-doxent-light leading-relaxed">{t('hero.licensedDesc')}</p>
                  </div>
                </div>
              </div>
              
            
              <div className="group bg-main-green/5 backdrop-blur-md hover:bg-black/60 transition-all duration-300 rounded-xl p-6 border border-white/10 shadow-lg">
                <div className="flex flex-col items-center lg:items-start gap-3">
                  <div className="bg-success/20 p-3 rounded-lg border border-success/20 shadow-success/10 shadow-lg">
                    <Star className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white font-gill-sans mb-2 drop-shadow-sm">{t('hero.insured')}</h3>
                    <p className="text-sm text-white font-doxent-light leading-relaxed">{t('hero.insuredDesc')}</p>
                  </div>
                </div>
              </div>


              
              <div className="group bg-main-green/5 backdrop-blur-md hover:bg-black/60 transition-all duration-300 rounded-xl p-6 border border-white/10 shadow-lg">
                <div className="flex flex-col items-center lg:items-start gap-3">
                  <div className="bg-success/20 p-3 rounded-lg border border-success/20 shadow-success/10 shadow-lg">
                    <Shield className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white font-gill-sans mb-2 drop-shadow-sm">{t('hero.guarantee')}</h3>
                    <p className="text-sm text-white font-doxent-light leading-relaxed">{t('hero.guaranteeDesc')}</p>
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
          <div className="w-full lg:col-span-5 relative animate-fade-in">
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