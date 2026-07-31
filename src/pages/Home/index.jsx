import SEO from '../../components/common/SEO';
import HeroSection from './sections/HeroSection';
import TrustSection from './sections/TrustSection';
import FeatureGrid from './sections/FeatureGrid';
import AppPreview from './sections/AppPreview';
import WorkflowSection from './sections/WorkflowSection';
import StatisticsSection from './sections/StatisticsSection';
import WhyFeldrix from './sections/WhyFeldrix';
import AISection from './sections/AISection';
import PricingPreview from './sections/PricingPreview';
import Testimonials from './sections/Testimonials';
import FAQSection from './sections/FAQSection';
import CTASection from '../../components/sections/CTASection';

const Home = () => (
  <>
    <SEO
      title="Feldrix | Farm Smarter. Grow Stronger."
      description="The complete farm management platform for livestock, crops, machinery, finance and planning. Built for modern farmers."
      canonical="/"
      keywords="farm management software, livestock management, crop management, agriculture platform, farm planner, AI farming"
    />
    {/* White hero */}
    <HeroSection />
    {/* Light green trust */}
    <TrustSection />
    {/* White modules */}
    <FeatureGrid />
    {/* Dark device showcase */}
    <AppPreview />
    {/* White workflow */}
    <WorkflowSection />
    {/* Dark green statistics bar */}
    <StatisticsSection />
    {/* White why section */}
    <WhyFeldrix />
    {/* Dark AI section */}
    <AISection />
    {/* White pricing */}
    <PricingPreview />
    {/* Light testimonials */}
    <Testimonials />
    {/* Light FAQ */}
    <FAQSection />
    {/* Dark CTA */}
    <CTASection />
  </>
);

export default Home;
