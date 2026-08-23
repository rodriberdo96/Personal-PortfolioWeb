import { Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { profile } from "../data/portfolio";
import { useToast } from "../hooks/use-toast";
import { cn } from "../lib/utils";
import { SectionReveal } from "./SectionReveal";
import { SplitTextReveal } from "./SplitTextReveal";

const encodeFormData = (formData) => new URLSearchParams(formData).toString();

export const ContactSection = () => {
  const { t, lang } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactCards = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: "WhatsApp", value: profile.phone, href: profile.phoneHref, icon: Phone },
    { label: "Location", value: profile.location, icon: MapPin },
  ];

  const getCardLabel = (label) => {
    if (lang === "es") {
      const map = {
        Email: "Correo",
        WhatsApp: "WhatsApp",
        Location: "Ubicación",
      };
      return map[label] || label;
    }
    return label;
  };

  const getProjectTypes = () => {
    if (lang === "es") {
      return ["Sitio Web de Cliente", "App Web Full-Stack", "API Backend", "E-Commerce", "Rediseño UI/UX"];
    }
    return ["Client Website", "Full-Stack Web App", "API Backend", "E-Commerce", "UI/UX Redesign"];
  };

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
        title: lang === "es" ? "Mensaje enviado" : "Message sent",
        description: lang === "es" ? "¡Gracias por escribir! Te responderé pronto." : "Thank you for reaching out! I'll get back to you soon.",
      });
      form.reset();
    } catch {
      toast({
        title: lang === "es" ? "Mensaje no enviado" : "Message not sent",
        description: lang === "es" ? `Por favor escríbeme directamente a ${profile.email}.` : `Please email me directly at ${profile.email}.`,
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
            <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-card to-amber-500/10 p-8 text-left lg:p-10">
              <div className="absolute inset-0 grid-overlay opacity-35" />
              <div className="relative">
                <p className="section-eyebrow">{t.contact.eyebrow}</p>
                <SplitTextReveal
                  text={t.contact.title}
                  className="mt-3 text-4xl font-black tracking-tight md:text-5xl"
                  delay={200}
                />
                <p className="mt-5 leading-7 text-muted-foreground">
                  {t.contact.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {getProjectTypes().map((type) => (
                    <span key={type} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                      {type}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-4">
                  {contactCards.map((card) => {
                    const ContactIcon = card.icon;

                    return (
                      <div key={card.label} className="flex items-center gap-4 rounded-2xl border border-border bg-background/70 p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-sm">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <ContactIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{getCardLabel(card.label)}</p>
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
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-icon glow-icon" aria-label="Open GitHub profile">
                    <Github className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon glow-icon" aria-label="Open LinkedIn profile">
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a href={`mailto:${profile.email}`} className="social-icon glow-icon" aria-label="Send email">
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
                {t.contact.formHelp}
              </div>

              <FormField id="name" label={t.contact.labelName} autoComplete="name" placeholder={t.contact.placeholderName} />
              <FormField id="email" label={t.contact.labelEmail} type="email" autoComplete="email" placeholder={t.contact.placeholderEmail} />

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                  {t.contact.labelDetails}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className="form-input form-input-glow resize-none"
                  placeholder={t.contact.placeholderDetails}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full justify-center gap-2", isSubmitting && "cursor-not-allowed opacity-70")}
              >
                {isSubmitting ? t.contact.sending : t.contact.submit}
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
    <input id={id} name={id} type={type} required className="form-input form-input-glow" autoComplete={autoComplete} placeholder={placeholder} />
  </div>
);
