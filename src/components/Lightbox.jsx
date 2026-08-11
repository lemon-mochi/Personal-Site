export default function Lightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="lightbox"
      style={{ display: 'flex' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <img className="lightbox-content" src={image} alt="Enlarged project screenshot" />
      <span className="lightbox-close" onClick={onClose}>
        &times;
      </span>
    </div>
  );
}
