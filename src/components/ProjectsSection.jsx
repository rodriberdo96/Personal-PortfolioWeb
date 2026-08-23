import { ArrowRight, CheckCircle2, ExternalLink, Github, Globe, MapPin, Sparkles, Terminal, Workflow } from "lucide-react";
import { profile, projects } from "../data/portfolio";
import { SectionReveal } from "./SectionReveal";

export const ProjectsSection = () => {
  // Flagship featured project: Buenos Aires Movil
  const flagshipProject = projects.find((p) => p.id === "buenos-aires-movil") || projects[0];
  // Other featured projects
  const otherFeatured = projects.filter((p) => p.id !== "buenos-aires-movil" && p.type && (p.type === "client" || p.type === "automation"));
  // Remaining web and full-stack projects
  const standardProjects = projects.filter((p) => p.id !== "buenos-aires-movil" && p.id !== "ai-real-estate-chatbot");
  const automationProjects = projects.filter((p) => p.type === "automation" || p.id === "ai-agent-tools-platform");

  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <SectionReveal className="flex flex-col justify-between gap-6 text-left md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Featured Client Work &amp; Products</p>
            <h2 className="section-title mt-3">Production web applications &amp; client platforms.</h2>
            <p className="mt-5 text-muted-foreground">
              Engineered with modern web standards, fluid UI/UX, robust backend architecture, and measurable business impact.
            </p>
          </div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="secondary-button inline-flex items-center justify-center gap-2">
            View GitHub Archive
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </SectionReveal>

        {/* Flagship Hero Project: Buenos Aires Movil */}
        <div className="mt-12">
          <FlagshipProjectCard project={flagshipProject} />
        </div>

        {/* Web Development & Client Platforms */}
        <SectionReveal className="mt-20 flex items-end justify-between gap-6 text-left">
          <div>
            <p className="section-eyebrow">Full Stack Applications</p>
            <h3 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Client websites, platforms &amp; web apps.</h3>
          </div>
        </SectionReveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {standardProjects.map((project, index) => (
            <StandardProjectCard key={project.id} project={project} delay={index * 80} />
          ))}
        </div>

        {/* Secondary Section: Automation & Systems */}
        {automationProjects.length > 0 && (
          <>
            <SectionReveal className="mt-20 flex items-end justify-between gap-6 text-left">
              <div>
                <p className="section-eyebrow">Integration &amp; Automation</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">Workflow &amp; API automation systems.</h3>
              </div>
            </SectionReveal>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {automationProjects.map((project, index) => (
                <AutomationProjectCard key={project.id} project={project} delay={index * 80} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const FlagshipProjectCard = ({ project }) => (
  <SectionReveal as="article" className="overflow-hidden rounded-[2.5rem] border border-primary/30 bg-card/85 shadow-2xl shadow-primary/10 backdrop-blur">
    <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
      {/* Visual / Screenshot Side */}
      <div className="relative overflow-hidden bg-gradient-to-br from-card via-background to-secondary/40 p-6 lg:p-8 flex flex-col justify-center">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute inset-x-10 top-10 h-40 rounded-full bg-primary/20 blur-3xl" />
        
        {/* Browser Mockup Frame */}
        <div className="relative mx-auto w-full rounded-2xl border border-border bg-background/95 shadow-2xl overflow-hidden">
          {/* Browser Top Bar */}
          <div className="flex items-center justify-between border-b border-border bg-card/90 px-4 py-3">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1 text-xs font-mono text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              https://buenosairesmovil.com.ar
            </div>
            <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-bold text-primary">LIVE</span>
          </div>

          {/* Screenshot Image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-black group">
            <img
              src="/projects/BAMovil_Website.jpg"
              alt="Buenos Aires Móvil Website Preview"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
              <div>
                <p className="text-sm font-bold text-white">Interactive Leaflet Coverage Map</p>
                <p className="text-xs text-white/70">AMBA Urban Advertising Network</p>
              </div>
              <a
                href={project.demoURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
              >
                Visit Site <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Node badges */}
        <div className="mt-5 grid grid-cols-5 gap-2">
          {project.visualNodes?.map((node) => (
            <div key={node} className="flex items-center justify-center gap-1 rounded-xl border border-primary/20 bg-primary/10 py-2 text-center text-xs font-bold text-primary">
              <MapPin className="h-3 w-3 shrink-0" />
              <span className="truncate">{node}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Side */}
      <div className="flex flex-col justify-center p-8 text-left lg:p-12">
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.24em] text-primary">
          <Globe className="h-3.5 w-3.5" aria-hidden="true" />
          {project.kicker}
        </div>
        <h3 className="text-3xl font-black tracking-tight md:text-4xl text-foreground">{project.title}</h3>
        <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">{project.description}</p>

        <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {project.highlights?.map((highlight) => (
            <div key={highlight} className="flex items-center gap-2.5 rounded-xl border border-border bg-background/60 p-2.5 text-sm font-semibold">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <TagList tags={project.tags} />
        <ProjectLinks project={project} className="mt-8" />
      </div>
    </div>
  </SectionReveal>
);

const StandardProjectCard = ({ project, delay = 0 }) => (
  <SectionReveal as="article" delay={delay} className="spotlight-card group overflow-hidden text-left flex flex-col justify-between">
    <div>
      <div className="h-52 overflow-hidden bg-secondary/30 relative">
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="grid h-full place-items-center grid-overlay text-primary font-bold">{project.title}</div>
        )}
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{project.kicker}</p>
        <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
        <TagList tags={project.tags} compact />
      </div>
    </div>
    <div className="px-6 pb-6">
      <ProjectLinks project={project} className="mt-2" />
    </div>
  </SectionReveal>
);

const AutomationProjectCard = ({ project, delay = 0 }) => (
  <SectionReveal as="article" delay={delay} className="spotlight-card p-6 text-left flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
          {project.kicker}
        </span>
        <Workflow className="h-5 w-5 text-primary" />
      </div>
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
      <TagList tags={project.tags} compact />
    </div>
    <div className="mt-6">
      <ProjectLinks project={project} />
    </div>
  </SectionReveal>
);

const TagList = ({ tags, compact = false }) => (
  <div className={`flex flex-wrap gap-2 ${compact ? "mt-4" : "mt-6"}`}>
    {tags.map((tag) => (
      <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
        {tag}
      </span>
    ))}
  </div>
);

const ProjectLinks = ({ project, className = "" }) => (
  <div className={`flex flex-wrap gap-3 ${className}`}>
    {project.demoURL && (
      <a href={project.demoURL} target="_blank" rel="noopener noreferrer" className="project-link">
        Live Website <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
    )}
    {project.githubURL && (
      <a href={project.githubURL} target="_blank" rel="noopener noreferrer" className="project-link">
        Code Repository <Github className="h-4 w-4" aria-hidden="true" />
      </a>
    )}
  </div>
);
