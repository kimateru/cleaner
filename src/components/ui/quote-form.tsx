import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Phone, Home } from "lucide-react";
import emailjs from '@emailjs/browser';

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

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    try {
      const result = await emailjs.sendForm(
        'service_9k2z9x5', // Replace with your EmailJS service ID
        'template_3hyx0v6', // Replace with your EmailJS template ID
        formRef.current,
        'j1T9a98i1fMpQfkq3' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          size: ""
        });
        alert(i18n.language === 'ru' ? 'Сообщение отправлено!' : 'Mesaj trimis!');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      alert(i18n.language === 'ru' ? 'Ошибка при отправке!' : 'Eroare la trimitere!');
    }
  };

  return (
    <Card className="w-full max-w-[90vw] lg:max-w-none mx-auto bg-white/95 backdrop-blur-sm shadow-2xl border-0 transform hover:scale-[1.01] transition-transform duration-300">
      <CardContent className="p-6 md:p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-main-green mb-2 font-gill-sans">
            {i18n.language === 'ru' ? 'Заказать уборку' : 'Comandă curățenie'}
          </h3>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <div className="relative">
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={i18n.language === 'ru' ? 'Имя' : 'Prenume'}
                className="pl-10 h-12 text-base"
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
                className="pl-10 h-12 text-base"
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
                className="pl-10 h-12 text-base"
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
                className="pl-10 h-12 text-base"
                type="number"
                required
              />
              <Home className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
            </div>
          </div>



          <Button 
            type="submit" 
            className="w-full"
            variant="cta"
          >
            {i18n.language === 'ru' ? 'Отправить заявку' : 'Trimite cererea'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};