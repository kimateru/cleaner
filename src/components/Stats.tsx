import { useEffect, useState } from "react";

const stats = [
  { number: 792, label: "Curățenii Finalizate", suffix: "" },
  { number: 500, label: "Clienți Mulțumiți", suffix: "+" },
  { number: 98, label: "Rata de Satisfacție", suffix: "%" },
  { number: 5, label: "Ani de Experiență", suffix: "" }
];

export const Stats = () => {
  const { t } = useTranslation();
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            stats.forEach((stat, index) => {
              const duration = 2000;
              const start = 0;
              const end = stat.number;
              const startTime = Date.now();
              
              const updateCounter = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);
                const current = Math.floor(progress * (end - start) + start);
                
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = current;
                  return newCounters;
                });
                
                if (progress < 1) {
                  requestAnimationFrame(updateCounter);
                }
              };
              
              requestAnimationFrame(updateCounter);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="stats-section" className="py-20 bg-success" aria-label="Statistici servicii curățenie Chișinău">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center animate-count-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-4xl lg:text-5xl font-bold text-success-foreground mb-2">
                {counters[index]}{stat.suffix}
              </div>
              <div className="text-success-foreground/80 uppercase tracking-wider text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};