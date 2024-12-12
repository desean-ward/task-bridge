import AiInfo from "@/components/ai-info/ai-info.component";
import Hero from "@/components/hero/hero.component";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-12 md:py-24'>
      <Hero />
      <AiInfo />
    </main>
  );
}
