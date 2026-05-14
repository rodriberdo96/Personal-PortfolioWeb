# Rodrigo Berdomás Portfolio

A premium AI-startup-inspired portfolio for Rodrigo Berdomás, positioned around AI-powered full stack development, automation engineering, workflow orchestration, API integrations, and modern React product interfaces.

**Live site:** <https://rodriberdomasportfolio.netlify.app/>

## Features

- Dark-first single-page portfolio with smooth anchor navigation and responsive mobile menu.
- AI/automation-forward hero with animated role rotation, workflow terminal visual, availability badge, and recruiter CTAs.
- Centralized portfolio content in `src/data/portfolio.js` for easier project, skill, service, and experience updates.
- Featured AI project case studies for Make.com real estate chatbot automation and Relevance AI agent/tool orchestration.
- Categorized skill panels for frontend, backend, Automation & AI, and tools, plus animated tech marquee.
- Modern experience timeline focused on software engineering, automation, AI-assisted development, and technical problem solving.
- Premium contact section with Netlify Forms support, honeypot spam protection, and opportunity-focused messaging.
- SEO/Open Graph metadata tuned for AI-powered full stack and automation engineering.
- Reduced-motion-aware CSS animations, reveal transitions, animated grid backgrounds, glass cards, and glowing accents.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- React Router
- Lucide React icons
- Radix UI Toast

> Note: Framer Motion was requested for animation polish, but the package registry returned `403 Forbidden` for `framer-motion` in this environment. The current implementation uses performant CSS and IntersectionObserver-powered reveal animations instead.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

```text
src/
  components/   Portfolio sections, reveal utilities, and UI primitives
  data/         Profile, nav, skills, services, projects, and experience content
  hooks/        Toast state hook
  lib/          Shared utilities
  pages/        Route-level pages
public/         Static images, project screenshots, and CV
```

## Deployment Notes

The contact form is configured for Netlify Forms. Keep the hidden `contact` form in `index.html` so Netlify can detect the form during deploy builds.
