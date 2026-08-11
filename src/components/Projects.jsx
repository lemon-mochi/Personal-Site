import { projects } from '../data/siteData.js';
import ProjectEntry from './ProjectEntry.jsx';
import Lightbox from './Lightbox.jsx';
import { useLightbox } from '../hooks/useLightbox.js';

export default function Projects() {
  const { activeImage, open, close } = useLightbox();

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="portfolio-items">
          {projects.map((project) => (
            <ProjectEntry key={project.title} project={project} onOpenImage={open} />
          ))}
        </div>
      </div>
      <Lightbox image={activeImage} onClose={close} />
    </section>
  );
}
