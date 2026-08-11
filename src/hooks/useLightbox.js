import { useState, useEffect, useCallback } from 'react';

// A single reusable lightbox controller. Any gallery can call `open(src)`
// to display an image, instead of each project needing its own lightbox
// instance (the original site created one per project).
export function useLightbox() {
  const [activeImage, setActiveImage] = useState(null);

  const open = useCallback((src) => setActiveImage(src), []);
  const close = useCallback(() => setActiveImage(null), []);

  useEffect(() => {
    if (!activeImage) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeImage, close]);

  return { activeImage, open, close };
}
