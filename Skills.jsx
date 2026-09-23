const GROUPS = [
  {
    title: "Content",
    items: ["Content writing", "Technical writing", "LinkedIn content", "Storytelling", "Research"],
  },
  {
    title: "Research",
    items: ["Startup research", "Market research", "Competitor research", "Information analysis"],
  },
  {
    title: "Technology",
    items: ["Python", "Power BI", "React", "HTML", "CSS", "GitHub", "Cloud computing"],
  },
  {
    title: "Tools",
    items: ["Canva", "Microsoft Office", "Google Workspace", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="section-index">05</span>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {GROUPS.map((g) => (
            <div className="skill-group" key={g.title}>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
