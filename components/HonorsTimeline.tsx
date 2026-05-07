"use client";

import { useEffect, useRef, useState } from "react";
import type { Honor } from "@/content/portfolio";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type HonorsTimelineProps = {
  honors: Honor[];
};

export function HonorsTimeline({ honors }: HonorsTimelineProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const lineDrawn = reducedMotion || drawn;

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const wrapper = wrapperRef.current;
    if (!wrapper) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: [0.4] },
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div ref={wrapperRef}>
      <div className="flex flex-col gap-0 md:hidden">
        <div className="relative pl-7">
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-paper/10" />
          <div
            className={`absolute left-3 top-0 w-[2px] bg-primary transition-all duration-1000 ease-out ${lineDrawn ? "h-full" : "h-0"}`}
          />

          {honors.map((honor, i) => (
            <div key={`${honor.year}-${honor.title}-${i}`} className="relative mb-10">
              <div className="absolute -left-[21px] top-2 z-10 h-4 w-4 rounded-full border-2 border-ink bg-copper" />
              <div className="rounded-xl border border-paper/10 bg-panel p-5">
                <p className="mb-2 text-2xl font-black text-primary">{honor.year}</p>
                <p className="mb-2 text-sm font-bold uppercase leading-tight text-paper">
                  {honor.title}
                </p>
                <p className="text-xs leading-relaxed text-soft">{honor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <div className="relative py-16">
          <div className="absolute top-1/2 left-0 h-[2px] w-full bg-paper/10" />
          <div
            className={`absolute top-1/2 left-0 h-[2px] bg-primary transition-all duration-1000 ease-out ${lineDrawn ? "w-full" : "w-0"}`}
          />

          <div className="relative grid grid-cols-4 gap-0">
            {honors.map((honor, index) => {
              const isAbove = index % 2 === 0;

              return (
                <div key={`${honor.year}-${honor.title}`} className="group relative h-[360px]">
                  <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-copper transition-transform duration-300 group-hover:scale-150" />

                  <article
                    className={`absolute left-1/2 w-52 -translate-x-1/2 rounded-xl border border-paper/10 bg-panel p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:border-primary/40 ${isAbove ? "bottom-[calc(50%+24px)]" : "top-[calc(50%+24px)]"}`}
                  >
                    <p className="mb-2 text-3xl leading-none font-black text-primary">
                      {honor.year}
                    </p>
                    <h3 className="mb-2 text-sm font-bold uppercase leading-tight text-paper">
                      {honor.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-soft">{honor.description}</p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
