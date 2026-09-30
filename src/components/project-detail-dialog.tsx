"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "@/components/icons";
import { ProjectCarousel } from "@/components/project-carousel";
import type { Project } from "@/types/portfolio";

export function ProjectDetailDialog({ project }: { project: Project }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const openDialog = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <button className="project-detail-trigger" type="button" onClick={openDialog}>
        프로젝트 상세 보기
        <span aria-hidden="true">→</span>
      </button>

      <dialog
        className="project-dialog"
        ref={dialogRef}
        aria-labelledby={`${project.id}-detail-title`}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        <article className="project-dialog-shell">
          <header className="project-dialog-header">
            <div>
              <p className="eyebrow">{project.eyebrow}</p>
              <h2 id={`${project.id}-detail-title`}>{project.title}</h2>
              <p>{project.period}</p>
            </div>
            <button className="project-dialog-close" type="button" onClick={closeDialog} aria-label={`${project.title} 상세 닫기`}>
              <span aria-hidden="true">×</span>
            </button>
          </header>

          <div className="project-dialog-content">
            <div className="project-dialog-media">
              <ProjectCarousel title={project.title} media={project.media} />
            </div>

            <section className="project-detail-section">
              <div className="project-detail-heading">
                <span>01</span>
                <h3>&lt;개요&gt;</h3>
              </div>
              <div className="project-detail-copy">
                <p className="project-detail-lead">{project.summary}</p>
                {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <dl className="project-meta-list">
                  <div><dt>담당 역할</dt><dd>{project.role}</dd></div>
                  <div><dt>해결 과제</dt><dd>{project.problem}</dd></div>
                </dl>
              </div>
            </section>

            <section className="project-detail-section">
              <div className="project-detail-heading">
                <span>02</span>
                <h3>&lt;주요 작업&gt;</h3>
              </div>
              <ol className="project-task-list">
                {project.contributions.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="project-detail-section">
              <div className="project-detail-heading">
                <span>03</span>
                <h3>&lt;기술 스택&gt;</h3>
              </div>
              <ul className="project-detail-stack" aria-label={`${project.title} 기술 스택`}>
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="project-detail-section">
              <div className="project-detail-heading">
                <span>04</span>
                <h3>&lt;성과&gt;</h3>
              </div>
              <div className="project-result-content">
                <ul className="project-result-metrics">
                  {project.metrics.map((metric) => <li key={metric}>{metric}</li>)}
                </ul>
                <ul className="project-result-list">
                  {project.results.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </section>

            {project.links.length > 0 && (
              <footer className="project-dialog-footer">
                <p>프로젝트 링크</p>
                <div>
                  {project.links.map((link) => (
                    <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                      {link.label}<ArrowUpRight />
                    </a>
                  ))}
                </div>
              </footer>
            )}
          </div>
        </article>
      </dialog>
    </>
  );
}
