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
  variant?: "light" | "dark";
  githubHref?: string;
};

const FIRST_STEP = 3;
const SECOND_STEP = 6;

export function ProjectShowcase({
  projects,
  variant = "light",
  githubHref = "https://github.com/MahdiAmrollahi",
}: ProjectShowcaseProps) {
  const [step, setStep] = useState<0 | 1>(0);

  const visibleCount = step === 0 ? FIRST_STEP : SECOND_STEP;
  const visibleProjects = projects.slice(0, visibleCount);
  const rowClass = variant === "dark" ? "project-row project-row-dark" : "project-row";
  const toggleClass =
    variant === "dark" ? "project-toggle project-toggle-dark" : "project-toggle";

  return (
    <div className="grid gap-3">
      {visibleProjects.map((project, index) => (
        <a className={rowClass} href={project.href} key={project.name}>
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

      {step === 0 ? (
        <button
          className={toggleClass}
          type="button"
          onClick={() => setStep(1)}
        >
          <span>{`Show ${SECOND_STEP - FIRST_STEP} more projects`}</span>
          <span className="project-toggle-icon">+</span>
        </button>
      ) : (
        <>
          <a
            className={`${toggleClass} project-github-cta`}
            href={githubHref}
            target="_blank"
            rel="noreferrer"
          >
            <span>View all on GitHub</span>
            <span className="project-toggle-icon project-github-icon">↗</span>
          </a>
          <button
            className={`${toggleClass} project-less-cta`}
            type="button"
            onClick={() => setStep(0)}
          >
            <span>Show fewer projects</span>
            <span className="project-toggle-icon project-less-icon">−</span>
          </button>
        </>
      )}
    </div>
  );
}
