import { Sparkles, Facebook, Twitter, Instagram, Linkedin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="footer-bg text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-success rounded-xl flex items-center justify-center p-2">
                <img 
                  src="/logo2.svg" 
                  alt="Cleaner Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">CleanWave</h3>
                <p className="text-xs text-background/70">Curățenie Profesională</p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed">
              Partenerul tău de încredere pentru servicii profesionale de curățenie în Chișinău, Moldova. 
              Aducem împreună curățenia și accesibilitatea pentru spații rezidențiale și comerciale.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-success transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-success transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-success transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in">
            <h4 className="text-lg font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#deep-cleaning" className="hover:text-success transition-colors">
                  Curățenie Profundă
                </a>
              </li>
              <li>
                <a href="#regular-cleaning" className="hover:text-success transition-colors">
                  Curățenie Regulată
                </a>
              </li>
              <li>
                <a href="#upholstery-cleaning" className="hover:text-success transition-colors">
                  Curățenie Tapițerie
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-success transition-colors">
                  Înainte & După
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="animate-fade-in">
            <h4 className="text-lg font-semibold mb-4">Companie</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#about" className="hover:text-success transition-colors">
                  Despre Noi
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-success transition-colors">
                  Clienți
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-success transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/70">
              <li>+373 (60) 123-456</li>
              <li>contact@cleanwave.md</li>
              <li>Strada Ștefan cel Mare 123<br />Chișinău, Moldova</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70 animate-fade-in">
          <p>&copy; 2024 CleanWave. Toate drepturile rezervate. | Politica de Confidențialitate | Termeni și Condiții</p>
        </div>
      </div>
    </footer>
  );
};