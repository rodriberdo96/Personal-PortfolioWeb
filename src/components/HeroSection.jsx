import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I&apos;m </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">Rodrigo</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Berdomas</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Front End Developer turning ideas into smooth, interactive websites. Let&apos;s build something awesome — let&apos;s connect!
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button inline-flex">
              View my work
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown className="h-6 w-6" aria-hidden="true" />
      </a>
    </section>
  );
};
