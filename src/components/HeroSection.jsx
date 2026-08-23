import { ArrowDown, ArrowRight, Code2, Database, Globe, Layers, Mail, MapPin, Rocket, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { impactStats, profile } from "../data/portfolio";
import { ParallaxTilt } from "./ParallaxTilt";
import { TextScramble } from "./TextScramble";
import { TypewriterRole } from "./TypewriterRole";

export const HeroSection = () => {
  const { t, lang } = useLanguage();

  const getStatLabel = (index, defaultLabel) => {
    if (lang === "es") {
      const esLabels = [
        "años construyendo",
        "proyectos entregados",
        "sitios de clientes activos",
      ];
      return esLabels[index] || defaultLabel;
    }
    return defaultLabel;
  };

  const getRoleTranslation = (role) => {
    if (lang === "es") {
      const map = {
        "Full Stack Developer": "Desarrollador Full Stack",
        "React Developer": "Desarrollador React",
        "Web Engineer": "Ingeniero Web",
        "Frontend Developer": "Desarrollador Frontend",
      };
      return map[role] || role;
    }
    return role;
  };

  const translatedRoles = profile.roles.map(getRoleTranslation);

  return (
    <section id="hero" className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 sm:pt-36">
      <div className="absolute inset-x-0 top-16 -z-10 mx-auto h-96 max-w-6xl rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-0 top-28 -z-10 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

      {/* Subtle animated horizontal draw line */}
      <div className="absolute left-0 top-1/2 -z-10 h-px w-full overflow-hidden">
        <div className="h-full bg-linear-to-r from-transparent via-primary/20 to-transparent" style={{ animation: "draw-line 3s ease-out forwards" }} />
      </div>

      <div className="container mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 px-4 py-2 text-sm text-foreground/80 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            {t.hero.status}
          </div>

          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-primary">
            <TextScramble text={profile.name} speed={25} />
          </p>
          <h1 className="font-heading max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            {t.hero.titlePre} <span className="text-gradient">{t.hero.titleGradient}</span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-lg font-bold text-foreground md:text-2xl">
            <span>{t.hero.rolePre}</span>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-primary">
              <TypewriterRole roles={translatedRoles} />
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="cosmic-button group inline-flex items-center justify-center gap-2">
              {t.hero.ctaExplore}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#contact" className="secondary-button inline-flex items-center justify-center gap-2">
              {t.hero.ctaBuild}
              <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="social-chip">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {profile.location}
            </span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-chip" aria-label="Open GitHub profile">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-chip" aria-label="Open LinkedIn profile">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="social-chip" aria-label="Send Rodrigo an email">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              {lang === "es" ? "Contacto directo" : "Get in touch"}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 via-amber-500/10 to-yellow-600/20 blur-2xl" />
          <ParallaxTilt className="relative" intensity={4}>
            <div className="glass-card relative overflow-hidden p-5 shadow-2xl breathe-glow">
              <div className="absolute inset-0 opacity-40 grid-overlay" />
              <div className="relative rounded-[1.5rem] border border-border bg-background/80 p-4 text-left">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground font-mono">developer.config.ts</span>
                </div>

                <div className="mt-5 space-y-3 font-mono text-sm leading-7 text-muted-foreground">
                  <p><span className="text-primary font-bold">const</span> developer = &quot;Rodrigo Berdomás&quot;;</p>
                  <p><span className="text-primary font-bold">const</span> stack = [&quot;React&quot;, &quot;TypeScript&quot;, &quot;Node.js&quot;];</p>
                  <p><span className="text-primary font-bold">const</span> focus = &quot;High-conversion web platforms&quot;;</p>
                  <p><span className="text-primary font-bold">const</span> delivery = &quot;Pixel-perfect &amp; production-ready&quot;;</p>
                </div>

                <div className="mt-6 grid gap-2 grid-cols-5">
                  {[
                    { label: "Design", icon: Layers },
                    { label: "Frontend", icon: Code2 },
                    { label: "Backend", icon: Database },
                    { label: "Web Apps", icon: Globe },
                    { label: "Deploy", icon: Rocket },
                  ].map((item, index) => {
                    const NodeIcon = item.icon;
                    return (
                      <div key={item.label} className="workflow-node" style={{ animationDelay: `${index * 140}ms` }}>
                        <NodeIcon className="h-4 w-4" aria-hidden="true" />
                        <span className="text-[11px] font-semibold">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative mt-5 grid grid-cols-3 gap-3">
                {impactStats.map((stat, index) => (
                  <div key={stat.label} className="rounded-2xl border border-border bg-background/75 p-4 text-center backdrop-blur">
                    <p className="text-2xl font-black text-primary">{stat.value}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{getStatLabel(index, stat.label)}</p>
                  </div>
                ))}
              </div>
            </div>
          </ParallaxTilt>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center text-muted-foreground transition-colors hover:text-primary md:flex"
        aria-label="Scroll to about section"
      >
        <span className="mb-2 text-sm font-medium">{lang === "es" ? "Deslizar" : "Scroll"}</span>
        <ArrowDown className="h-5 w-5 animate-bounce text-primary" aria-hidden="true" />
      </a>
    </section>
  );
};
