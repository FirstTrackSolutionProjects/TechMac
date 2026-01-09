import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import ServicesOverview from "../components/ServicesOverview";
import WhyChooseUs from "../components/WhyChooseUs";
import ProjectsSnapshot from "../components/ProjectsSnapshot";
import Process from "../components/Process";
import Stats from "../components/Stats";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ServicesOverview />
      <WhyChooseUs />
      <ProjectsSnapshot />
      <Process />
      <Stats />
      <CTA />
    </>
  );
}
