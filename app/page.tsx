import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { StorySection } from "@/components/site/StorySection";
import { TopicsSection } from "@/components/site/TopicsSection";
import { ShowcaseSection } from "@/components/site/ShowcaseSection";
import { InsideSection } from "@/components/site/InsideSection";
import { AboutSection } from "@/components/site/AboutSection";
import { PreviewSection } from "@/components/site/PreviewSection";
import { OfferSection } from "@/components/site/OfferSection";
import { FaqSection } from "@/components/site/FaqSection";
import { FinalCta } from "@/components/site/FinalCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileBuyBar } from "@/components/site/MobileBuyBar";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <StorySection />
      <TopicsSection />
      <ShowcaseSection />
      <InsideSection />
      <AboutSection />
      <PreviewSection />
      <OfferSection />
      <FaqSection />
      <FinalCta />
      <SiteFooter />
      <MobileBuyBar />
    </main>
  );
}
