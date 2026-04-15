import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Problem from '@/components/Problem';
import UseCases from '@/components/UseCases';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import WhoItsFor from '@/components/WhoItsFor';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <SocialProof />
      <Problem />
      <UseCases />
      <HowItWorks />
      <Features />
      <WhoItsFor />
      <Pricing />
      <Footer />
    </main>
  );
}
