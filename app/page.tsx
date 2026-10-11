import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Services } from "@/components/sections/Services";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <AboutPreview />
      <Services />
      <FeaturedProjects />
      <ExperiencePreview />
      <Testimonials />
      <CTA />
    </>
  );
}
