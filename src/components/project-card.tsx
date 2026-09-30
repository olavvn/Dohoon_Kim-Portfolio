import { ArrowUpRight, ChevronDown } from "@/components/icons";
import { ProjectCarousel } from "@/components/project-carousel";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="project-card" id={project.id}>
      <div className="project-media">
        <ProjectCarousel title={project.title} media={project.media} priority={priority} />
        <span className="featured-badge">Featured project</span>
        <span className="project-period">{project.period}</span>
      </div>

      <div className="project-body">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        <ul className="metric-row" aria-label="주요 성과">
          {project.metrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>

        <details className="project-details">
          <summary>
            기술적 기여 자세히 보기
            <ChevronDown />
          </summary>
          <div className="detail-content">
            <div>
              <h4>Problem</h4>
              <p>{project.problem}</p>
            </div>
            <div>
              <h4>What I did</h4>
              <ul>
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Result</h4>
              <ul>
                {project.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </details>

        <div className="project-footer">
          <ul className="tag-list" aria-label="사용 기술">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="project-links">
            {project.links.map((link) => (
              <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
