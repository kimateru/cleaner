import { lazy, Suspense } from "react";
import { TranslationProvider } from "@/hooks/useTranslation";

// Lazy load components for better performance
const Header = lazy(() => import("@/components/Header").then(module => ({ default: module.Header })));
const Hero = lazy(() => import("@/components/Hero").then(module => ({ default: module.Hero })));
const About = lazy(() => import("@/components/About").then(module => ({ default: module.About })));
const DeepCleaning = lazy(() => import("@/components/DeepCleaning").then(module => ({ default: module.DeepCleaning })));
const RegularCleaning = lazy(() => import("@/components/RegularCleaning").then(module => ({ default: module.RegularCleaning })));
const UpholsteryCleaning = lazy(() => import("@/components/UpholsteryCleaning").then(module => ({ default: module.UpholsteryCleaning })));
const ClientsReviews = lazy(() => import("@/components/ClientsReviews").then(module => ({ default: module.ClientsReviews })));
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
    <TranslationProvider>
      <div className="min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <Header />
        </Suspense>
        
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <DeepCleaning />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <RegularCleaning />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <UpholsteryCleaning />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <ClientsReviews />
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
    </TranslationProvider>
  );
};

export default Index;