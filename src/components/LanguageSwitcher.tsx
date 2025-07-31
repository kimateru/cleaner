import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ro' ? 'ru' : 'ro';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 border-main-green/20 hover:bg-main-green hover:border-main-green"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium text-sm">
        {i18n.language?.toUpperCase() || 'RO'}
      </span>
    </Button>
  );
};