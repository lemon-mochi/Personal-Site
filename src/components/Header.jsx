import { navLinks, socialLinks } from '../data/siteData.js';
import { asset } from '../utils/asset.js';

function smoothScrollTo(e, href) {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Header({ isDark, onToggleTheme }) {
  return (
    <header>
      <div className="header-inner">
        <nav>
          <ul className="menu">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => smoothScrollTo(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="logo_list">
          {socialLinks.map((link) => (
            <li className="logos" key={link.label}>
              <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <img className="logo_img" src={asset(link.icon)} alt={`${link.label} logo`} />
              </a>
            </li>
          ))}
          <li className="logos">
            <button id="theme-toggle" onClick={onToggleTheme} aria-pressed={isDark}>
              <img className="logo_img" src={asset('/logos/6714978.png')} alt="night mode switch" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
