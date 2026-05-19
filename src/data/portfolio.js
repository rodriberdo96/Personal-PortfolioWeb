export const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const profile = {
  name: "Rodrigo Berdomás",
  shortName: "Rodri Berdomás",
  role: "AI-Powered Full Stack & Automation Engineer",
  roles: ["Full Stack Developer", "Automation Engineer", "AI Workflow Builder", "React Developer"],
  location: "Buenos Aires, Argentina",
  email: "rodriberdomas@gmail.com",
  phone: "+54 9 11 3445-0448",
  phoneHref: "tel:+5491134450448",
  cv: "/Rodrigo Berdomas CV English (2).pdf",
  avatar: "/FotoPersonal.jpeg",
  linkedin: "https://www.linkedin.com/in/rodrigoberdomas/",
  github: "https://github.com/rodriberdo96",
};

export const impactStats = [
  { value: "AI", label: "workflow-first engineering" },
  { value: "12+", label: "web and automation builds" },
  { value: "API", label: "integrations and scalable systems" },
];

export const services = [
  {
    title: "Full Stack Product Engineering",
    description:
      "React, Node.js, APIs, authentication, data flows, and deployment-ready interfaces shaped around product goals instead of generic pages.",
  },
  {
    title: "AI Workflow Automation",
    description:
      "Make.com, n8n, webhooks, JSON payloads, and AI-assisted flows that qualify leads, orchestrate systems, and remove repetitive work.",
  },
  {
    title: "API & Integration Systems",
    description:
      "REST APIs, third-party services, asynchronous workflow logic, and clean integration layers designed for reliable business operations.",
  },
  {
    title: "Automation-Ready SaaS UI",
    description:
      "Premium dashboards, landing pages, and internal tools with modern UX, clear feedback states, and conversion-focused storytelling.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    summary: "Product interfaces, landing pages, dashboards, and responsive component systems.",
    skills: ["React", "JavaScript", "TypeScript", "TailwindCSS", "HTML/CSS", "Vite"],
  },
  {
    title: "Backend",
    summary: "API foundations for authentication, commerce, data models, and integrations.",
    skills: ["Node.js", "Express", "MongoDB", "SQL", "Spring Boot", "JWT"],
  },
  {
    title: "Automation & AI",
    summary: "Workflow orchestration, AI agents, webhooks, and API-connected business logic.",
    skills: ["Make.com", "n8n", "AI Agents", "Relevance AI", "Webhooks", "REST APIs", "JSON", "API Integrations", "Workflow Automation"],
  },
  {
    title: "Tools",
    summary: "Shipping workflows for modern cloud-ready products and collaboration.",
    skills: ["Docker", "Git/GitHub", "Postman", "Vercel", "Render", "AWS concepts"],
  },
];

export const marqueeSkills = [
  "AI Agents",
  "Make.com",
  "n8n",
  "React",
  "Node.js",
  "REST APIs",
  "Webhooks",
  "Relevance AI",
  "MongoDB",
  "TailwindCSS",
  "Docker",
  "Vercel",
];

export const projects = [
  {
    id: "ai-real-estate-chatbot",
    title: "AI Real Estate Chatbot Automation",
    kicker: "Featured automation system",
    type: "automation",
    description:
      "Production-oriented WhatsApp automation workflow for real estate businesses using Make.com, APIs, webhooks, and workflow orchestration to qualify leads and route conversations faster.",
    highlights: ["WhatsApp lead intake", "Webhook integrations", "Async workflow logic", "Lead qualification", "API orchestration", "Conversational automation"],
    tags: ["AI", "Automation", "Make.com", "Webhooks", "APIs", "Lead Qualification", "Workflow Orchestration"],
    demoURL: "https://us2.make.com/public/shared-scenario/T7ggng2IDBn/chatbot-inmobiliario",
    visualNodes: ["WhatsApp Lead", "Webhook", "Qualification Logic", "CRM/API", "Follow-up"],
  },
  {
    id: "ai-agent-tools-platform",
    title: "AI Agent & AI Tools Platform",
    kicker: "Featured AI agent build",
    type: "agent",
    description:
      "AI agent platform created with Relevance AI, combining conversational AI, automated workflows, tool integrations, and reasoning flows inside a modern assistant experience.",
    highlights: ["AI agents", "Conversational AI", "Tool integrations", "Reasoning flows", "Automation pipelines", "Intelligent orchestration"],
    tags: ["AI Agents", "Relevance AI", "Conversational AI", "Tool Integrations", "Automation Pipelines"],
    demoURL:
      "https://app.relevanceai.com/agents/bcbe5a/2c70d50e-b1ad-43b7-8e2f-553133c54366/8fd583db-993b-4e5a-bda0-bea5ebae9c63/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false",
    visualNodes: ["Agent", "Tools", "Memory", "Reasoning", "API Actions"],
  },
  {
    id: "ecommerce-fullstack",
    title: "E-commerce Fullstack",
    kicker: "Full-stack product",
    description:
      "End-to-end commerce application with React, Node.js, authentication, cart logic, payments, order processing, and an admin-ready API foundation.",
    image: "/projects/food_del_webapp.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    githubURL: "https://github.com/rodriberdo96/Food_Delivery_App",
    demoURL: "https://fooddelapprodri.netlify.app/",
  },
  {
    id: "api-backend-ecommerce",
    title: "API Backend E-commerce",
    kicker: "Backend architecture",
    description:
      "API-first commerce backend focused on secure authentication, data modeling, product/order flows, and integration-ready endpoints for scalable storefronts.",
    image: "/projects/System_Course.png",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    githubURL: "https://github.com/rodriberdo96/Food_Delivery_App",
  },
  {
    id: "interior-design-portfolio",
    title: "Interior Design Portfolio",
    kicker: "Squarespace client website",
    description:
      "Elegant Squarespace website for an interior design brand, focused on refined visual storytelling, service presentation, project credibility, and a polished client-facing experience.",
    image: "/projects/HaksInterior.png",
    tags: ["Squarespace", "Web Design", "Client Website", "Responsive UX"],
    demoURL: "https://www.hakz.ae/",
  },
  {
    id: "personal-portfolio",
    title: "Creative Agency Landing Page",
    kicker: "Brand and conversion system",
    description:
      "Creative services landing page designed and developed with a modern responsive layout, smooth navigation, and visually engaging sections for services, portfolio, testimonials, and contact. Focused on clean UI design, user experience, and professional brand presentation using modern frontend development practices.",
    image: "/projects/Landing2.png",
    tags: ["React", "Vite", "TailwindCSS", "Netlify"],
    demoURL: "https://6a0cb8e7d1fc3200081abaca--landingro2.netlify.app/",
    githubURL: "https://github.com/rodriberdo96/landing_page",
  },
  {
    id: "monorepo-ecommerce",
    title: "Monorepo Ecommerce",
    kicker: "Scalable app foundation",
    description:
      "Commerce architecture concept built around shared code, product modules, API contracts, and a clean path for scaling storefront and admin experiences.",
    image: "/projects/HousinLanding3.png",
    tags: ["Monorepo", "React", "Node.js", "APIs", "Architecture"],
    githubURL: "https://github.com/rodriberdo96",
  },
];
