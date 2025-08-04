import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import beforeAOne from "@/assets/beforea1.jpg";
import afterAOne from "@/assets/beforea2.jpg";
import beforeBOne from "@/assets/beforeb1.jpg";
import afterBOne from "@/assets/beforeb2.jpg";


import CTA from "./CTA";

interface BeforeAfterItem {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export const BeforeAfter = () => {
  const { t } = useTranslation();
  const [sliderPositions, setSliderPositions] = useState<{ [key: number]: number }>({});
  const [isInteracting, setIsInteracting] = useState<{ [key: number]: boolean }>({});

  const beforeAfterItems: BeforeAfterItem[] = t('beforeAfter.items', { returnObjects: true }).map((item, index) => ({
    ...item,
    beforeImage: [afterAOne, afterBOne][index],
    afterImage: [beforeAOne, beforeBOne][index]
  }));

  const updateSliderPosition = (clientX: number, element: HTMLDivElement, index: number) => {
    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
    
    setSliderPositions(prev => ({
      ...prev,
      [index]: clampedPercentage
    }));
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
    updateSliderPosition(e.clientX, e.currentTarget, index);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>, index: number) => {
    e.preventDefault(); // Prevent scrolling while dragging
    const touch = e.touches[0];
    if (touch) {
      updateSliderPosition(touch.clientX, e.currentTarget, index);
    }
  };

  const handleInteractionStart = (index: number) => {
    setIsInteracting(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const handleInteractionEnd = (index: number) => {
    setIsInteracting(prev => ({
      ...prev,
      [index]: false
    }));
    // Reset to center when interaction ends
    setSliderPositions(prev => ({
      ...prev,
      [index]: 50
    }));
  };

  return (
    <section id="before-after" className="py-20 hero-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-main-green text-main-green">
            {t('beforeAfter.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-gill-sans font-bold mb-6 text-main-green">
            {t('beforeAfter.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-doxent-light">
            {t('beforeAfter.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
          {beforeAfterItems.map((item, index) => {
            const sliderPosition = sliderPositions[index] || 50;
            const isCardInteracting = isInteracting[index] || false;
            
            return (
              <Card
                key={index}
                className="overflow-hidden border-main-green/20 hover:shadow-2xl transition-all duration-500 hover:border-main-green/40 animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div 
                  className="relative h-64 sm:h-72 md:h-80 overflow-hidden cursor-col-resize touch-pan-x"
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseEnter={() => handleInteractionStart(index)}
                  onMouseLeave={() => handleInteractionEnd(index)}
                  onTouchStart={() => handleInteractionStart(index)}
                  onTouchMove={(e) => handleTouchMove(e, index)}
                  onTouchEnd={() => handleInteractionEnd(index)}
                >
                  {/* Before Image */}
                  <img
                    src={item.beforeImage}
                    alt={`${item.title} - Înainte`}
                    className="absolute inset-0 w-full h-full object-cover select-none"
                    draggable={false}
                  />
                  
                  {/* After Image with clip-path */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                    }}
                  >
                    <img
                      src={item.afterImage}
                      alt={`${item.title} - După`}
                      className="w-full h-full object-cover select-none"
                      draggable={false}
                    />
                  </div>

                  {/* Before/After Labels */}
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
                    <Badge 
                      className={`bg-red-500/90 text-white transition-opacity duration-200 text-xs md:text-sm ${
                        sliderPosition > 20 ? 'opacity-100' : 'opacity-50'
                      }`}
                    >
                      {t('beforeAfter.before')}
                    </Badge>
                  </div>
                  
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                    <Badge 
                      className={`bg-main-green/90 text-white transition-opacity duration-200 text-xs md:text-sm ${
                        sliderPosition < 80 ? 'opacity-100' : 'opacity-50'
                      }`}
                    >
                      {t('beforeAfter.after')}
                    </Badge>
                  </div>

                  {/* Interaction Instructions */}
                  <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 z-20 ${
                    isCardInteracting ? 'opacity-0' : 'opacity-100'
                  } group-hover:opacity-0`}>
                    <div className="text-center text-white px-4">
                      <div className="text-base md:text-lg font-gill-sans font-semibold mb-2">
                        <span className="hidden md:inline">{t('beforeAfter.dragToCompare')}</span>
                        <span className="md:hidden">{t('beforeAfter.dragToCompare')}</span>
                      </div>
                     
                    </div>
                  </div>

                  {/* Sliding Divider */}
                  <div 
                    className="absolute top-0 bottom-0 w-0.5 md:w-1 bg-white shadow-lg z-30"
                    style={{
                      left: `${sliderPosition}%`,
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="flex gap-0.5 md:gap-1">
                        <div className="w-0.5 md:w-1 h-3 md:h-4 bg-main-green rounded-full"></div>
                        <div className="w-0.5 md:w-1 h-3 md:h-4 bg-main-green rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4 md:p-6">
                  <div className="mb-3">
                    <h3 className="font-gill-sans font-semibold text-lg md:text-xl text-main-green mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-doxent-light mb-2 text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <CTA heading={t('about.cta')} />
    </section>
  );
}; 