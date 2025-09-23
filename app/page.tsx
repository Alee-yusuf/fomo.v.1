import Header from '../components/Header';
import Hero from '../components/Hero';
import PlansSection from '../components/Plans/PlansSection';
import InvestmentCalculator from '../components/InvestmentCalculator';
import OnboardingSteps from '../components/OnboardingSteps';
import PaymentInfo from '../components/PaymentInfo';
import ReferralProgram from '../components/ReferralProgram';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import Footer from '../components/Footer';
import CoreFeatures from '@/components/CoreFeatures';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PlansSection />
        <InvestmentCalculator />
        <CoreFeatures/>
        <OnboardingSteps />
        <Testimonials />
        <PaymentInfo />
        <ReferralProgram />
        <FAQ />
        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
}
