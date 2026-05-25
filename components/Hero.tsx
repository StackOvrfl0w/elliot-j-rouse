"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
// import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { heroLabels } from "@/content/portfolio";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || reducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-reveal]",
        { autoAlpha: 0, y: 34 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        titleRef.current,
        { scale: 1.04, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 1.1, ease: "power3.out" },
      );
    }, heroRef);

    return () => context.revert();
  }, [reducedMotion]);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative flex min-h-screen overflow-hidden bg-ink text-paper"
    >
      {/* TODO: Replace with ImageKit video URL before deployment */}
      {/* ImageKit URL goes here: https://ik.imagekit.io/YOUR_ID/your-video.mp4 */}
      <video
        className="absolute inset-0 size-full object-cover"
        src="https://ik.imagekit.io/asadtanvir/hero-icorr-video.mp4"
        poster="/media/lab-panorama.jpeg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/48" />
      <div className="absolute inset-0 bg-primary/20 mix-blend-color" />
      <div className="noise-layer" />

      <div className="section-shell relative z-10 flex min-h-screen flex-col justify-between py-6 md:py-8">
        <div
          data-hero-reveal
          className="flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase text-soft md:text-sm"
        >
          <span>Associate Professor | Robotics & Mechanical Engineering</span>
          <span className="border border-primary/60 bg-ink/35 px-4 py-2 text-primary">
            University of Michigan
          </span>
        </div>

        <div
          data-hero-reveal
          className="pointer-events-none absolute right-2 top-[18%] hidden w-52 md:right-8 lg:block xl:right-16 xl:w-72"
        >
          <div className="relative aspect-[3/4]">
            <Image
              src="/media/osl-orbit-transparent.webp"
              alt="Open-source leg orbit animation"
              fill
              unoptimized
              sizes="(min-width: 1280px) 288px, 208px"
              className="object-contain object-center drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="py-8 md:py-10">
          <p
            data-hero-reveal
            className="mb-5 text-base font-black uppercase text-primary md:text-2xl"
          >
            Director, Neurobionics Lab
          </p>
          <h1
            ref={titleRef}
            className="max-w-6xl text-6xl font-black uppercase leading-[0.9] tracking-normal text-paper md:text-8xl lg:text-[8.5rem] xl:text-[9.5rem]"
          >
            Elliott
            <br />
            Rouse
          </h1>
          <p
            data-hero-reveal
            className="mt-8 max-w-3xl text-xl font-semibold leading-8 text-soft md:text-2xl md:leading-10"
          >
            Building a new generation of wearable robotic technologies by studying how
            the nervous system controls human movement.
          </p>

          {/* <div data-hero-reveal className="mt-9 flex flex-wrap gap-3">
            <a
              href="#research"
              className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-black uppercase text-ink transition hover:bg-paper"
            >
              Explore work
              <ArrowDown aria-hidden="true" size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 bg-ink/40 px-5 py-3 text-sm font-black uppercase text-paper transition hover:border-primary hover:text-primary"
            >
              Connect
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div> */}
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {heroLabels.map((item) => (
            <div
              data-hero-reveal
              key={item.label}
              className="border border-white/15 bg-ink/35 p-4 backdrop-blur-sm"
            >
              <p className="text-xs font-black uppercase text-primary">{item.label}</p>
              <p className="mt-2 text-sm font-semibold text-paper md:text-base">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
