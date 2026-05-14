import { Bot, Braces, Cloud, Workflow } from "lucide-react";
import { profile, services } from "../data/portfolio";
import { SectionReveal } from "./SectionReveal";

const serviceIcons = [Braces, Workflow, Bot, Cloud];
const principles = ["clarify the business workflow", "design the API and UI contract", "ship responsive product UX", "automate the repetitive handoffs"];

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionReveal className="sticky top-28 text-left">
            <p className="section-eyebrow">About Rodrigo</p>
            <h2 className="section-title mt-3">Full stack delivery with an automation-first mindset.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I build cloud-ready product experiences that connect polished interfaces with practical backend logic, APIs, and automation systems. My focus is not only making software look premium — it is making it useful, scalable, and ready to plug into real business workflows.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              My stack centers on React, Node.js, REST APIs, TailwindCSS, and AI-assisted development, with automation workflows powered by Make.com, n8n concepts, webhooks, JSON payloads, and AI tools. I enjoy working where product UX meets integrations, agents, and operational leverage.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="cosmic-button inline-flex justify-center">Start an AI workflow</a>
              <a href={profile.cv} download className="secondary-button inline-flex justify-center">Download CV</a>
            </div>
          </SectionReveal>

          <div className="grid gap-5">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Braces;
              return (
                <SectionReveal key={service.title} as="article" delay={index * 90} className="spotlight-card group p-6 text-left">
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-transform duration-300 group-hover:scale-110">
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

            <SectionReveal className="rounded-3xl border border-primary/20 bg-linear-to-br from-primary/15 via-card/80 to-cyan-400/10 p-6 text-left shadow-sm backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">How I build</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-4">
                {principles.map((step, index) => (
                  <div key={step} className="rounded-2xl bg-background/70 p-4 ring-1 ring-border">
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
