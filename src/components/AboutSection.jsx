import { Code2, Globe, Layers, Server, Workflow } from "lucide-react";
import { profile, services } from "../data/portfolio";
import { SectionReveal } from "./SectionReveal";

const serviceIcons = [Code2, Globe, Server, Workflow];
const principles = [
  "architect user-centered UX",
  "write clean full-stack code",
  "optimize performance & SEO",
  "deploy scalable platforms",
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionReveal className="sticky top-28 text-left">
            <p className="section-eyebrow">About Rodrigo</p>
            <h2 className="section-title mt-3">Crafting modern web applications with engineering precision.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I build high-performance web applications, responsive client platforms, and scalable backend services. My focus is delivering polished digital experiences with clean architecture, fluid UX, and reliable API foundations that drive real business growth.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              My core stack centers on React, TypeScript, Node.js, Express, MongoDB, TailwindCSS, and cloud deployments. Whether engineering custom client websites like Buenos Aires Móvil or building full-stack products, I prioritize speed, maintainability, and conversion.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="cosmic-button inline-flex justify-center">Start a Project</a>
              <a href={profile.cv} download className="secondary-button inline-flex justify-center">Download CV</a>
            </div>
          </SectionReveal>

          <div className="grid gap-5">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Code2;
              return (
                <SectionReveal key={service.title} as="article" delay={index * 90} className="spotlight-card group p-6 text-left">
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="mt-3 leading-7 text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}

            <SectionReveal className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 via-card/80 to-amber-500/10 p-6 text-left shadow-sm backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Engineering Philosophy</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-4">
                {principles.map((step, index) => (
                  <div key={step} className="rounded-2xl bg-background/70 p-4 ring-1 ring-border">
                    <span className="text-sm font-black text-primary">0{index + 1}</span>
                    <p className="mt-2 text-sm font-semibold leading-6 capitalize">{step}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
