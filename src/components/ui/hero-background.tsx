export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/4098778/pexels-photo-4098778.jpeg?_gl=1*wqczpw*_ga*MTE4NDY3NzE1NS4xNzUzOTgwNTkx*_ga_8JE65Q40S6*czE3NTM5ODA1OTAkbzEkZzEkdDE3NTM5ODA2NTQkajU5JGwwJGgw)',
          filter: 'brightness(0.8)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
      
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};