import { useState, useCallback } from 'react';

// Tracks dark mode as state instead of toggling classList directly,
// so any component can read `isDark` and react to it.
export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return { isDark, toggleTheme };
}
