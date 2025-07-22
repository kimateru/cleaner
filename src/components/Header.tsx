import { Button } from "@/components/ui/button";
import { Sparkles, Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-success rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-success-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">CleanWave</h1>
            <p className="text-xs text-muted-foreground">Professional Cleaning</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground hover:text-success transition-colors">Home</a>
          <a href="#services" className="text-foreground hover:text-success transition-colors">Services</a>
          <a href="#about" className="text-foreground hover:text-success transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-success transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-foreground">
            <Phone className="w-4 h-4 text-success" />
            <span className="text-sm font-medium">+1 (555) 123-4567</span>
          </div>
          <Button variant="success" size="sm">
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
};