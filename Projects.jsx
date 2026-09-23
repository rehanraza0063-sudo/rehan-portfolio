const PROJECTS = [
  {
    tag: "Smart India Hackathon — Student Prototype",
    title: "RuralCare Connect",
    desc: "A prototype aimed at improving healthcare access in rural areas — patient registration, basic records, initial assessment, teleconsultation and referrals to specialists, plus a simple dashboard for different user roles. Offline-friendly use and multilingual support are planned as future improvements, not built yet.",
    contribution:
      "My role: understanding the healthcare access problem, researching what rural patients and health workers actually deal with, planning out the feature set with the team, and preparing the presentation for the hackathon round.",
    stack: ["Research", "Product planning", "Presentation"],
  },
  {
    tag: "Student project",
    title: "Healthcare Data Analytics & Visualization",
    desc: "A project built around organizing healthcare-related data into dashboards and charts that are actually easy to read. The focus was less on the dataset itself and more on finding patterns and presenting them clearly — the kind of thing that matters once you have data but no way to make sense of it quickly.",
    contribution:
      "My role: cleaning and organizing the data, building the visualizations, and working out which chart actually communicates the pattern instead of just showing numbers.",
    stack: ["Python", "Power BI", "Data visualization"],
  },
  {
    tag: "Personal project",
    title: "Japanese Language Learning Web App",
    desc: "I was learning Japanese and got tired of scattered notes and PDFs, so I built a small web app to organize the material — vocabulary, grammar points, practice material — into something I'd actually want to open and use.",
    contribution:
      "My role: the whole thing — from figuring out how to structure the learning material to building the interface itself.",
    stack: ["React", "HTML", "CSS"],
  },
  {
    tag: "Personal projects",
    title: "Biomedical Educational Web Projects",
    desc: "A set of small educational websites and interactive simulations around biomedical topics from my coursework. The idea was to take dense study material and turn it into something visual and a bit more intuitive than a textbook page.",
    contribution:
      "My role: researching the underlying biomedical concepts, simplifying them, and building the visual explanations and interactive pieces around them.",
    stack: ["Web development", "Simulation", "Biomedical research"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <span className="section-index">03</span>
          <h2>Projects</h2>
          <span className="section-note">Student work, not production software</span>
        </div>

        <div className="project-list">
          {PROJECTS.map((p) => (
            <article className="project-row" key={p.title}>
              <div>
                <span className="project-tag">{p.tag}</span>
              </div>
              <div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <p className="project-contribution">
                  <strong>My contribution — </strong>
                  {p.contribution}
                </p>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span className="pill" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
