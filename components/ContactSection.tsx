"use client";

import { useEffect, useState } from "react";
import { Check, GraduationCap, Mail, MapPin } from "lucide-react";

const links = [
  { label: "Neurobionics Lab", href: "https://neurobionics.robotics.umich.edu/" },
  {
    label: "University of Michigan",
    href: "https://me.engin.umich.edu/people/faculty/elliott-rouse/",
  },
  { label: "Publications", href: "https://neurobionics.robotics.umich.edu/research/publications/" },
];

export function ContactSection() {
  const [showCursor, setShowCursor] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="bg-ink py-24">
      <div className="section-shell">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-copper text-xs tracking-widest font-medium">CONTACT</p>
            <h2 className="mb-8 text-paper text-5xl font-black uppercase leading-none md:text-6xl">
              CONNECT WITH
              <br />
              THE LAB
              <span
                className={`ml-1 text-primary transition-opacity duration-100 ${showCursor ? "opacity-100" : "opacity-0"}`}
              >
                |
              </span>
            </h2>
            <p className="mb-12 max-w-sm text-base leading-relaxed text-paper/50">
              Whether you&apos;re a prospective student, industry partner, clinician, or just
              curious about the work — the lab is open to conversation.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-paper/70 text-sm">ejrouse@umich.edu</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-paper/70 text-sm">Ford Robotics Building, Ann Arbor</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-paper/70 text-sm">University of Michigan</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-paper/50 text-xs tracking-widest uppercase">
                Name
              </label>
              <input
                id="contact-name"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Your name"
                className="w-full rounded-lg border border-paper/10 bg-panel px-4 py-3 text-paper transition-colors duration-300 placeholder:text-paper/20 focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-paper/50 text-xs tracking-widest uppercase">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-paper/10 bg-panel px-4 py-3 text-paper transition-colors duration-300 placeholder:text-paper/20 focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-paper/50 text-xs tracking-widest uppercase">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                placeholder="Tell us what you're interested in..."
                className="w-full rounded-lg border border-paper/10 bg-panel px-4 py-3 text-paper transition-colors duration-300 placeholder:text-paper/20 focus:border-primary focus:outline-none"
              />
            </div>

            <button
              type="button"
              onClick={() => setSubmitted(true)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-ink font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-copper"
            >
              {submitted ? (
                <>
                  <Check className="h-4 w-4" /> Message Sent
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-8 border-t border-paper/10 pt-8">
          <div className="flex gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-paper/40 text-sm transition-colors duration-300 hover:text-primary"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <p className="text-paper/20 text-xs">© 2025 Elliott J. Rouse</p>
        </div>
      </div>
    </section>
  );
}
