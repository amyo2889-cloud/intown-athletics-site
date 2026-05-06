import { PageLayout } from "@/components/intown/PageLayout";
import { HeroSection } from "@/components/intown/sections/HeroSection";
import { StatsBar } from "@/components/intown/sections/StatsBar";
import { MissionSection } from "@/components/intown/sections/MissionSection";
import { CampsPreview } from "@/components/intown/sections/CampsPreview";
import { SpondSection } from "@/components/intown/sections/SpondSection";
import { ValuesTeaser } from "@/components/intown/sections/ValuesTeaser";
import { ContactStrip } from "@/components/intown/sections/ContactStrip";

export default function Index() {
  return (
    <PageLayout>
      <HeroSection />
      <StatsBar />
      <MissionSection />
      <CampsPreview />
      <SpondSection />
      <ValuesTeaser />
      <ContactStrip />
    </PageLayout>
  );
}
