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
  role: "Full Stack Web Developer & Engineer",
  roles: ["Full Stack Developer", "React Developer", "Web Engineer", "Frontend Developer"],
  location: "Buenos Aires, Argentina",
  email: "rodriberdomas@gmail.com",
  phone: "+54 9 11 3445-0448",
  phoneHref: "https://wa.me/5491134450448?text=Hi%20Rodrigo,%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!",
  cv: "/Rodrigo Berdomas CV English (2).pdf",
  avatar: "/FotoPersonal.jpeg",
  linkedin: "https://www.linkedin.com/in/rodrigoberdomas/",
  github: "https://github.com/rodriberdo96",
};

export const impactStats = [
  { value: "4+", label: "years building products" },
  { value: "15+", label: "projects shipped" },
  { value: "3", label: "client websites live" },
];

export const services = [
  {
    title: "Full Stack Web Development",
    description:
      "React frontends, Node.js APIs, authentication, data flows, and deployment-ready interfaces engineered around real product goals and business outcomes.",
  },
  {
    title: "Client Websites & Landing Pages",
    description:
      "Premium websites for businesses, startups, and brands — built for performance, conversion, and a polished first impression that builds trust.",
  },
  {
    title: "API & Integration Engineering",
    description:
      "REST APIs, third-party service integrations, asynchronous workflows, and clean backend architecture designed for reliability and scalability.",
  },
  {
    title: "Automation & Workflow Systems",
    description:
      "Make.com, n8n, webhooks, and workflow orchestration that eliminates repetitive tasks and connects systems into efficient business operations.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    summary: "Product interfaces, landing pages, dashboards, and responsive component systems.",
    skills: ["React", "TypeScript", "JavaScript", "TailwindCSS", "HTML/CSS", "Vite"],
  },
  {
    title: "Backend",
    summary: "API foundations for authentication, commerce, data models, and integrations.",
    skills: ["Node.js", "Express", "MongoDB", "SQL", "Spring Boot", "JWT"],
  },
  {
    title: "Tools & Deployment",
    summary: "Shipping workflows for modern cloud-ready products and collaboration.",
    skills: ["Docker", "Git/GitHub", "Postman", "Vercel", "Render", "AWS concepts", "Leaflet"],
  },
  {
    title: "Automation & AI",
    summary: "Workflow orchestration, webhooks, and API-connected business logic.",
    skills: ["Make.com", "n8n", "AI Agents", "Relevance AI", "Webhooks", "REST APIs", "JSON", "Workflow Automation"],
  },
];

export const marqueeSkills = [
  "React",
  "TypeScript",
  "Node.js",
  "TailwindCSS",
  "REST APIs",
  "Leaflet",
  "MongoDB",
  "Vite",
  "Docker",
  "Vercel",
  "Make.com",
  "n8n",
];

export const projects = [
  {
    id: "buenos-aires-movil",
    title: "Buenos Aires Móvil — OOH Advertising Platform",
    kicker: "Featured client website",
    type: "client",
    description:
      "Complete website redesign for a Buenos Aires outdoor advertising company. Built a premium dark-mode marketing site with an interactive Leaflet coverage map, route explorer, service showcases, client testimonials, and a conversion-optimized contact flow — transforming their digital presence into a lead-generation engine.",
    highlights: ["Interactive coverage map", "Bus route explorer", "Lead generation UX", "Dark-mode premium design", "Responsive mobile-first", "Real client project"],
    tags: ["TypeScript", "React", "TailwindCSS", "Leaflet", "Framer Motion", "TanStack Router", "Vercel"],
    image: "/projects/BAMovil_Website.jpg",
    demoURL: "https://www.buenosairesmovil.com.ar",
    visualNodes: ["Hero", "Servicios", "Cobertura", "Casos", "Contacto"],
  },
  {
    id: "ai-website-builder",
    title: "AI Website Builder Pro",
    kicker: "Full-stack SaaS product",
    description:
      "Full-stack website builder that generates complete, responsive websites from natural language prompts. Built with React, Node.js, and integrated AI services for intelligent page generation, real-time preview, and one-click deployment.",
    image: "/projects/ai-site-builder.png",
    tags: ["React", "TypeScript", "Node.js", "AI", "Vite", "Full Stack"],
    demoURL: "https://webbuilderproai.netlify.app",
    githubURL: "https://github.com/rodriberdo96/AI-Site-Builder",
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
    id: "interior-design-portfolio",
    title: "Interior Design Portfolio",
    kicker: "Client website",
    description:
      "Elegant Squarespace website for an interior design brand, focused on refined visual storytelling, service presentation, project credibility, and a polished client-facing experience.",
    image: "/projects/HaksInterior.png",
    tags: ["Squarespace", "Web Design", "Client Website", "Responsive UX"],
    demoURL: "https://www.hakz.ae/",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio & Agency Landing",
    kicker: "Brand and conversion system",
    description:
      "A premium developer portfolio designed to showcase full-stack delivery, client projects, and engineering capabilities through modern web design and clean UX.",
    image: "/projects/Landing2.png",
    tags: ["React", "Vite", "TailwindCSS", "Netlify"],
    demoURL: "https://6a0cb8e7d1fc3200081abaca--landingro2.netlify.app/",
    githubURL: "https://github.com/rodriberdo96/landing_page",
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
    id: "monorepo-ecommerce",
    title: "Monorepo Ecommerce",
    kicker: "Scalable architecture",
    description:
      "Commerce architecture concept built around shared code, product modules, API contracts, and a clean path for scaling storefront and admin experiences.",
    image: "/projects/HousinLanding3.png",
    tags: ["Monorepo", "React", "Node.js", "APIs", "Architecture"],
    githubURL: "https://github.com/rodriberdo96",
  },
  {
    id: "ai-real-estate-chatbot",
    title: "Real Estate Chatbot Automation",
    kicker: "Automation system",
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
    title: "AI Agent & Tools Platform",
    kicker: "AI agent build",
    description:
      "AI agent platform created with Relevance AI, combining conversational AI, automated workflows, tool integrations, and reasoning flows inside a modern assistant experience.",
    image: "/projects/Landing2.png",
    tags: ["AI Agents", "Relevance AI", "Conversational AI", "Tool Integrations"],
    demoURL:
      "https://app.relevanceai.com/agents/bcbe5a/2c70d50e-b1ad-43b7-8e2f-553133c54366/8fd583db-993b-4e5a-bda0-bea5ebae9c63/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false",
  },
];
