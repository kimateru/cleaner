import { Button } from "@/components/ui/button";
import { Sparkles, Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-main-green/20">
      <div className="container mx-auto px-2 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 animate-fade-in">
          <img
            src="/logo-big.svg"
            alt="Cleaner Logo"
            className="w-24 h-24 object-contain"
            loading="lazy"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-3 xl:gap-6 animate-fade-in">
          <a href="#home" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm xl:text-base">Acasă</a>
          <a href="#about" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm xl:text-base">Despre Noi</a>
          <a href="#deep-cleaning" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm xl:text-base">Curățenie Profundă</a>
          <a href="#regular-cleaning" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm xl:text-base">Curățenie Regulată</a>
          <a href="#upholstery-cleaning" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm xl:text-base">Curățenie Tapițerie</a>
          <a href="#before-after" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm xl:text-base">Înainte & După</a>
          <a href="#clients" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm xl:text-base">Clienți</a>
          <a href="#contact" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm xl:text-base">Contact</a>
        </nav>

        <div className="flex items-center gap-4 animate-fade-in">
          <Button variant="default" size="sm" className="bg-main-green hover:bg-main-green/90 text-white font-gill-sans">
            <Phone className="w-4 h-4 text-white" />
            <span className="text-sm font-medium font-doxent-light">+373 (60) 123-456</span>
          </Button>
        </div>
      </div>
    </header>
  );
};