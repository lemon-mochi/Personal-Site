import { useScrollVisibility } from '../hooks/useScrollVisibility.js';

export default function BackToTop() {
  const isVisible = useScrollVisibility(300);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      id="back-to-top"
      style={{ display: isVisible ? 'block' : 'none' }}
      onClick={scrollToTop}
    >
      Back to Top ↑
    </button>
  );
}
