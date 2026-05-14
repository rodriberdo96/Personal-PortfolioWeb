import { ArrowDown, ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles, Workflow, Zap } from "lucide-react";
import { impactStats, profile } from "../data/portfolio";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 sm:pt-36">
      <div className="absolute inset-x-0 top-16 -z-10 mx-auto h-96 max-w-6xl rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute right-0 top-28 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            Open to freelance, remote and AI automation opportunities
          </div>

          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-primary">{profile.name}</p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            AI-powered engineering for <span className="text-gradient">products, workflows and agents.</span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-lg font-bold text-foreground md:text-2xl">
            <span>I build as a</span>
            <span className="role-rotator" aria-label={profile.roles.join(", ")}>
              <span className="role-track">
                {profile.roles.map((role) => (
                  <span key={role}>{role}</span>
                ))}
              </span>
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            I&apos;m an AI-powered Full Stack & Automation Engineer from {profile.location}, creating React interfaces, Node.js foundations, REST API integrations, Make.com/n8n workflows, and AI agent experiences for modern teams.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="cosmic-button group inline-flex items-center justify-center gap-2">
              Explore AI projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#contact" className="secondary-button inline-flex items-center justify-center gap-2">
              Build an automation
              <Zap className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="social-chip">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {profile.location}
            </span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-chip" aria-label="Open GitHub profile">
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-chip" aria-label="Open LinkedIn profile">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="social-chip" aria-label="Send Rodrigo an email">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-primary/35 via-cyan-400/10 to-emerald-400/20 blur-2xl" />
          <div className="glass-card relative overflow-hidden p-5 shadow-2xl">
            <div className="absolute inset-0 opacity-40 grid-overlay" />
            <div className="relative rounded-[1.5rem] border border-border bg-background/80 p-4 text-left">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground">workflow.agent.ts</span>
              </div>

              <div className="mt-5 space-y-3 font-mono text-sm leading-7 text-muted-foreground">
                <p><span className="text-primary">const</span> engineer = &quot;Rodrigo Berdomás&quot;;</p>
                <p><span className="text-primary">stack</span>.connect([&quot;React&quot;, &quot;Node&quot;, &quot;APIs&quot;]);</p>
                <p><span className="text-primary">automation</span>.orchestrate(&quot;Make.com&quot;, &quot;n8n&quot;);</p>
                <p><span className="text-primary">agent</span>.run(&quot;qualify leads&quot;, &quot;trigger actions&quot;);</p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-5">
                {["Lead", "Webhook", "AI", "API", "CRM"].map((node, index) => (
                  <div key={node} className="workflow-node" style={{ animationDelay: `${index * 140}ms` }}>
                    <Workflow className="h-4 w-4" aria-hidden="true" />
                    <span>{node}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-5 grid grid-cols-3 gap-3">
              {impactStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-background/75 p-4 text-center backdrop-blur">
                  <p className="text-2xl font-black text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center text-muted-foreground transition-colors hover:text-primary md:flex"
        aria-label="Scroll to about section"
      >
        <span className="mb-2 text-sm">Scroll</span>
        <ArrowDown className="h-6 w-6 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
};
