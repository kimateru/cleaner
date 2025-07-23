import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import deepCleaningImage from "@/assets/deep-cleaning.jpg";
import homeCleaningImage from "@/assets/home-cleaning.jpg";
import officeCleaningImage from "@/assets/office-cleaning.jpg";
import heroCleaningImage from "@/assets/hero-cleaning.jpg";

interface BeforeAfterItem {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  location: string;
}

export const BeforeAfter = () => {
  const [sliderPositions, setSliderPositions] = useState<{ [key: number]: number }>({});
  const [isInteracting, setIsInteracting] = useState<{ [key: number]: boolean }>({});

  const beforeAfterItems: BeforeAfterItem[] = [
    {
      title: "Apartament după Renovare",
      description: "Curățenie completă după renovarea unei bucătării moderne",
      beforeImage: deepCleaningImage,
      afterImage: homeCleaningImage,
      location: "Centru, Chișinău"
    },
    {
      title: "Birou Corporativ",
      description: "Transformarea unui spațiu de lucru negliat într-un mediu profesional",
      beforeImage: officeCleaningImage,
      afterImage: heroCleaningImage,
      location: "Râșcani, Chișinău"
    },
    {
      title: "Casă Particulară",
      description: "Curățenie profundă pentru o familie cu copii mici",
      beforeImage: heroCleaningImage,
      afterImage: deepCleaningImage,
      location: "Botanica, Chișinău"
    },
    {
      title: "Restaurant După Renovare",
      description: "Pregătirea pentru deschiderea unui restaurant nou",
      beforeImage: homeCleaningImage,
      afterImage: officeCleaningImage,
      location: "Centru, Chișinău"
    }
  ];

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
            Rezultate Vizibile
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-gill-sans font-bold mb-6 text-main-green">
            ÎNAINTE ȘI <span className="text-secondary-green">DUPĂ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-doxent-light">
            Vezi transformarea incredibilă pe care o realizăm în fiecare proiect. Rezultate garantate care vorbesc de la sine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
                      ÎNAINTE
                    </Badge>
                  </div>
                  
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                    <Badge 
                      className={`bg-main-green/90 text-white transition-opacity duration-200 text-xs md:text-sm ${
                        sliderPosition < 80 ? 'opacity-100' : 'opacity-50'
                      }`}
                    >
                      DUPĂ
                    </Badge>
                  </div>

                  {/* Interaction Instructions */}
                  <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 z-20 ${
                    isCardInteracting ? 'opacity-0' : 'opacity-100'
                  } group-hover:opacity-0`}>
                    <div className="text-center text-white px-4">
                      <div className="text-base md:text-lg font-gill-sans font-semibold mb-2">
                        <span className="hidden md:inline">Mută mouse-ul pentru comparație</span>
                        <span className="md:hidden">Atinge și glisează pentru comparație</span>
                      </div>
                      <div className="text-sm font-doxent-light opacity-80">
                        <span className="hidden md:inline">Glisează pentru a vedea diferența</span>
                        <span className="md:hidden">Trage cu degetul pentru a vedea diferența</span>
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
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary-green rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground font-doxent-light">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-doxent-light">Înainte</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-doxent-light">După</span>
                      <div className="w-3 h-3 bg-main-green rounded-full flex-shrink-0"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* <div className="text-center mt-12 animate-fade-in">
          <Card className="bg-gradient-to-r from-main-green/5 to-secondary-green/5 border-main-green/20 max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-gill-sans font-semibold text-xl md:text-2xl mb-4 text-main-green">
                Garantăm Rezultate Vizibile
              </h3>
              <p className="text-muted-foreground mb-6 font-doxent-light text-sm md:text-base">
                Fiecare proiect este o transformare completă. Dacă nu ești mulțumit 100%, refacem gratuit.
              </p>
              <div className="grid grid-cols-3 gap-4 md:gap-6 text-center">
                <div>
                  <div className="text-xl md:text-2xl font-bold text-main-green font-gill-sans">792+</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-doxent-light">Transformări</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-main-green font-gill-sans">100%</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-doxent-light">Satisfacție</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-main-green font-gill-sans">5★</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-doxent-light">Rating Mediu</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
}; 