# Rodrigo Berdomas Portfolio

A responsive personal portfolio built with React, Vite, and Tailwind CSS. The site highlights Rodrigo Berdomas' web development projects, skills, contact details, and downloadable CV.

**Live site:** <https://rodriberdomasportfolio.netlify.app/>

## Features

- Responsive single-page layout with smooth anchor navigation.
- Light and dark themes with persisted user preference.
- Animated star-field background with reduced-motion support.
- Project cards with live demo and source-code links.
- Netlify-ready contact form with honeypot spam protection.
- SEO and social sharing metadata in `index.html`.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- React Router
- Lucide React icons
- Radix UI Toast

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
  components/   Reusable portfolio sections and UI primitives
  hooks/        Toast state hook
  lib/          Shared utilities
  pages/        Route-level pages
public/         Static images, project screenshots, and CV
```

## Deployment Notes

The contact form is configured for Netlify Forms. Keep the hidden `contact` form in `index.html` so Netlify can detect the form during deploy builds.
