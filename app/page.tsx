import { DemoPreviewSection } from "@/components/home/demo-preview-section";
import { HeroSection } from "@/components/home/hero-section";
import { LetterSection } from "@/components/home/letter-section";
import { PackageSelection } from "@/components/home/package-selection";
import { ProcessSection } from "@/components/home/process-section";
import { TrustSection } from "@/components/home/trust-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <LetterSection />
        <TrustSection />
        <PackageSelection />
        <DemoPreviewSection />
        <ProcessSection />
      </main>
      <SiteFooter />
    </>
  );
}
