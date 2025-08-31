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

  // GSAP animations for menu
 // GSAP animations for menu
 useEffect(() => {
  const tl = gsap.timeline();

  // Cleanup sparkles
  gsap.killTweensOf('.sparkle');
  document.querySelectorAll('.sparkle').forEach(el => el.remove());

 const createSparkle = (broom: Element | null) => {
  if (!broom) return;
  if (Math.random() > 0.3) return; // ~30% chance only

  const rect = broom.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return; // 🚫 skip if not rendered/hidden
  const style = window.getComputedStyle(broom as HTMLElement);
  if (style.opacity === "0") return; // 🚫 skip if broom is invisible

  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.innerHTML = '✨';
  Object.assign(sparkle.style, {
    position: 'fixed',
    left: rect.left + rect.width / 2 + 'px',
    top: rect.top + rect.height / 2 + 'px',
    pointerEvents: 'none',
    fontSize: '1.5rem',
    opacity: 1,
    zIndex: 99,
  });
  document.body.appendChild(sparkle);

  gsap.to(sparkle, {
    y: gsap.utils.random(-20, 20),
    x: gsap.utils.random(-10, 10),
    scale: gsap.utils.random(0.7, 1.2),
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    onComplete: () => sparkle.remove()
  });
};


  if (isMenuOpen) {
    tl.set('.mobile-menu-overlay', { display: 'flex' })
      .set('.mobile-menu-content', { x: '100%' })
      .set('.broom-sweep', { x: '110vw', opacity: 1, scale: 1.8 })
      .set('.menu-item', { x: 100, opacity: 0 })
      .set('.mobile-cta', { x: 100, opacity: 0 })
      .set('.close-button', { opacity: 0, scale: 0 })

      // Sweeping motion
      .to('.broom-sweep', {
        keyframes: [
          { x: '70vw', rotation: -25, duration: 0.3, onUpdate() {
            createSparkle(document.querySelector('.broom-sweep'));
          }},
          { x: '40vw', rotation: 25, duration: 0.3, onUpdate() {
            createSparkle(document.querySelector('.broom-sweep'));
          }},
          { x: '10vw', rotation: -20, duration: 0.3, onUpdate() {
            createSparkle(document.querySelector('.broom-sweep'));
          }},
          { x: '-20vw', rotation: 20, duration: 0.3, onUpdate() {
            createSparkle(document.querySelector('.broom-sweep'));
          }},
        ],
        ease: "power1.inOut",
      })

      // Overlay fade
      .fromTo('.mobile-menu-overlay', 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.8, ease: "power2.out" }, 
        "-=1.0"
      )

      .to('.mobile-menu-content', {
        x: '0%',
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")

      .to('.broom-sweep', { opacity: 0, duration: 0.3 }, "-=0.4")

      .to('.menu-item', {
        x: 0, opacity: 1, duration: 0.3,
        stagger: 0.08, ease: "back.out(1.7)"
      }, "-=0.2")

      .to('.mobile-cta', {
        x: 0, opacity: 1, duration: 0.4,
        ease: "back.out(1.7)"
      }, "-=0.2")

      .to('.close-button', {
        opacity: 1, scale: 1, duration: 0.3,
        ease: "back.out(1.7)"
      }, "-=0.2");

  } else {
    // Reverse sweep
    tl.set('.broom-sweep', { x: '-30vw', opacity: 0, scale: 1.8 })

      .to('.close-button', { opacity: 0, scale: 0, duration: 0.2 })

      .to('.menu-item', {
        x: 100, opacity: 0, duration: 0.2,
        stagger: 0.04, ease: "power2.in"
      }, "-=0.1")

      .to('.mobile-cta', {
        x: 100, opacity: 0, duration: 0.2, ease: "power2.in"
      }, "-=0.15")

      .to('.broom-sweep', { opacity: 1, duration: 0.2 })

      .to('.broom-sweep', {
        keyframes: [
          { x: '10vw', rotation: 20, duration: 0.3, onUpdate() {
            createSparkle(document.querySelector('.broom-sweep'));
          }},
          { x: '40vw', rotation: -20, duration: 0.3, onUpdate() {
            createSparkle(document.querySelector('.broom-sweep'));
          }},
          { x: '70vw', rotation: 20, duration: 0.3, onUpdate() {
            createSparkle(document.querySelector('.broom-sweep'));
          }},
          { x: '110vw', rotation: -20, duration: 0.3, onUpdate() {
            createSparkle(document.querySelector('.broom-sweep'));
          }},
        ],
        ease: "power1.inOut",
      })

      .to('.mobile-menu-content', {
        x: '100%', duration: 0.6, ease: "power3.in"
      }, "-=0.7")

      .to('.mobile-menu-overlay', {
        opacity: 0, duration: 0.3, ease: "power2.in"
      }, "-=0.3")

      .set('.mobile-menu-overlay', { display: 'none' });
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
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2 hover:bg-main-green/10"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-main-green" />
              ) : (
                <Menu className="w-6 h-6 text-main-green" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className="mobile-menu-overlay fixed inset-0 z-[60] bg-white/95 backdrop-blur-lg xl:hidden overflow-hidden"
        style={{ display: 'none' }}
      >
        {/* Broom Sweep Animation */}
        <div className="broom-sweep fixed top-1/2 transform -translate-y-1/2 text-8xl z-10 pointer-events-none select-none">
          🧹
        </div>

        {/* Close Button - Fixed Position */}
        <button
          onClick={closeMenu}
          className="close-button fixed top-6 right-6 z-20 w-12 h-12 rounded-full bg-main-green/10 hover:bg-main-green/20 flex items-center justify-center transition-colors"
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