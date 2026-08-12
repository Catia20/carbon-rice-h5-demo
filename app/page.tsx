import { ActionArea } from "@/components/ActionArea";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CarbonCard } from "@/components/CarbonCard";
import { FarmerStory } from "@/components/FarmerStory";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-[420px] overflow-hidden bg-rice shadow-[0_0_30px_rgba(0,0,0,0.04)]">
      <Hero />
      <div className="h-2" />
      <CarbonCard />
      <div className="h-8" />
      <Timeline />
      <div className="h-2" />
      <AnimatedSection><FarmerStory /></AnimatedSection>
      <AnimatedSection><ActionArea /></AnimatedSection>
    </main>
  );
}
