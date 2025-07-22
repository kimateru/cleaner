import { Sparkles, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="footer-bg text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-success rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-success-foreground" />
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
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-success transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-success transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-success transition-colors">Curățenie Birouri</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Curățenie Cămin</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Curățenie Profundă</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Curățare Covoare</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Curățare Geamuri</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Companie</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-success transition-colors">Despre Noi</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Echipa Noastră</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Cariere</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Recenzii</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/70">
              <li>+373 (60) 123-456</li>
              <li>contact@cleanwave.md</li>
              <li>Strada Ștefan cel Mare 123<br />Chișinău, Moldova</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
          <p>&copy; 2024 CleanWave. Toate drepturile rezervate. | Politica de Confidențialitate | Termeni și Condiții</p>
        </div>
      </div>
    </footer>
  );
};