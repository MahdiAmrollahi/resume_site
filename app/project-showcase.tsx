"use client";

import { useState } from "react";

type Project = {
  name: string;
  type: string;
  stack: string;
  description: string;
  href: string;
};

type ProjectShowcaseProps = {
  projects: Project[];
  initialCount?: number;
};

export function ProjectShowcase({
  projects,
  initialCount = 3,
}: ProjectShowcaseProps) {
  const [expanded, setExpanded] = useState(false);
  const visibleProjects = expanded ? projects : projects.slice(0, initialCount);
  const hiddenCount = Math.max(projects.length - initialCount, 0);

  return (
    <div className="grid gap-3">
      {visibleProjects.map((project, index) => (
        <a className="project-row" href={project.href} key={project.name}>
          <span className="project-index">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              {project.type}
            </p>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
          <span className="stack">{project.stack}</span>
        </a>
      ))}

      {hiddenCount > 0 ? (
        <button
          className="project-toggle"
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((current) => !current)}
        >
          <span>{expanded ? "Show fewer projects" : `Show ${hiddenCount} more projects`}</span>
          <span className="project-toggle-icon">{expanded ? "-" : "+"}</span>
        </button>
      ) : null}
    </div>
  );
}
