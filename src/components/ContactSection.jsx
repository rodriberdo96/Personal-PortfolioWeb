import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";
import { cn } from "../lib/utils";

const encodeFormData = (formData) => new URLSearchParams(formData).toString();

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
        description: "Please email me directly at rodriberdomas@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out via email or connect with me on social media.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex gap-3 items-center">
                <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:rodriberdomas@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    rodriberdomas@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+5491134450448" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    +54 9 11 3445-0448
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground text-sm">Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium">Connect With Me</h4>
                  <a
                    href="https://www.linkedin.com/in/rodrigoberdomas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2"
                  >
                    LinkedIn
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form
              className="space-y-6 text-left"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label htmlFor="bot-field">
                  Don&apos;t fill this out: <input id="bot-field" name="bot-field" tabIndex="-1" autoComplete="off" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I would like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2", isSubmitting && "opacity-70 cursor-not-allowed")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
