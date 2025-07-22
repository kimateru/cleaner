import { Sparkles, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
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
                <p className="text-xs text-background/70">Professional Cleaning</p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed">
              Your trusted partner for professional cleaning services. We bring cleanliness 
              and affordability together for residential and commercial spaces.
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
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-success transition-colors">Office Cleaning</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Home Cleaning</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Deep Cleaning</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Carpet Cleaning</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Window Cleaning</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-success transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/70">
              <li>+1 (555) 123-4567</li>
              <li>hello@cleanwave.com</li>
              <li>123 Clean Street<br />City, State 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
          <p>&copy; 2024 CleanWave. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};