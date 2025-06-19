import Navigation from '@/components/navigation';
import HeroAlternate from '@/components/hero-alternate';
import ServicesAlternate from '@/components/services-alternate';
import StatsInline from '@/components/stats-inline';
import TestimonialsGrid from '@/components/testimonials-grid';
import TeamCompact from '@/components/team-compact';
import ContactSplit from '@/components/contact-split';
import Footer from '@/components/footer';
import { PortfolioDisclaimer } from '@/components/portfolio-disclaimer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroAlternate />
      <StatsInline />
      <ServicesAlternate />
      <TestimonialsGrid />
      <TeamCompact />
      <ContactSplit />
      <Footer />
      <PortfolioDisclaimer />
    </main>
  );
}
