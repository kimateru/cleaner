import { lazy, Suspense } from "react";

// Lazy load components for better performance
const Header = lazy(() => import("@/components/Header").then(module => ({ default: module.Header })));
const Hero = lazy(() => import("@/components/Hero").then(module => ({ default: module.Hero })));
const Services = lazy(() => import("@/components/Services").then(module => ({ default: module.Services })));
const Stats = lazy(() => import("@/components/Stats").then(module => ({ default: module.Stats })));
const Contact = lazy(() => import("@/components/Contact").then(module => ({ default: module.Contact })));
const Footer = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-success"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
      </Suspense>
      
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Stats />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;