import { asset } from '../utils/asset.js';

export default function ImageGallery({ images, altPrefix, onOpen }) {
  if (!images || images.length === 0) return null;

  return (
    <ul className="album_list">
      {images.map((src, index) => {
        const resolvedSrc = asset(src);
        return (
          <li className="album" key={src}>
            <a
              href={resolvedSrc}
              onClick={(e) => {
                e.preventDefault();
                onOpen(resolvedSrc);
              }}
            >
              <img className="album_img" src={resolvedSrc} alt={`${altPrefix} screenshot ${index + 1}`} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
