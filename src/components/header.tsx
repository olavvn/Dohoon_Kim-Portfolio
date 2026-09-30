import { MailIcon } from "@/components/icons";
import { profile } from "@/content/portfolio";

const navItems = [
  ["프로젝트", "#projects"],
  ["경험", "#experience"],
  ["기술", "#skills"],
  ["소개", "#about"],
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#top" aria-label="김도훈 포트폴리오 처음으로">
          <span className="wordmark-dot" aria-hidden="true" />
          DOHOON
        </a>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className="contact-pill" href={`mailto:${profile.email}`}>
          <MailIcon />
          <span>Contact</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="메뉴 열기">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="모바일 메뉴">
            {navItems.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
            <a href={`mailto:${profile.email}`}>이메일</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
