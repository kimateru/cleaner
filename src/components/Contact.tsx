import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            INTRĂ ÎN <span className="text-success">CONTACT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gata să experimentezi servicii profesionale de curățenie în Chișinău? Contactează-ne astăzi pentru o evaluare gratuită 
            și lasă-ne să-ți transformăm spațiul.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl">Solicită o Ofertă</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Prenume" />
                </div>
                <div>
                  <Input placeholder="Nume" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input type="email" placeholder="Adresa de Email" />
                </div>
                <div>
                  <Input type="tel" placeholder="Numărul de Telefon" />
                </div>
              </div>
              
              <div>
                <Input placeholder="Adresa Proprietății în Chișinău" />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Spune-ne despre nevoile tale de curățenie..." 
                  className="min-h-32"
                />
              </div>
              
              <Button variant="success" size="lg" className="w-full">
                Obține Evaluare Gratuită
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sună-ne</h3>
                    <p className="text-muted-foreground">+373 (60) 123-456</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Trimite Email</h3>
                    <p className="text-muted-foreground">contact@cleanwave.md</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Vizitează-ne</h3>
                    <p className="text-muted-foreground">Strada Ștefan cel Mare 123, Chișinău, Moldova</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Orele de Lucru</h3>
                    <p className="text-muted-foreground">Luni - Vineri: 08:00 - 18:00</p>
                    <p className="text-muted-foreground">Sâmbătă: 09:00 - 16:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};