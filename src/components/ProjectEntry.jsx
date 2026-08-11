import ImageGallery from './ImageGallery.jsx';

export default function ProjectEntry({ project, onOpenImage }) {
  return (
    <>
      <p>
        <a
          className="links_to_proj"
          href={project.href}
          target={project.external ? '_blank' : undefined}
          rel={project.external ? 'noreferrer' : undefined}
        >
          {project.title}
        </a>
        <span className="project-description"> - {project.description}</span>
      </p>
      <ImageGallery images={project.gallery} altPrefix={project.title} onOpen={onOpenImage} />
    </>
  );
}
