import { skillGroups } from '../data/siteData.js';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <ul>
          {skillGroups.map((group) => (
            <li key={group.category}>
              {group.category}: {group.items.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
