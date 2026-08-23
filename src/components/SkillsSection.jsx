import { Code2, Cpu, Database, Wrench } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { marqueeSkills, skillGroups } from "../data/portfolio";
import { SectionReveal } from "./SectionReveal";
import { SplitTextReveal } from "./SplitTextReveal";

const icons = [Code2, Database, Wrench, Cpu];

export const SkillsSection = () => {
  const { t, lang } = useLanguage();

  const getGroupTitle = (title) => {
    if (lang === "es") {
      const titles = {
        "Frontend": "Frontend",
        "Backend": "Backend",
        "Tools & Deployment": "Herramientas y Despliegue",
        "Automation & AI": "Automatización e Integraciones",
      };
      return titles[title] || title;
    }
    return title;
  };

  const getGroupSummary = (title, defaultSummary) => {
    const keyMap = {
      "Frontend": t.skills.groups.frontend,
      "Backend": t.skills.groups.backend,
      "Tools & Deployment": t.skills.groups.tools,
      "Automation & AI": t.skills.groups.automation,
    };
    return keyMap[title] || defaultSummary;
  };

  return (
    <section id="skills" className="relative overflow-hidden bg-secondary/25 px-4 py-24">
      <div className="absolute inset-x-0 top-1/2 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto max-w-6xl">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">{t.skills.eyebrow}</p>
          <SplitTextReveal
            text={t.skills.title}
            className="section-title mt-3"
            delay={100}
          />
          <p className="mt-5 text-muted-foreground">
            {t.skills.description}
          </p>
        </SectionReveal>

        {/* Marquee Strip */}
        <SectionReveal className="mt-12">
          <div className="overflow-hidden rounded-full border border-border bg-card/60 py-3 backdrop-blur">
            <div className="marquee-track">
              {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
                <span key={`${skill}-${index}`} className="mx-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] ?? Code2;
            return (
              <SectionReveal key={group.title} as="article" delay={index * 100} className="text-left">
                <div className="spotlight-card shimmer-border group p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold">{getGroupTitle(group.title)}</h3>
                  </div>
                  <p className="mb-5 text-sm leading-6 text-muted-foreground">{getGroupSummary(group.title, group.summary)}</p>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
