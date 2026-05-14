import { Bot, Code, Database, Wrench } from "lucide-react";
import { marqueeSkills, skillGroups } from "../data/portfolio";
import { SectionReveal } from "./SectionReveal";

const icons = [Code, Database, Bot, Wrench];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-secondary/25 px-4 py-24">
      <div className="absolute inset-x-0 top-1/2 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto max-w-6xl">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Capabilities</p>
          <h2 className="section-title mt-3">A modern stack for AI-enhanced product execution.</h2>
          <p className="mt-5 text-muted-foreground">
            Frontend polish, backend foundations, workflow automation, AI agent tooling, and deployment workflows — organized around shipping useful systems quickly.
          </p>
        </SectionReveal>

        <div className="mt-10 overflow-hidden rounded-full border border-border bg-card/60 py-3 backdrop-blur">
          <div className="marquee-track">
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <span key={`${skill}-${index}`} className="mx-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] ?? Code;
            return (
              <SectionReveal key={group.title} as="article" delay={index * 100} className="spotlight-card group p-6 text-left">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold">{group.title}</h3>
                </div>
                <p className="mb-5 text-sm leading-6 text-muted-foreground">{group.summary}</p>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
