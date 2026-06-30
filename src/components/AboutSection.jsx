import { Bot, Braces, Cloud, Workflow } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { profile } from "../data/portfolio";
import { ParallaxTilt } from "./ParallaxTilt";
import { SectionReveal } from "./SectionReveal";
import { SplitTextReveal } from "./SplitTextReveal";

const serviceIcons = [Braces, Workflow, Bot, Cloud];

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionReveal className="sticky top-28 text-left">
            <p className="section-eyebrow">{t.about.eyebrow}</p>
            <SplitTextReveal
              text={t.about.title}
              className="section-title mt-3"
              delay={200}
            />

            {/* Profile avatar with animated ring */}
            <div className="mt-8 flex items-center gap-6">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-linear-to-br from-primary via-primary/60 to-primary/30 animate-[gradient-shift_4s_ease-in-out_infinite]" style={{ backgroundSize: "200% 200%" }} />
                <img
                  src={profile.avatar}
                  alt={`${profile.name} profile photo`}
                  className="relative h-28 w-28 rounded-full border-2 border-background object-cover"
                />
              </div>
              <div>
                <p className="font-black text-lg">{profile.name}</p>
                <p className="text-sm text-muted-foreground">{profile.location}</p>
              </div>
            </div>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {t.about.desc1}
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              {t.about.desc2}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="cosmic-button inline-flex justify-center">
                {t.about.ctaStart}
              </a>
              <a href={profile.cv} download className="secondary-button inline-flex justify-center">
                {t.about.ctaCv}
              </a>
            </div>
          </SectionReveal>

          <div className="grid gap-5">
            {t.about.services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Braces;
              return (
                <SectionReveal key={service.title} as="article" delay={index * 90} className="text-left">
                  <ParallaxTilt className="spotlight-card group p-6" intensity={4}>
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <p className="mt-3 leading-7 text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </ParallaxTilt>
                </SectionReveal>
              );
            })}

            <SectionReveal className="rounded-3xl border border-primary/20 bg-linear-to-br from-primary/10 via-card/80 to-primary/5 p-6 text-left shadow-sm backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">{t.about.howIBuild}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-4">
                {t.about.principles.map((step, index) => (
                  <div key={step} className="pipeline-connector rounded-2xl bg-background/70 p-4 ring-1 ring-border">
                    <span className="text-sm font-black text-primary">0{index + 1}</span>
                    <p className="mt-2 text-sm font-semibold leading-6">{step}</p>
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
