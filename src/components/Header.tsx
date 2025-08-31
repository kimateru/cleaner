import { Button } from "@/components/ui/button";
import { Sparkles, Phone, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useState, useEffect } from "react";
import { gsap } from "gsap";

export const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Simple GSAP animations for menu
  useEffect(() => {
    const overlay = document.querySelector('.mobile-menu-overlay') as HTMLElement;
    const content = document.querySelector('.mobile-menu-content') as HTMLElement;
    
    if (!overlay || !content) return;

    const tl = gsap.timeline();

    // Clean up any existing animations
    gsap.killTweensOf([overlay, content, '.menu-item', '.mobile-cta']);


         if (isMenuOpen) {
      // Simple opening animation
      tl.set(overlay, { display: 'flex', opacity: 0 })
        .set(content, { x: '100%' })
        .set('.menu-item', { opacity: 0, y: 20 })
        .set('.mobile-cta', { opacity: 0, y: 20 })
        
        .to(overlay, { opacity: 1, duration: 0.3 })
        .to(content, { x: '0%', duration: 0.5, ease: "power2.out" }, "-=0.2")
        .to('.menu-item', { 
          opacity: 1, 
          y: 0, 
          duration: 0.3, 
          stagger: 0.1, 
          ease: "back.out(1.7)" 
        }, "-=0.2")
        .to('.mobile-cta', { 
          opacity: 1, 
          y: 0, 
          duration: 0.3, 
          ease: "back.out(1.7)" 
        }, "-=0.1");
        
    } else {
      // Simple closing animation
      tl.to('.menu-item', { opacity: 0, y: 20, duration: 0.2, stagger: 0.05 })
        .to('.mobile-cta', { opacity: 0, y: 20, duration: 0.2 }, "-=0.1")
        .to(content, { x: '100%', duration: 0.4, ease: "power2.in" }, "-=0.1")
        .to(overlay, { opacity: 0, duration: 0.3 })
        .set(overlay, { display: 'none' });
    }
}, [isMenuOpen]);




  const navigationLinks = [
    { href: "#home", label: t('nav.home') },
    { href: "#about", label: t('nav.about') },
    { href: "#general-cleaning", label: t('nav.generalCleaning') },
    { href: "#deep-cleaning", label: t('nav.deepCleaning') },
    { href: "#regular-cleaning", label: t('nav.regularCleaning') },
    { href: "#upholstery-cleaning", label: t('nav.upholsteryCleaning') },
    { href: "#window-cleaning", label: t('nav.windowCleaning') },
    { href: "#before-after", label: t('nav.beforeAfter') },
    { href: "#clients", label: t('nav.clients') },
    { href: "#contact", label: t('nav.contact') },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-main-green/20">
        <div className="container mx-auto px-2 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 animate-fade-in">
            <img
              src="/logo-big.svg"
              alt="Cleaner Logo"
              className="w-24 h-24 object-contain"
              loading="lazy"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-2 xl:gap-5 animate-fade-in">
            {navigationLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm 2xl:text-base"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden xl:flex items-center gap-4 animate-fade-in">
            <LanguageSwitcher />
            <Button variant="default" size="sm" className="bg-main-green hover:bg-main-green/90 text-white font-gill-sans">
              <Phone className="w-4 h-4 text-white" />
              <a href="tel:+37369971222" className="text-sm font-medium font-doxent-light">
                {t('common.phone')}
              </a>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex xl:hidden items-center gap-3 animate-fade-in">
            <LanguageSwitcher />
            {/* Mobile Phone Button - Icon Only */}
            <Button variant="default" size="sm" className="bg-main-green hover:bg-main-green/90 text-white p-2">
              <a href="tel:+37369971222" className="flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </a>
            </Button>
            {/* Burger Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-3 hover:bg-main-green/10 rounded-md transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-main-green" />
              ) : (
                <Menu className="w-6 h-6 text-main-green" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className="mobile-menu-overlay fixed inset-0 z-[60] bg-white/95 backdrop-blur-lg xl:hidden overflow-hidden"
        style={{ display: 'none' }}
      >


        {/* Close Button - Fixed Position */}
        <button
          onClick={closeMenu}
          className="fixed top-6 right-6 z-20 w-12 h-12 rounded-full bg-main-green/10 hover:bg-main-green/20 flex items-center justify-center transition-colors"
        >
          <X className="w-6 h-6 text-main-green" />
        </button>

        <div className="mobile-menu-content flex flex-col items-center justify-center h-full px-6 py-10 relative w-full">
          {/* Navigation Links - Perfectly Centered */}
          <nav className="flex flex-col items-center justify-center space-y-5 flex-1 w-full max-w-md">
            {navigationLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="menu-item text-2xl font-gill-sans font-medium text-main-green hover:text-main-green/80 transition-colors text-center w-full py-3 block"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTA - Bottom Centered */}
          <div className="mobile-cta mt-4 flex-shrink-0 w-full flex justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-main-green hover:bg-main-green/90 text-white font-gill-sans px-8 py-4 text-lg"
            >
              <a href="tel:+37369971222" onClick={closeMenu} className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                {t('common.phone')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};