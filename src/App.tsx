import { useEffect } from "react";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { FooterSection } from "./sections/FooterSection";
import { locale } from "./i18n";

export default function App() {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = "Parallel SEKAI — Open Source Collective";
  }, []);

  return (
    <div className="snap-root">
      <HeroSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
}
