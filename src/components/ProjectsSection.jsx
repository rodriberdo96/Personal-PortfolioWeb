import { ArrowRight, Bot, CheckCircle2, ExternalLink, Github, Network, Sparkles, Workflow, Zap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { profile, projects } from "../data/portfolio";
import { ParallaxTilt } from "./ParallaxTilt";
import { SectionReveal } from "./SectionReveal";
import { SplitTextReveal } from "./SplitTextReveal";

export const ProjectsSection = () => {
  const { t, lang } = useLanguage();

  const isFeaturedProject = (project) =>
    project?.type && Array.isArray(project?.highlights) && Array.isArray(project?.visualNodes);

  const featuredProjects = projects.filter(isFeaturedProject).slice(0, 3);
  const featuredProjectIds = new Set(featuredProjects.map((project) => project.id));
  const otherProjects = projects.filter((project) => !featuredProjectIds.has(project.id));

  const getProjectTranslation = (id, defaultValues) => {
    const keyMap = {
      "ai-website-builder": t.projects.items.aiBuilder,
      "ai-real-estate-chatbot": t.projects.items.chatbot,
      "ai-agent-tools-platform": t.projects.items.agent,
      "ecommerce-fullstack": t.projects.items.ecommerce,
      "api-backend-ecommerce": t.projects.items.backend,
      "interior-design-portfolio": t.projects.items.interior,
      "personal-portfolio": t.projects.items.portfolio,
      "monorepo-ecommerce": t.projects.items.monorepo,
    };
    return keyMap[id] || defaultValues;
  };

  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <SectionReveal className="flex flex-col justify-between gap-6 text-left md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.projects.eyebrow}</p>
            <SplitTextReveal
              text={t.projects.title}
              className="section-title mt-3"
              delay={100}
            />
            <p className="mt-5 text-muted-foreground">
              {t.projects.description}
            </p>
          </div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="secondary-button inline-flex items-center justify-center gap-2">
            {t.projects.moreGithub}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </SectionReveal>

        {featuredProjects.length > 0 && (
          <div className="mt-12 grid gap-8">
            {featuredProjects.map((project, index) => {
              const trans = getProjectTranslation(project.id, project);
              const translatedProject = { ...project, ...trans };
              return (
                <FeaturedProjectCard key={project.id} project={translatedProject} reverse={index % 2 === 1} delay={index * 120} />
              );
            })}
          </div>
        )}

        <SectionReveal className="mt-16 flex items-end justify-between gap-6 text-left">
          <div>
            <p className="section-eyebrow">{t.projects.eyebrowSub}</p>
            <h3 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">{t.projects.titleSub}</h3>
          </div>
        </SectionReveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project, index) => {
            const trans = getProjectTranslation(project.id, project);
            const translatedProject = { ...project, ...trans };
            return (
              <StandardProjectCard key={project.id} project={translatedProject} delay={index * 80} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FeaturedProjectCard = ({ project, reverse = false, delay = 0 }) => {
  const { lang } = useLanguage();

  const getHighlightTranslation = (text) => {
    if (lang === "es") {
      const map = {
        "WhatsApp lead intake": "Ingreso por WhatsApp",
        "Webhook integrations": "Integración por webhooks",
        "Async workflow logic": "Lógica asíncrona de flujos",
        "Lead qualification": "Calificación de leads",
        "API orchestration": "Orquestación de APIs",
        "Conversational automation": "Automatización conversacional",
        "AI agents": "Agentes de IA",
        "Conversational AI": "IA conversacional",
        "Tool integrations": "Integraciones de herramientas",
        "Reasoning flows": "Flujos de razonamiento",
        "Automation pipelines": "Líneas de automatización",
        "Intelligent orchestration": "Orquestación inteligente",
      };
      return map[text] || text;
    }
    return text;
  };

  const getVisualNodeTranslation = (node) => {
    if (lang === "es") {
      const map = {
        "WhatsApp Lead": "Lead WhatsApp",
        "Webhook": "Webhook",
        "Qualification Logic": "Lógica Calificación",
        "CRM/API": "CRM/API",
        "Follow-up": "Seguimiento",
        "Agent": "Agente",
        "Tools": "Herramientas",
        "Memory": "Memoria",
        "Reasoning": "Razonamiento",
        "API Actions": "Acciones API",
      };
      return map[node] || node;
    }
    return node;
  };

  const translatedHighlights = project.highlights.map(getHighlightTranslation);
  const translatedVisualNodes = project.visualNodes.map(getVisualNodeTranslation);

  const translatedProject = {
    ...project,
    highlights: translatedHighlights,
    visualNodes: translatedVisualNodes,
  };

  return (
    <SectionReveal as="article" delay={delay}>
      <ParallaxTilt className="overflow-hidden rounded-[2rem] border border-primary/25 bg-card/75 shadow-2xl shadow-primary/5 backdrop-blur" intensity={3}>
        <div className={`grid min-h-[520px] ${reverse ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"}`}>
          <div className={`relative overflow-hidden bg-secondary/25 p-6 ${reverse ? "lg:order-2" : ""}`}>
            <div className="absolute inset-0 grid-overlay opacity-45" />
            <div className="absolute inset-x-10 top-10 h-40 rounded-full bg-primary/15 blur-3xl" />
            {translatedProject.type === "agent" ? (
              <AgentVisual project={translatedProject} />
            ) : (
              <WorkflowVisual project={translatedProject} />
            )}
          </div>

          <div className="flex flex-col justify-center p-8 text-left lg:p-10">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-primary">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {translatedProject.kicker}
            </div>
            <h3 className="text-3xl font-black tracking-tight md:text-5xl">{translatedProject.title}</h3>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{translatedProject.description}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {translatedProject.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 p-3 text-sm font-semibold">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {highlight}
                </div>
              ))}
            </div>

            <TagList tags={translatedProject.tags} />
            <ProjectLinks project={translatedProject} className="mt-8" />
          </div>
        </div>
      </ParallaxTilt>
    </SectionReveal>
  );
};

const WorkflowVisual = ({ project }) => {
  const { lang } = useLanguage();
  return (
    <div className="relative flex h-full min-h-[430px] flex-col justify-center">
      <div className="mx-auto w-full max-w-md rounded-[1.5rem] border border-border bg-background/80 p-5 shadow-2xl backdrop-blur">
        <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2 font-bold">
            <Workflow className="h-5 w-5 text-primary" aria-hidden="true" />
            {lang === "es" ? "Escenario de Make.com" : "Make.com Scenario"}
          </div>
          <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-primary">
            {lang === "es" ? "Flujo activo" : "Live flow"}
          </span>
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
                  <p className="text-sm text-muted-foreground">
                    {lang === "es" ? `Paso ${index + 1}: transferencia` : `Step ${index + 1}: automated handoff`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AgentVisual = ({ project }) => {
  const { lang } = useLanguage();
  return (
    <div className="relative flex h-full min-h-[430px] flex-col justify-center">
      <div className="mx-auto w-full max-w-md rounded-[1.5rem] border border-border bg-background/80 p-5 shadow-2xl backdrop-blur">
        <div className="mb-5 flex items-center gap-3 border-b border-border pb-4">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-primary-foreground">
            <Bot className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-bold">{lang === "es" ? "Agente de Relevance AI" : "Relevance AI Agent"}</p>
            <p className="text-sm text-muted-foreground">
              {lang === "es" ? "Herramientas conversacionales + razonamiento" : "Conversational tools + workflow reasoning"}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card/80 p-4">
          <p className="text-sm text-muted-foreground">{lang === "es" ? "Mensaje del agente" : "Agent message"}</p>
          <p className="mt-2 font-semibold">
            {lang === "es"
              ? "Puedo calificar solicitudes, razonar sobre el contexto y disparar la acción indicada."
              : "I can qualify requests, reason over context, and trigger the right tool action."}
          </p>
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
};

const StandardProjectCard = ({ project, delay = 0 }) => (
  <SectionReveal as="article" delay={delay} className="text-left">
    <div className="spotlight-card shimmer-border group overflow-hidden">
      <div className="h-52 overflow-hidden bg-secondary/30">
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
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
