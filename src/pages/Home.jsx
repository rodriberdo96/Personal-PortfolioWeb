import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { GlowCursor } from "../components/GlowCursor";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
      <StarBackground />
      <GlowCursor />
      <NavBar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
