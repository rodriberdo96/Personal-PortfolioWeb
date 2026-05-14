import { Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/portfolio";
import { useToast } from "../hooks/use-toast";
import { cn } from "../lib/utils";
import { SectionReveal } from "./SectionReveal";

const encodeFormData = (formData) => new URLSearchParams(formData).toString();

const contactCards = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: Phone },
  { label: "Location", value: profile.location, icon: MapPin },
];

const projectTypes = ["AI workflow", "Full-stack app", "Automation system", "API integration"];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(formData),
      });

      if (!response.ok) {
        throw new Error("Unable to submit contact form");
      }

      toast({
        title: "Message sent",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      form.reset();
    } catch {
      toast({
        title: "Message not sent",
        description: `Please email me directly at ${profile.email}.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <SectionReveal className="overflow-hidden rounded-[2rem] border border-primary/20 bg-card/80 shadow-2xl shadow-primary/5 backdrop-blur">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden bg-linear-to-br from-primary/20 via-card to-cyan-400/10 p-8 text-left lg:p-10">
              <div className="absolute inset-0 grid-overlay opacity-35" />
              <div className="relative">
                <p className="section-eyebrow">Contact</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Open to freelance, remote and AI automation opportunities.</h2>
                <p className="mt-5 leading-7 text-muted-foreground">
                  Send me the workflow, SaaS idea, integration challenge, or product interface you want to build. I&apos;ll respond with a practical path for turning it into a polished, production-ready system.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <span key={type} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                      {type}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-4">
                  {contactCards.map((card) => {
                    const ContactIcon = card.icon;

                    return (
                      <div key={card.label} className="flex items-center gap-4 rounded-2xl border border-border bg-background/70 p-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <ContactIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{card.label}</p>
                          {card.href ? (
                            <a href={card.href} className="font-semibold hover:text-primary">
                              {card.value}
                            </a>
                          ) : (
                            <p className="font-semibold">{card.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 flex gap-3">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Open GitHub profile">
                    <Github className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Open LinkedIn profile">
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a href={`mailto:${profile.email}`} className="social-icon" aria-label="Send email">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <form className="space-y-5 p-8 text-left lg:p-10" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label htmlFor="bot-field">
                  Don&apos;t fill this out: <input id="bot-field" name="bot-field" tabIndex="-1" autoComplete="off" />
                </label>
              </p>

              <div className="rounded-2xl border border-border bg-background/60 p-4 text-sm text-muted-foreground">
                <Sparkles className="mb-2 h-5 w-5 text-primary" aria-hidden="true" />
                Best fit: AI workflow builds, automation systems, API integrations, React dashboards, and startup landing pages.
              </div>

              <FormField id="name" label="Your name" autoComplete="name" placeholder="Jane Founder" />
              <FormField id="email" label="Email address" type="email" autoComplete="email" placeholder="you@example.com" />

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className="form-input resize-none"
                  placeholder="Tell me about the workflow, API, app, agent, timeline, and success metric you have in mind..."
                />
              </div>

              <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full justify-center gap-2", isSubmitting && "cursor-not-allowed opacity-70")}>
                {isSubmitting ? "Sending..." : "Send project brief"}
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

const FormField = ({ id, label, type = "text", autoComplete, placeholder }) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-semibold">
      {label}
    </label>
    <input id={id} name={id} type={type} required className="form-input" autoComplete={autoComplete} placeholder={placeholder} />
  </div>
);
