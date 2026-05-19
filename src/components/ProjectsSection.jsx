import { ArrowRight, Bot, CheckCircle2, ExternalLink, Github, Network, Sparkles, Workflow } from "lucide-react";
import { profile, projects } from "../data/portfolio";
import { SectionReveal } from "./SectionReveal";

export const ProjectsSection = () => {
  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <SectionReveal className="flex flex-col justify-between gap-6 text-left md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Selected work</p>
            <h2 className="section-title mt-3">AI and automation projects now lead the portfolio.</h2>
            <p className="mt-5 text-muted-foreground">
              The work is organized around high-leverage systems: AI agents, webhook orchestration, API-connected workflows, and full-stack product foundations.
            </p>
          </div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="secondary-button inline-flex items-center justify-center gap-2">
            More on GitHub
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </SectionReveal>

        <div className="mt-12 grid gap-8">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} reverse={index % 2 === 1} delay={index * 120} />
          ))}
        </div>

        <SectionReveal className="mt-16 flex items-end justify-between gap-6 text-left">
          <div>
            <p className="section-eyebrow">Product foundations</p>
            <h3 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">More full-stack and product UI work.</h3>
          </div>
        </SectionReveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project, index) => (
            <StandardProjectCard key={project.id} project={project} delay={index * 80} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProjectCard = ({ project, reverse = false, delay = 0 }) => (
  <SectionReveal as="article" delay={delay} className="overflow-hidden rounded-[2rem] border border-primary/25 bg-card/75 shadow-2xl shadow-primary/5 backdrop-blur">
    <div className={`grid min-h-[520px] ${reverse ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"}`}>
      <div className={`relative overflow-hidden bg-secondary/25 p-6 ${reverse ? "lg:order-2" : ""}`}>
        <div className="absolute inset-0 grid-overlay opacity-45" />
        <div className="absolute inset-x-10 top-10 h-40 rounded-full bg-primary/20 blur-3xl" />
        {project.type === "agent" ? <AgentVisual project={project} /> : <WorkflowVisual project={project} />}
      </div>

      <div className="flex flex-col justify-center p-8 text-left lg:p-10">
        <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-primary">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          {project.kicker}
        </div>
        <h3 className="text-3xl font-black tracking-tight md:text-5xl">{project.title}</h3>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{project.description}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {project.highlights.map((highlight) => (
            <div key={highlight} className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 p-3 text-sm font-semibold">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {highlight}
            </div>
          ))}
        </div>

        <TagList tags={project.tags} />
        <ProjectLinks project={project} className="mt-8" />
      </div>
    </div>
  </SectionReveal>
);

const WorkflowVisual = ({ project }) => (
  <div className="relative flex h-full min-h-[430px] flex-col justify-center">
    <div className="mx-auto w-full max-w-md rounded-[1.5rem] border border-border bg-background/80 p-5 shadow-2xl backdrop-blur">
      <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-2 font-bold">
          <Workflow className="h-5 w-5 text-primary" aria-hidden="true" />
          Make.com Scenario
        </div>
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">Live flow</span>
      </div>
      <div className="space-y-4">
        {project.visualNodes.map((node, index) => (
          <div key={node} className="relative">
            {index < project.visualNodes.length - 1 && <span className="absolute left-6 top-12 h-6 w-px bg-primary/40" />}
            <div className="flex items-center gap-4 rounded-2xl border border-primary/15 bg-card/80 p-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <Network className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold">{node}</p>
                <p className="text-sm text-muted-foreground">Step {index + 1}: automated handoff</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AgentVisual = ({ project }) => (
  <div className="relative flex h-full min-h-[430px] flex-col justify-center">
    <div className="mx-auto w-full max-w-md rounded-[1.5rem] border border-border bg-background/80 p-5 shadow-2xl backdrop-blur">
      <div className="mb-5 flex items-center gap-3 border-b border-border pb-4">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-primary-foreground">
          <Bot className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="font-bold">Relevance AI Agent</p>
          <p className="text-sm text-muted-foreground">Conversational tools + workflow reasoning</p>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card/80 p-4">
        <p className="text-sm text-muted-foreground">Agent message</p>
        <p className="mt-2 font-semibold">I can qualify requests, reason over context, and trigger the right tool action.</p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {project.visualNodes.map((node) => (
          <div key={node} className="rounded-2xl border border-primary/15 bg-primary/10 p-4 text-center text-sm font-bold text-primary">
            {node}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const StandardProjectCard = ({ project, delay = 0 }) => (
  <SectionReveal as="article" delay={delay} className="spotlight-card group overflow-hidden text-left">
    <div className="h-52 overflow-hidden bg-secondary/30">
      {project.image ? (
        <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      ) : (
        <div className="grid h-full place-items-center grid-overlay text-primary">{project.title}</div>
      )}
    </div>
    <div className="p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{project.kicker}</p>
      <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>
      <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>
      <TagList tags={project.tags} compact />
      <ProjectLinks project={project} className="mt-6" />
    </div>
  </SectionReveal>
);

const TagList = ({ tags, compact = false }) => (
  <div className={`flex flex-wrap gap-2 ${compact ? "mt-5" : "mt-6"}`}>
    {tags.map((tag) => (
      <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/15">
        {tag}
      </span>
    ))}
  </div>
);

const ProjectLinks = ({ project, className = "" }) => (
  <div className={`flex flex-wrap gap-3 ${className}`}>
    {project.demoURL && (
      <a href={project.demoURL} target="_blank" rel="noopener noreferrer" className="project-link">
        Live / Demo <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
    )}
    {project.githubURL && (
      <a href={project.githubURL} target="_blank" rel="noopener noreferrer" className="project-link">
        Source <Github className="h-4 w-4" aria-hidden="true" />
      </a>
    )}
  </div>
);
