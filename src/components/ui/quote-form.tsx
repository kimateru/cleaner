import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, User, Phone, Home } from "lucide-react";

interface QuoteFormData {
  firstName: string;
  lastName: string;
  phone: string;
  size: string;
}

export const QuoteForm = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState<QuoteFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    size: ""
  });

  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Calculate estimated price when size changes
    if (name === 'size' && !isNaN(Number(value))) {
      const basePrice = 15; // Price per square meter
      const total = Math.round(Number(value) * basePrice);
      setEstimatedPrice(total);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Card className="w-full max-w-xl bg-white/95 backdrop-blur-sm shadow-2xl border-0 transform hover:scale-[1.01] transition-transform duration-300">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-main-green mb-2 font-gill-sans">
            {i18n.language === 'ru' ? 'Рассчитать стоимость' : 'Calculează costul'}
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <div className="relative">
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={i18n.language === 'ru' ? 'Имя' : 'Prenume'}
                className="pl-10"
                required
              />
              <User className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder={i18n.language === 'ru' ? 'Фамилия' : 'Nume'}
                className="pl-10"
                required
              />
              <User className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={i18n.language === 'ru' ? 'Телефон' : 'Telefon'}
                className="pl-10"
                type="tel"
                required
              />
              <Phone className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Input
                name="size"
                value={formData.size}
                onChange={handleChange}
                placeholder={i18n.language === 'ru' ? 'Площадь (м²)' : 'Suprafața (m²)'}
                className="pl-10"
                type="number"
                required
              />
              <Home className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
            </div>
          </div>

          {estimatedPrice && (
            <div className="bg-success/10 p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">
                  {i18n.language === 'ru' ? 'Примерная стоимость:' : 'Cost estimativ:'}
                </span>
              </div>
              <span className="text-lg font-semibold text-success">
                {estimatedPrice} MDL
              </span>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full"
            variant="cta"
          >
            {i18n.language === 'ru' ? 'Получить точную цену' : 'Obține preț exact'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};