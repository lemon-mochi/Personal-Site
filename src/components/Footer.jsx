import { footer } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          &copy; {footer.year} {footer.name}. All rights reserved.
        </p>
        <p>
          <a href={footer.easterEgg.href} target="_blank" rel="noreferrer">
            {footer.easterEgg.label}
          </a>
        </p>
      </div>
    </footer>
  );
}
