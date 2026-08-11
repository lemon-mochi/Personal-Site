import { education } from '../data/siteData.js';

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2>Education</h2>
        <p>{education.degree}</p>
        <p>{education.minor}</p>
        <p>Relevant Coursework: {education.coursework.join(', ')}</p>
        {education.honours.map((honour) => (
          <p key={honour}>{honour}</p>
        ))}
        <p>{education.diploma}</p>
      </div>
    </section>
  );
}
