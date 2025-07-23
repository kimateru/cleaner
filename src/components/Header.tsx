import { Button } from "@/components/ui/button";
import { Sparkles, Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-main-green/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-main-green rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-gill-sans font-bold text-main-green">Cleaner</h1>
            <p className="text-xs text-muted-foreground font-doxent-light">Servicii de curatenie</p>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-3 xl:gap-6">
          <a href="#home" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm xl:text-base">Acasă</a>
          <a href="#about" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm xl:text-base">Despre Noi</a>
          <a href="#deep-cleaning" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm xl:text-base">Curățenie Profundă</a>
          <a href="#regular-cleaning" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm xl:text-base">Curățenie Regulată</a>
          <a href="#upholstery-cleaning" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm xl:text-base">Curățenie Tapițerie</a>
          <a href="#before-after" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm xl:text-base">Înainte & După</a>
          <a href="#clients" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm xl:text-base">Clienți</a>
          <a href="#contact" className="text-foreground hover:text-main-green transition-colors font-doxent-light font-medium text-sm xl:text-base">Contact</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="default" size="sm" className="bg-main-green hover:bg-main-green/90 text-white font-gill-sans">
            <Phone className="w-4 h-4 text-white" />
            <span className="text-sm font-medium font-doxent-light">+373 (60) 123-456</span>
          </Button>
        </div>
      </div>
    </header>
  );
};