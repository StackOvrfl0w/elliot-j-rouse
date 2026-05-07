"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import gsap from "gsap";
import type { NavItem } from "@/content/portfolio";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type OverlayMenuProps = {
  navItems: NavItem[];
};

export function OverlayMenu({ navItems }: OverlayMenuProps) {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;

    if (!overlay || !panel) {
      return;
    }

    const duration = reducedMotion ? 0 : 0.55;

    if (open) {
      document.body.style.overflow = "hidden";
      gsap.set(overlay, { autoAlpha: 1, pointerEvents: "auto" });
      gsap.fromTo(
        panel,
        { xPercent: 8, autoAlpha: 0 },
        { xPercent: 0, autoAlpha: 1, duration, ease: "power3.out" },
      );
      gsap.fromTo(
        "[data-menu-link]",
        { y: 28, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration,
          stagger: reducedMotion ? 0 : 0.055,
          ease: "power3.out",
        },
      );
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      gsap.to(panel, {
        xPercent: 8,
        autoAlpha: 0,
        duration,
        ease: "power3.inOut",
      });
      gsap.to(overlay, {
        autoAlpha: 0,
        pointerEvents: "none",
        duration,
        ease: "power3.inOut",
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open, reducedMotion]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const goToSection = (href: string) => {
    setOpen(false);
    window.setTimeout(
      () => {
        const section = document.querySelector(href);
        section?.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
        });
      },
      reducedMotion ? 0 : 320,
    );
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-40 w-full px-4 py-4 md:px-8">
        <div className="mx-auto flex h-14 max-w-[1500px] items-center justify-between border border-white/10 bg-ink/55 px-4 backdrop-blur-md md:px-5">
          <a
            href="#top"
            className="flex items-center gap-3 text-sm font-bold uppercase tracking-normal text-paper"
            aria-label="Elliott Rouse home"
          >
            <span className="flex size-9 items-center justify-center bg-primary text-ink">
              EJ
            </span>
            <span className="hidden sm:inline">Neurobionics Portfolio</span>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 border border-primary/50 px-4 py-2 text-sm font-semibold text-paper transition hover:bg-primary hover:text-ink md:flex"
            >
              Contact
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex size-11 items-center justify-center border border-white/15 bg-paper text-ink transition hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu aria-hidden="true" size={24} strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </header>

      <div
        ref={overlayRef}
        className="invisible fixed inset-0 z-50 bg-ink/96 opacity-0"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="noise-layer" />
        <div
          ref={panelRef}
          className="section-shell relative grid min-h-screen items-start gap-10 py-8 opacity-0 overflow-hidden lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="hidden border border-white/10 bg-panel/80 p-6 lg:block">
            <p className="text-sm font-bold uppercase text-primary">
              Featured profile
            </p>
            <h2 className="mt-8 text-5xl font-black uppercase leading-none text-paper">
              Elliott J.
              <br />
              Rouse
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-soft/80">
              Associate Professor of Robotics and Mechanical Engineering,
              director of a lab advancing wearable robotics through
              neuroscience, biomechanics, and control.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-3 text-sm text-soft/75">
              <span className="border border-white/10 p-4">
                University of Michigan
              </span>
              <span className="border border-white/10 p-4">
                Neurobionics Lab
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-sm font-bold uppercase text-primary">Menu</p>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="flex size-12 items-center justify-center bg-primary text-ink transition hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label="Close menu"
              >
                <X aria-hidden="true" size={26} strokeWidth={2.5} />
              </button>
            </div>

            <nav aria-label="Primary">
              <ul className="space-y-1 overflow-y-auto max-h-[calc(100vh-160px)] overscroll-contain pr-2">
                {navItems.map((item) => (
                  <li key={item.href} data-menu-link>
                    <button
                      type="button"
                      onClick={() => goToSection(item.href)}
                      className="group flex w-full items-center justify-between border-b border-white/10 py-3 text-left text-4xl font-black leading-none text-paper transition hover:text-primary md:text-5xl lg:text-6xl"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="mt-2 opacity-0 transition group-hover:opacity-100"
                        size={34}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
