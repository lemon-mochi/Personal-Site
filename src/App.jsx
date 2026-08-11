import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import { useTheme } from './hooks/useTheme.js';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  // Mirrors the original body.classList.toggle('dark-mode') behavior,
  // but driven by React state instead of directly touching the DOM.
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark);
  }, [isDark]);

  return (
    <div className={isDark ? 'dark-mode' : undefined}>
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <BackToTop />
      <Footer />
    </div>
  );
}
