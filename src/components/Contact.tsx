import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-gill-sans text-main-green">
            INTRĂ ÎN <span className="text-secondary-green">CONTACT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-doxent-light">
            Gata să experimentezi servicii profesionale de curățenie în Chișinău? Contactează-ne astăzi pentru o evaluare gratuită 
            și lasă-ne să-ți transformăm spațiul.
          </p>
        </div>
        
        {/* Google Maps Integration */}
        <div className="mb-12 animate-fade-in">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.8366863935716!2d28.8356!3d47.0105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x5c5c6c5c6c5c6c5c!2sChișinău%2C%20Moldova!5e0!3m2!1sen!2s!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cleaner - Locația noastră în Chișinău"
              ></iframe>
            </CardContent>
          </Card>
        </div>
        
        {/* Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-in-up">
          <Card className="hover:shadow-lg transition-all duration-300 border-main-green/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-main-green/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-main-green" />
              </div>
              <h3 className="font-gill-sans font-semibold text-main-green mb-2">Sună-ne</h3>
              <p className="text-muted-foreground font-doxent-light">+373 (60) 123-456</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all duration-300 border-main-green/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-main-green/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-main-green" />
              </div>
              <h3 className="font-gill-sans font-semibold text-main-green mb-2">Trimite Email</h3>
              <p className="text-muted-foreground font-doxent-light">contact@cleaner.md</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all duration-300 border-main-green/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-main-green/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-main-green" />
              </div>
              <h3 className="font-gill-sans font-semibold text-main-green mb-2">Vizitează-ne</h3>
              <p className="text-muted-foreground font-doxent-light">Strada Ștefan cel Mare 123, Chișinău, Moldova</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all duration-300 border-main-green/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-main-green/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-main-green" />
              </div>
              <h3 className="font-gill-sans font-semibold text-main-green mb-2">Orele de Lucru</h3>
              <div className="text-muted-foreground font-doxent-light">
                <p>Luni - Vineri: 08:00 - 18:00</p>
                <p>Sâmbătă: 09:00 - 16:00</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};