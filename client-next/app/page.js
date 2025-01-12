import Blurb from "@/components/Blurb";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HeroBlurb from "@/components/HeroBlurb";
import Squiggle from "@/components/Squiggle";

export default function Home() {
  return (
    <div>
      <Squiggle />
      <Hero />
      <HeroBlurb />
      <Blurb />
      <Features />
    </div>
  );
}
