import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-gill-sans text-main-green">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-doxent-light">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Google Maps Integration */}
        <div className="mb-12 animate-fade-in">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.5884140992252!2d28.8434767!3d47.0092233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c21c3b0ae61%3A0xc5954c3fe6dc4b97!2zU3RyYWRhIENhbWVuacWjYSAydiwgQ2hpyJlpbsSDdQ!5e1!3m2!1sru!2s!4v1756231843352!5m2!1sru!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('contact.mapTitle')}
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
              <h3 className="font-gill-sans font-semibold text-main-green mb-2">{t('contact.callUs')}</h3>
              <a href="tel:+37369971222" className="text-muted-foreground font-doxent-light hover:text-main-green transition-colors">
                {t('common.phone')}
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-main-green/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-main-green/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-main-green" />
              </div>
              <h3 className="font-gill-sans font-semibold text-main-green mb-2">{t('contact.sendEmail')}</h3>
              <a href="mailto:cleaner@cleaner.md" className="text-muted-foreground font-doxent-light hover:text-main-green transition-colors">
                cleaner@cleaner.md
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-main-green/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-main-green/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-main-green" />
              </div>
              <h3 className="font-gill-sans font-semibold text-main-green mb-2">{t('contact.visitUs')}</h3>
              <a 
                href="https://www.google.com/maps/place/Strada+Cameni%C8%9Ba+2a,+Chi%C8%99in%C4%83u+2101,+Moldova/@47.0092233,28.8434767,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground font-doxent-light hover:text-main-green transition-colors"
              >
                {t('contact.address')}
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-main-green/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-main-green/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-main-green" />
              </div>
              <h3 className="font-gill-sans font-semibold text-main-green mb-2">{t('contact.workingHours')}</h3>
              <div className="text-muted-foreground font-doxent-light">
                <p>{t('contact.workingDays')}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};