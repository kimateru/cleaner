import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ClientsReviews = () => {
  const { t } = useTranslation();
  const reviews = t('clientsReviews.reviews', { returnObjects: true }) as Array<{
    name: string;
    location: string;
    rating: 5;
    text: string;
    service: string;
  }>;

  const clients = [
    {
      name: "Restaurant La Taifas",
      type: "Restaurant",
      location: "Centru, Chișinău",
      services: ["Curățenie zilnică", "Dezinfectare bucătărie"],
      collaboration: "3 ani"
    },
    {
      name: "IT Company Moldova",
      type: "Birou IT",
      location: "Râșcani, Chișinău",
      services: ["Curățenie bi-săptămânală", "Curățenie geamuri"],
      collaboration: "2 ani"
    },
    {
      name: "Hotel Central Plaza",
      type: "Hotel",
      location: "Centru, Chișinău",
      services: ["Curățenie camere", "Curățenie spații comune"],
      collaboration: "4 ani"
    },
    {
      name: "Clinica Medicală Sănătatea",
      type: "Clinică Medicală",
      location: "Botanica, Chișinău",
      services: ["Dezinfectare medicală", "Curățenie specializată"],
      collaboration: "1 an"
    }
  ];

  return (
    <section id="clients" className="py-20 section-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-main-green text-main-green">
            {t('clientsReviews.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-gill-sans font-bold mb-6 text-main-green">
            {t('clientsReviews.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-doxent-light">
            {t('clientsReviews.subtitle')}
          </p>
        </div>

        {/* Reviews Grid Layout */}
        <div className="mb-16">
          <h3 className="text-3xl font-gill-sans font-semibold mb-8 text-center text-main-green">{t('clientsReviews.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="border-main-green/20 hover:shadow-lg transition-all duration-300 hover:border-main-green/40 animate-fade-in h-fit"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    {/* Header with Avatar and Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-main-green/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-gill-sans font-semibold text-main-green">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <h4 className="font-gill-sans font-semibold text-main-green truncate">{review.name}</h4>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 flex-shrink-0 fill-yellow-400 text-yellow-400`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <Quote className="w-4 h-4 text-main-green/20 absolute -left-1 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed pl-4 font-doxent-light break-words">
                        {review.text}
                      </p>
                    </div>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};