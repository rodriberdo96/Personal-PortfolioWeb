import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/70 px-4 py-8 backdrop-blur">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-black">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">&copy; {new Date().getFullYear()} — Built with React, Tailwind CSS, automation-first thinking, and AI startup polish.</p>
        </div>

        <div className="flex items-center gap-3">
          <a href={`mailto:${profile.email}`} className="footer-link" aria-label="Send email">
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="Open GitHub profile">
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="Open LinkedIn profile">
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="#hero" className="footer-link bg-primary text-primary-foreground" aria-label="Back to top">
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};
