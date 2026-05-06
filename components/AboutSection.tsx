"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const stats = [
  { value: 15, label: "Years of Research" },
  { value: 40, label: "Publications" },
  { value: 30, label: "Students Mentored" },
];

export function AboutSection() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        if (reducedMotion) {
          setCounts(stats.map((stat) => stat.value));
        }

        setStarted(true);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (!started || reducedMotion) {
      return;
    }

    const intervals = stats.map((stat, i) => {
      let start = 0;
      const step = Math.ceil(stat.value / 40);

      return setInterval(() => {
        start += step;
        if (start >= stat.value) {
          start = stat.value;
        }

        setCounts((prev) => prev.map((c, idx) => (idx === i ? start : c)));

        if (start === stat.value) {
          clearInterval(intervals[i]);
        }
      }, 30);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [started, reducedMotion]);

  return (
    <section id="about" className="bg-[#1a1612]">
      <div className="section-shell grid min-h-[90vh] grid-cols-1 items-center gap-0 py-24 lg:grid-cols-2">
        <div
          className="relative h-[600px] min-h-[500px] lg:h-full"
          style={{ clipPath: "polygon(0 0, 92% 0, 100% 100%, 0 100%)" }}
        >
          {/* TODO: Replace src with ImageKit URL when ready */}
          <Image
            src="/media/osl-orbit.gif"
            alt="Elliott Rouse with his research team"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1a1612]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612] via-transparent to-transparent" />
        </div>

        <div className="flex flex-col justify-center py-16 pl-0 lg:pl-8">
          <p className="mb-4 text-copper text-xs tracking-widest font-medium">ABOUT</p>
          <h2 className="mb-8 text-paper text-4xl font-black uppercase leading-tight md:text-5xl">
            A RESEARCH PORTFOLIO FOR HUMAN-CENTERED ROBOTICS
          </h2>

          <div className="mb-8 space-y-4 text-paper/60 leading-relaxed">
            <p>
              Elliott J. Rouse is an Associate Professor in Robotics and Mechanical
              Engineering at the University of Michigan and director of the Neurobionics Lab.
              His work brings together precision machine design, biomechanics, controls, human
              perception, and rehabilitation technology.
            </p>
            <p>
              He has spent over a decade building systems that don&apos;t just assist movement
              — they understand it. His lab operates at the intersection of engineering rigor
              and human empathy.
            </p>
          </div>

          <blockquote className="mb-10 border-l-2 border-copper pl-5">
            <p className="text-paper/80 text-lg italic leading-relaxed">
              &quot;The best assistive technology disappears. It becomes part of how someone moves
              through the world.&quot;
            </p>
          </blockquote>

          <div ref={ref} className="grid grid-cols-3 gap-4 border-t border-paper/10 pt-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <p className="text-primary text-4xl font-black">{counts[i]}+</p>
                <p className="mt-1 text-soft text-xs tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
