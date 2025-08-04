import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useRef, useEffect } from "react";

const reviews = [
  {
    name: "Ina Bandalac",
    text: "Am avut ocazia sã foloses serviciile acestei companii, am rămas foarte multumitã.Pretul nu este scump,după ce vezi rezultatul.",
  },
  {
    name: "Alex Crudu",
    text: "Am apelat de două ori la echipa Cleaner.md pentru curătenie generală si de fiecare data rezultatul a fost impecabil. Apartmentul a fost lăsat intr-o stare ideal, ca nou! Sunt foarte atenti la detalii, lucreaza rapid si sunt profesionisti până la capät. Se vede că le pasă de ceea ce fac.Recomand cu incredere!",
  },
  {
    name: "Natalia Popova",
    text: "Спасибо Каролине и ее команде за отличную работу! Профессиональные, добросовестные и позитивные! Мы очень довольны! От души рекомендуем!",
  },
  {
    name: "Mencheli Ludmila",
    text: "Recomand cu încredere aceast companie de cleaning. Din propria experienta, am rmas multumiti de servicile prestate. Noi am apelat la ei pentru curătenie dupa reparatie. Profesionisti si seriosi in raport cu lucru si toate detaliile . Din ofertele prezentate, i-am ales pe ei si nu am rămas dezamăgiti.",
  },
  {
    name: "Kimi Mihailova",
    text: "Спасибо большое за супер качественный сервис по генеральной уборке! Вычистили всю квартиру, даже в труднодоступных местах! Кухня блестит, все обработано паром и сверкает новыми красками! Обязательно обратимся еще к Вам! Девочки очень трудолюбивые и не пропускают ни одной поверхности! Хороший первоклассный сервис!",
  },
  {
    name: "Elena Cebotari",
    text: "Спасибо огромное Каролиночке и ее команде за работу. Квартира наша сияет, чистота и уют. Быстрая обратная связь. Первоначально администратор Каролина приехала на объект и оценила фронт работы, и расписала услуги и предоставила прайс лист.Все четко и слажено. Генеральная уборка стоит своих денег. Мне бы потребовалась две недели, чтобы все это убрать и может быть не хватило).Очень довольна сотрудничеством с компанией с Cleaner, будем рекомендовать друзьям, знакомым и конечно обращаться еще.",
  }
];

const ReviewCard = ({ review, index, isMobile }: { review: typeof reviews[0], index: number, isMobile?: boolean }) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (isMobile && textRef.current) {
      // Check if text is overflowing
      const lineHeight = 20; // approximate line height in pixels
      const maxLines = 4;
      const maxHeight = lineHeight * maxLines;
      setShowReadMore(textRef.current.scrollHeight > maxHeight);
    }
  }, [isMobile, review.text]);

  return (
    <Card
      className={`border-main-green/20 hover:shadow-lg transition-all duration-300 hover:border-main-green/40 animate-fade-in ${isMobile ? (isExpanded ? 'h-auto' : 'h-[300px]') : 'h-fit'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-6 h-full flex flex-col">
        <div className={`flex flex-col ${isMobile ? 'gap-3' : 'gap-4'} flex-1`}>
          {/* Header with Avatar and Info */}
          <div className="flex items-center gap-4">
            <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} rounded-full bg-main-green/10 flex items-center justify-center flex-shrink-0`}>
              <span className={`font-gill-sans font-semibold text-main-green ${isMobile ? 'text-sm' : ''}`}>
                {review.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <h4 className={`font-gill-sans font-semibold text-main-green truncate ${isMobile ? 'text-sm' : ''}`}>{review.name}</h4>
              </div>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} flex-shrink-0 fill-yellow-400 text-yellow-400`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex-1 flex flex-col">
            <Quote className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} text-main-green/20 absolute -left-1 flex-shrink-0`} />
            <p 
              ref={textRef}
              className={`text-muted-foreground leading-relaxed pl-4 font-doxent-light break-words flex-1 ${
                isMobile 
                  ? `text-sm ${isExpanded ? '' : 'line-clamp-4 overflow-hidden'}` 
                  : ''
              }`}
              style={isMobile && !isExpanded ? { 
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              } : {}}
            >
              {review.text}
            </p>
            
            {isMobile && showReadMore && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-main-green text-xs font-medium mt-2 self-end hover:underline transition-colors"
              >
                {isExpanded ? t('clientsReviews.readLess') : t('clientsReviews.readMore')}
              </button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const ClientsReviews = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <section id="clients" className="pt-20 section-bg overflow-hidden">
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

        {/* Reviews Layout */}
        <div className="mb-16">
          <h3 className="text-3xl font-gill-sans font-semibold mb-8 text-center text-main-green">{t('clientsReviews.title')}</h3>
          
          {isMobile ? (
            /* Mobile Carousel */
            <div className="relative px-8">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-1">
                  {reviews.map((review, index) => (
                    <CarouselItem key={index} className="pl-1 basis-full">
                      <ReviewCard review={review} index={index} isMobile={true} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </div>
          ) : (
            /* Desktop Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <ReviewCard key={index} review={review} index={index} isMobile={false} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};