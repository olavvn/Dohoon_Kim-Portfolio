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

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-kicker">
            CLOUD ENGINEER · DATA INFRASTRUCTURE
          </div>
          <h1 id="hero-title">
            클라우드 인프라와<br />
            <span>데이터 파이프라인을 구축합니다.</span>
          </h1>
          <p className="hero-copy">{profile.introduction}</p>
          <div className="hero-actions">
            <a className="button button-download" href="#projects">
              프로젝트 살펴보기
              <ArrowUpRight />
            </a>
            <a className="button button-tertiary" href={`mailto:${profile.email}`}>
              이메일 보내기 <ArrowUpRight />
            </a>
          </div>

          <div className="profile-summary-card" aria-label="김도훈의 주요 이력과 정보">
            <div className="profile-summary-intro">
              <p className="section-label">Profile</p>
              <h2>{profile.name}</h2>
              <p>{profile.role}</p>
            </div>
            <dl className="profile-summary-list">
              <div>
                <dt>Education</dt>
                <dd>{profile.education[0]}<span>{profile.education[1]}</span></dd>
              </div>
              <div>
                <dt>Experience</dt>
                <dd>(주)에프알티로보틱스 · Data Engineer Intern<span>KIC 실리콘밸리 · Program Operations Intern</span></dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Cloud Infrastructure · Observability<span>Data Pipeline · Deployment Automation</span></dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd><a href={`mailto:${profile.email}`}>{profile.email}</a><span><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> · <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></span></dd>
              </div>
            </dl>
          </div>
        </section >

        <section className="section container" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="section-label">Selected work</p>
              <h2 id="projects-title">PROJECTS</h2>
            </div>
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
                <p className="section-label">Career</p>
                <h2 id="experience-title">EXPERIENCE</h2>
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
                    <div className="experience-summary-block">
                      <p className="experience-content-label">한 일 요약</p>
                      <p className="experience-summary">{experience.summary}</p>
                    </div>
                    <div className="experience-detail-block">
                      <p className="experience-content-label">상세 내용</p>
                      <ol className="experience-detail-list">
                        {experience.details.map((item, detailIndex) => (
                          <li key={item.title}>
                            <span>{String(detailIndex + 1).padStart(2, "0")}</span>
                            <div><strong>{item.title}</strong><p>{item.description}</p></div>
                          </li>
                        ))}
                      </ol>
                    </div>
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
              <h2 id="skills-title">SKILLS</h2>
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
              <p className="section-label">Activities</p>
              <h2 id="about-title">EXTRA CURRICULAR</h2>
              <p>생성형 AI 학회와 개발 커뮤니티에서 스터디와 교육 세션을 운영했으며, 중앙사진동아리에서는 전시 참여와 암실 관리를 담당했습니다.</p>
            </div>
            <div className="activity-list">
              {activities.map((activity) => (
                <article key={activity.title}>
                  <time>{activity.period}</time>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                  {activity.details && (
                    <details className="activity-details">
                      <summary>더보기 <span aria-hidden="true">＋</span></summary>
                      <div className="activity-detail-content">
                        {activity.details.map((detail) => (
                          <section key={`${detail.period}-${detail.title}`}>
                            <time>{detail.period}</time>
                            <h4>{detail.title}</h4>
                            <ul>{detail.description.map((item) => <li key={item}>{item}</li>)}</ul>
                          </section>
                        ))}
                      </div>
                    </details>
                  )}
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
            <p className="section-label">Contact</p>
            <h2 id="contact-title">클라우드 및 데이터 인프라 직무를 지원하고 있습니다.</h2>
            <p>프로젝트와 경력에 관한 문의는 이메일로 연락해 주세요.</p>
            <a className="button button-primary" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight /></a>
          </div>
        </section>
      </main >

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
