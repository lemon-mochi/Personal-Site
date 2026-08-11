export default function ImageGallery({ images, altPrefix, onOpen }) {
  if (!images || images.length === 0) return null;

  return (
    <ul className="album_list">
      {images.map((src, index) => (
        <li className="album" key={src}>
          <a
            href={src}
            onClick={(e) => {
              e.preventDefault();
              onOpen(src);
            }}
          >
            <img className="album_img" src={src} alt={`${altPrefix} screenshot ${index + 1}`} />
          </a>
        </li>
      ))}
    </ul>
  );
}
