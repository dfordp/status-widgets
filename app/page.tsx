import { Navigation } from "@/app/components/Navigation";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { TrustStrip } from "@/app/components/sections/TrustStrip";
import { ProblemSection } from "@/app/components/sections/ProblemSection";
import { FeaturesSection } from "@/app/components/sections/FeaturesSection";
import { LiveDemoSection } from "@/app/components/sections/LiveDemoSection";
import { CodeExamplesSection } from "@/app/components/sections/CodeExamplesSection";
import { ArchitectureSection } from "@/app/components/sections/ArchitectureSection";
import { FutureVisionSection } from "@/app/components/sections/FutureVisionSection";
import { WaitlistSection } from "@/app/components/sections/WaitlistSection";
import { Footer } from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <FeaturesSection />
      <LiveDemoSection />
      <CodeExamplesSection />
      <ArchitectureSection />
      <FutureVisionSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
