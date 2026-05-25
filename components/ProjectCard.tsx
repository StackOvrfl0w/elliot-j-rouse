import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const priority = index < 2;
  const isGif = project.image.endsWith(".gif");
  const cropToLegs = project.title === "Variable Stiffness Prosthetic Ankle";

  return (
    <article className="group overflow-hidden border border-white/10 bg-panel primary-ring">
      <a href={project.href} target="_blank" rel="noreferrer" className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-ink">
          <Image
            src={project.image}
            alt={`${project.title} project media`}
            fill
            priority={priority}
            unoptimized={isGif}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`object-cover transition duration-700 group-hover:scale-105 ${
              cropToLegs ? "object-bottom" : "object-center"
            }`}
          />
          <div className="absolute left-3 top-3 bg-ink/80 px-3 py-2 text-xs font-black uppercase text-primary">
            {project.category}
          </div>
        </div>

        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-black uppercase leading-tight text-paper">
              {project.title}
            </h3>
            <ArrowUpRight
              aria-hidden="true"
              className="mt-1 shrink-0 text-primary transition group-hover:translate-x-1 group-hover:-translate-y-1"
              size={22}
            />
          </div>
          <p className="mt-4 text-base leading-7 text-soft/75">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/10 px-3 py-1 text-xs font-bold uppercase text-soft/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}
