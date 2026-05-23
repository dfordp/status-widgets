import { Navigation } from "@/app/components/Navigation";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { BeforeAfterSection } from "@/app/components/sections/BeforeAfterSection";
import { TrustStrip } from "@/app/components/sections/TrustStrip";
import { ModernFailureSection } from "@/app/components/sections/ModernFailureSection";
import { LiveDemoSection } from "@/app/components/sections/LiveDemoSection";
import { DifferentiationSection } from "@/app/components/sections/DifferentiationSection";
import { FeaturesSection } from "@/app/components/sections/FeaturesSection";
import { CodeExamplesSection } from "@/app/components/sections/CodeExamplesSection";
import { ArchitectureSection } from "@/app/components/sections/ArchitectureSection";
import { CompetitorSection } from "@/app/components/sections/CompetitorSection";
import { PricingSection } from "@/app/components/sections/PricingSection";
import { FutureVisionSection } from "@/app/components/sections/FutureVisionSection";
import { WaitlistSection } from "@/app/components/sections/WaitlistSection";
import { Footer } from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <BeforeAfterSection />
      <TrustStrip />
      <ModernFailureSection />
      <LiveDemoSection />
      <DifferentiationSection />
      <FeaturesSection />
      <CodeExamplesSection />
      <ArchitectureSection />
      <CompetitorSection />
      <PricingSection />
      <FutureVisionSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
