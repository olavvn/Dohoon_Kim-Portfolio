import { Header } from "@/components/header";
import { ArrowUpRight, CodeIcon, DataIcon, MailIcon, SparkIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import {
  activities,
  archiveProjects,
  certificates,
  experiences,
  profile,
  projects,
  skills,
} from "@/content/portfolio";

const expertise = [
  { icon: SparkIcon, title: "AI Engineering", copy: "LLM · RAG · Agent" },
  { icon: DataIcon, title: "Data & Cloud", copy: "Pipeline · AWS · IaC" },
  { icon: CodeIcon, title: "Product Systems", copy: "Web · Deployment · Ops" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-kicker">
            <span className="status-dot" aria-hidden="true" />
            새로운 기회를 찾고 있습니다
          </div>
          <h1 id="hero-title">
            복잡한 데이터를
            <br />
            <span>작동하는 시스템</span>으로.
          </h1>
          <p className="hero-copy">{profile.introduction}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              프로젝트 살펴보기
              <ArrowUpRight />
            </a>
            <a className="button button-secondary" href={`mailto:${profile.email}`}>
              이메일 보내기
            </a>
          </div>

          <div className="expertise-pill" aria-label="전문 영역">
            {expertise.map(({ icon: Icon, title, copy }) => (
              <a href="#skills" key={title}>
                <span className="expertise-icon"><Icon /></span>
                <span>
                  <strong>{title}</strong>
                  <small>{copy}</small>
                </span>
              </a>
            ))}
            <a className="search-orb" href="#projects" aria-label="프로젝트로 이동">
              <ArrowUpRight />
            </a>
          </div>
        </section>

        <section className="section container" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="section-label">Selected work</p>
              <h2 id="projects-title">문제와 운영을 함께 본 프로젝트</h2>
            </div>
            <p>기술을 나열하기보다 어떤 제약을 만났고, 무엇을 판단했으며, 결과가 어떻게 달라졌는지 담았습니다.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard project={project} priority={index < 2} key={project.id} />
            ))}
          </div>
        </section>

        <section className="section soft-section" id="experience" aria-labelledby="experience-title">
          <div className="container">
            <div className="section-heading compact">
              <div>
                <p className="section-label">Experience</p>
                <h2 id="experience-title">현장에서 만든 변화</h2>
              </div>
            </div>
            <div className="experience-list">
              {experiences.map((experience, index) => (
                <article className="experience-item" key={experience.company}>
                  <div className="experience-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
                  <div className="experience-meta">
                    <h3>{experience.company}</h3>
                    <p>{experience.role}</p>
                    <time>{experience.period}</time>
                  </div>
                  <div className="experience-content">
                    <p className="experience-summary">{experience.summary}</p>
                    <ul>
                      {experience.highlights.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    {experience.stack && (
                      <ul className="tag-list">
                        {experience.stack.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <div>
              <p className="section-label">Skills & credentials</p>
              <h2 id="skills-title">직접 사용해 온 도구들</h2>
            </div>
            <p>프로젝트와 업무에서 문제를 해결하기 위해 실제로 선택하고 사용한 기술입니다.</p>
          </div>
          <div className="skills-grid">
            <article className="skill-card accent-card">
              <span className="skill-card-icon"><CodeIcon /></span>
              <h3>Core</h3>
              <div className="skill-cloud">{skills.core.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
            <article className="skill-card">
              <span className="skill-card-icon"><SparkIcon /></span>
              <h3>AI & Data</h3>
              <div className="skill-cloud">{skills.aiData.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
            <article className="skill-card">
              <span className="skill-card-icon"><DataIcon /></span>
              <h3>Cloud & Operations</h3>
              <div className="skill-cloud">{skills.cloudOps.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
            <article className="skill-card">
              <span className="skill-card-icon"><DataIcon /></span>
              <h3>Storage & Stream</h3>
              <div className="skill-cloud">{skills.storage.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          </div>

          <div className="certificate-grid">
            <article>
              <p className="section-label">Language</p>
              {certificates.language.map((certificate) => (
                <div className="certificate-row" key={certificate.name}>
                  <div><strong>{certificate.name}</strong><span>{certificate.detail}</span></div>
                  <time>{certificate.acquired}</time>
                </div>
              ))}
            </article>
            <article>
              <p className="section-label">IT Certification</p>
              {certificates.it.map((certificate) => (
                <div className="certificate-row" key={certificate.name}>
                  <div><strong>{certificate.name}</strong><span>{certificate.issuer}</span></div>
                  <time>{certificate.acquired}</time>
                </div>
              ))}
            </article>
          </div>
        </section>

        <section className="section container" id="about" aria-labelledby="about-title">
          <div className="about-grid">
            <div className="about-intro">
              <p className="section-label">Beyond the code</p>
              <h2 id="about-title">기술과 사람 사이의 맥락을 탐구합니다.</h2>
              <p>생성형 AI를 공부하고 나누는 일, 흑백 필름을 직접 현상하고 인화하는 일 모두 보이지 않는 과정을 이해하고 더 나은 경험으로 만드는 연습이라고 생각합니다.</p>
            </div>
            <div className="activity-list">
              {activities.map((activity) => (
                <article key={activity.title}>
                  <time>{activity.period}</time>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section archive-section container" aria-labelledby="archive-title">
          <div className="section-heading compact">
            <div>
              <p className="section-label">Archive</p>
              <h2 id="archive-title">작은 프로젝트와 탐구의 기록</h2>
            </div>
          </div>
          <div className="archive-grid">
            {archiveProjects.map((project) => (
              <article className="archive-card" key={project.title}>
                <time>{project.period}</time>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="archive-footer">
                  <div className="mini-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div>
                    {project.links.map((link) => (
                      <a href={link.href} key={link.href} target="_blank" rel="noreferrer" aria-label={`${project.title} ${link.label}`}>
                        {link.label}<ArrowUpRight />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <div className="container contact-inner">
            <span className="contact-icon"><MailIcon /></span>
            <p className="section-label">Let’s build something useful</p>
            <h2 id="contact-title">운영되는 AI를 함께 만들고 싶습니다.</h2>
            <p>AI · 데이터 · 클라우드가 만나는 문제를 이야기해 주세요.</p>
            <a className="button button-primary" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="wordmark" href="#top"><span className="wordmark-dot" />DOHOON</a>
            <p>{profile.englishName} · {profile.role}</p>
          </div>
          <div>
            <strong>Explore</strong>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
          </div>
          <div>
            <strong>Connect</strong>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
          <div>
            <strong>Education</strong>
            {profile.education.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="container legal-band">
          <span>© 2026 {profile.englishName}</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </footer>
    </>
  );
}
