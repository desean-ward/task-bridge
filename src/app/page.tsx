import AiInfo from "@/components/ai-info/ai-info.component";
import Footer from "@/components/footer/footer.component";
import Hero from "@/components/hero/hero.component";
import OurTeam from "@/components/our-team/our-team.component";
import Pricing from "@/components/pricing/pricing.component";
import Testimonials from "@/components/testimonials/testimonials.component";
import UnlockThePower from "@/components/unlock-the-power/unlock-the-power.component";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <Hero />
      <AiInfo />
      <UnlockThePower />
      <OurTeam />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
