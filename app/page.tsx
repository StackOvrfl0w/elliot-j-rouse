import Image from "next/image";
import { AboutSection } from "@/components/AboutSection";
// import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { HonorsTimeline } from "@/components/HonorsTimeline";
// import { OverlayMenu } from "@/components/OverlayMenu";
import { ProjectCard } from "@/components/ProjectCard";
// import { PublicationCard } from "@/components/PublicationCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import {
  expertise,
  honors,
  // navItems,
  podcastEpisodes,
  projects,
  // publications,
} from "@/content/portfolio";

export default function Home() {
  // TODO: Replace all src values with ImageKit URLs when ready
  const galleryImages = [
    { src: "/media/elliott-wakeboarding.jpg", alt: "Elliott wakeboarding" },
    { src: "/media/rouse-family.jpg", alt: "Rouse family" },
    {
      src: "/media/jamming-marc-raibert.jpg",
      alt: "Jamming with Marc Raibert",
    },
    { src: "/media/elliott-wakeboarding-1.jpg", alt: "Elliott wakeboarding" },
    { src: "/media/rouse-family-2.jpg", alt: "Rouse family" },
    { src: "/media/intersport.jpg", alt: "Intersport" },
    { src: "/media/rouse-family-vt.jpg", alt: "Rouse family in VT" },
    { src: "/media/desktop.jpg", alt: "Elliott at desk" },
  ];

  return (
    <>
      {/* <OverlayMenu navItems={navItems} /> */}
      <main>
        <Hero />

        <section id="research" className="bg-ink py-24 md:py-32">
          <div className="section-shell">
            <Reveal>
              <SectionHeader
                eyebrow="Research work"
                title="Robotic systems for human mobility"
                intro="A portfolio of platforms and studies at the intersection of prosthetics, orthoses, locomotion science, and control."
              />
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 0.05}>
                  <ProjectCard project={project} index={index} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="hobbies" className="bg-paper py-24 md:py-32">
          <div className="section-shell">
            <Reveal>
              <div>
                <p className="text-primary text-xs font-medium tracking-widest">
                  BEYOND THE LAB
                </p>
                <h2 className="mt-4 text-3xl font-black uppercase leading-none tracking-normal text-ink md:text-4xl">
                  CONVERSATIONS &amp; MEDIA
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/75">
                  Conversations on wearable robotics, human locomotion, and what
                  it means to build technology that moves with people.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {podcastEpisodes.map((episode, index) => (
                <Reveal key={episode.id} delay={index * 0.05}>
                  <div className="overflow-hidden rounded-lg bg-gray-100">
                    <div className="relative aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                        title={episode.title}
                        className="size-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                    <h3 className="mt-2 px-3 pb-3 text-sm text-ink/60">
                      {episode.title}
                    </h3>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-16 bg-paper">
              <div className="section-shell py-20">
                <p className="text-primary text-xs tracking-widest font-medium">
                  PERSONAL
                </p>
                <h3 className="mt-4 text-3xl font-black uppercase leading-none tracking-normal text-ink md:text-4xl">
                  LIFE BEYOND THE LAB
                </h3>
                <p className="mt-6 max-w-4xl text-lg leading-8 text-ink/70">
                  Outside the lab, Elliott is a husband, father, and someone who
                  finds as much meaning in the people around him as in the work
                  itself. He surfs, wakeboards, plays guitar, and stays
                  connected to the physical world that inspires his research.
                  These aren&apos;t escapes from the work — they&apos;re the
                  reason for it.
                </p>

                <div className="columns-1 gap-4 mt-12 md:columns-2 lg:columns-3">
                  {galleryImages.map((image) => (
                    <div
                      key={image.src}
                      className="break-inside-avoid mb-4 overflow-hidden rounded-xl relative group"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={600}
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        unoptimized={false}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="text-paper text-sm font-medium">
                          {image.alt}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="family" className="bg-[#1a1612]">
          <div className="section-shell grid min-h-[80vh] grid-cols-1 items-end gap-16 py-24 lg:grid-cols-2">
            <div className="relative h-[600px]">
              TODO: Replace all src values with ImageKit URLs when ready
              <Image
                src="/media/rouse-family.jpg"
                alt="Rouse family"
                width={600}
                height={800}
                sizes="(min-width: 1024px) 35vw, 80vw"
                unoptimized={false}
                className="absolute bottom-0 left-0 w-[75%] rounded-xl object-cover shadow-2xl rotate-[-3deg]"
              />
              <Image
                src="/media/rouse-family-2.jpg"
                alt="Rouse family"
                width={600}
                height={800}
                sizes="(min-width: 1024px) 35vw, 80vw"
                unoptimized={false}
                className="absolute bottom-8 left-[15%] w-[75%] rounded-xl object-cover shadow-2xl rotate-[2deg]"
              />
              <Image
                src="/media/rouse-family-vt.jpg"
                alt="Rouse family in Vermont"
                width={600}
                height={800}
                sizes="(min-width: 1024px) 35vw, 80vw"
                unoptimized={false}
                className="absolute bottom-16 left-[28%] w-[70%] rounded-xl object-cover shadow-2xl rotate-[-1deg]"
              />
            </div>

            <div className="flex h-full flex-col justify-end pb-4">
              <p className="mb-4 text-copper text-xs tracking-widest font-medium">
                FAMILY
              </p>
              <h2 className="mb-8 text-paper text-5xl font-black uppercase leading-none md:text-6xl">
                THE PEOPLE BEHIND THE WORK
              </h2>
              <div className="space-y-4 text-paper/60 text-lg leading-relaxed">
                <p>
                  Elliott&apos;s family is his anchor. Behind every late night
                  in the lab and every research milestone is a foundation built
                  on love, patience, and shared adventure.
                </p>
                <p>
                  His wife and children are constant reminders of why
                  human-centered technology matters — not as an abstract goal,
                  but as something deeply personal. Building devices that
                  restore mobility means something different when you&apos;ve
                  watched someone you love move through the world.
                </p>
                <p>
                  From Vermont winters to Michigan summers, the Rouse family
                  finds its rhythm between the extraordinary and the everyday.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <div className="h-24 bg-gradient-to-b from-warm-bg to-ink" />

        <section id="expertise" className="bg-ink py-24 text-ink md:py-32">
          <div className="section-shell">
            <Reveal>
              <div className="mb-12 max-w-5xl">
                <p className="text-sm font-black uppercase text-primary">
                  Expertise
                </p>
                <h2 className="mt-4 text-paper text-4xl font-black uppercase leading-none tracking-normal md:text-6xl">
                  Science, engineering, and translation
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {expertise.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-xl border-l-4 border-primary bg-paper p-8 transition-all duration-500 group hover:border-copper hover:shadow-xl">
                    <span className="pointer-events-none absolute top-2 right-4 select-none text-[120px] leading-none font-black text-ink/5 transition-colors duration-500 group-hover:text-primary/10">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="mb-6 text-copper text-xs tracking-widest font-medium">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <h3 className="relative z-10 mb-3 text-xl font-black uppercase leading-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="relative z-10 text-sm leading-relaxed text-ink/60">
                      {item.description}
                    </p>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* <section id="publications" className="bg-panel py-24 md:py-32">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
            <Reveal>
              <div className="sticky top-28">
                <p className="text-sm font-black uppercase text-primary">
                  Publications
                </p>
                <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-normal md:text-6xl">
                  Recent and featured research
                </h2>
                <p className="mt-6 text-lg leading-8 text-soft/75">
                  Selected work showing the portfolio direction for the first
                  version, with source links kept close to the research.
                </p>
              </div>
            </Reveal>

            <div>
              {publications.map((publication, index) => (
                <Reveal key={publication.title} delay={index * 0.05}>
                  <PublicationCard publication={publication} />
                </Reveal>
              ))}
            </div>
          </div>
        </section> */}

        <section id="honors" className="bg-ink py-24 md:py-32">
          <div className="section-shell">
            <Reveal>
              <SectionHeader
                eyebrow="Honors"
                title="Recognized work, placed in context"
                intro="Honors are presented as a regular content section rather than a fixed hero tab."
              />
            </Reveal>

            <HonorsTimeline honors={honors} />
          </div>
        </section>

        <AboutSection />

        <section id="lab" className="bg-ink py-24 md:py-32">
          <div className="section-shell">
            <Reveal>
              <SectionHeader
                eyebrow="Lab"
                title="A new generation of wearable robotics"
                intro="The Neurobionics Lab engineers wearable robotic devices that move with the human body — not just on it. We study the nervous system, model human locomotion, and build the next generation of prosthetic and exoskeletal technology."
              />
            </Reveal>

            <Reveal className="mt-6 md:mt-8">
              <div className="relative min-h-[560px] overflow-hidden border border-white/10">
                <Image
                  src="/media/lab-panorama.jpeg"
                  alt="Panoramic view of the University of Michigan Neurobionics Lab"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/45" />
                <div className="absolute bottom-0 left-0 max-w-2xl p-6 md:p-10">
                  <p className="text-sm font-black uppercase text-primary">
                    Research environment
                  </p>
                  <h3 className="mt-4 text-3xl font-black uppercase leading-tight text-paper md:text-5xl">
                    Where movement science becomes assistive technology
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-paper/70 md:text-lg">
                    Located at the University of Michigan, the lab brings together engineers,
                    clinicians, and researchers united by one goal — restoring mobility.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* <ContactSection /> */}
      </main>
    </>
  );
}
