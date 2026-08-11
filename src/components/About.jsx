import { aboutText } from '../data/siteData.js';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <p>{aboutText}</p>
      </div>
    </section>
  );
}
