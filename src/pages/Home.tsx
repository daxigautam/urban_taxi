import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { FleetSection } from '../components/FleetSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ServicesSection } from '../components/ServicesSection';
import { GallerySection } from '../components/GallerySection';
import { StatisticsSection } from '../components/StatisticsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import { CtaSection } from '../components/CtaSection';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="bg-primary text-textMain">
      <Navbar />
      <HeroSection />
      <FleetSection />
      <BenefitsSection />
      <ExperienceSection />
      <ServicesSection />
      <GallerySection />
      <StatisticsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
