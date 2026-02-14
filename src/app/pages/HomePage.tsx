import { Hero } from '../components/Hero';
import { FeatureHighlights } from '../components/FeatureHighlights';
import { CorePillars } from '../components/CorePillars';
import { TrustSection } from '../components/TrustSection';
import { CTASection } from '../components/CTASection';
import { SEO } from '../components/SEO';

export function HomePage() {
  return (
    <div className="bg-[#0B0B0B]">
      <SEO 
        title="Home - Transform Your Career with Expert Training"
        description="India's leading education and technology platform. Master AI, Full Stack, Data Science, and Cloud Computing with industry experts. 95% placement rate."
      />
      <Hero />
      <FeatureHighlights />
      <CorePillars />
      <TrustSection />
      <CTASection />
    </div>
  );
}