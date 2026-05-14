import { BriefcaseBusiness, Cpu, Sparkles } from "lucide-react";
import { experience } from "../data/portfolio";
import { SectionReveal } from "./SectionReveal";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative overflow-hidden bg-secondary/20 px-4 py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container mx-auto max-w-6xl">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title mt-3">A timeline focused on engineering, automation and execution.</h2>
          <p className="mt-5 text-muted-foreground">
            Recruiter-friendly context around the technical direction: full-stack development, workflow automation, AI-assisted delivery, and practical problem solving.
          </p>
        </SectionReveal>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-linear-to-b from-primary via-primary/25 to-transparent md:left-1/2" aria-hidden="true" />
          <div className="grid gap-8">
            {experience.map((item, index) => (
              <SectionReveal key={`${item.role}-${item.period}`} delay={index * 120} className={`relative grid gap-4 md:grid-cols-2 ${index % 2 === 1 ? "md:[&>article]:col-start-2" : ""}`}>
                <span className="absolute left-4 top-7 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-primary/30 bg-background text-primary shadow-lg shadow-primary/20 md:left-1/2">
                  {item.compact ? <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" /> : index === 0 ? <Sparkles className="h-4 w-4" aria-hidden="true" /> : <Cpu className="h-4 w-4" aria-hidden="true" />}
                </span>
                <article className={`spotlight-card ml-10 p-6 text-left md:ml-0 ${item.compact ? "opacity-85" : ""}`}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm font-black uppercase tracking-[0.24em] text-primary">{item.period}</p>
                    <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-bold text-muted-foreground">{item.focus}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-black">{item.role}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
                  <ul className="mt-5 space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
