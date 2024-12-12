import AiInfo from "@/components/ai-info/ai-info.component";
import Hero from "@/components/hero/hero.component";
import OurTeam from "@/components/our-team/our-team.component";
import UnlockThePower from "@/components/unlock-the-power/unlock-the-power.component";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <Hero />
      <AiInfo />
      <UnlockThePower />
      <OurTeam />
    </main>
  );
}
