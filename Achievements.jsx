const ITEMS = [
  {
    year: "2026",
    title: "Smart India Hackathon — internal selection",
    sub: "Selected internally for RuralCare Connect, our team's healthcare access prototype.",
  },
  {
    year: "2026",
    title: "IIT Bombay × VIT Research Internship — selected",
    sub: "3-month research internship on landslides and rock characteristics.",
  },
  {
    year: "—",
    title: "Tata GenAI Powered Data Analytics — Forage",
    sub: "Virtual experience program.",
  },
  {
    year: "—",
    title: "Machine Learning and AI with Python — HarvardX / edX",
    sub: "Online coursework.",
  },
  {
    year: "—",
    title: "CDAC Cloud Computing Training — SMVITA",
    sub: "Training program.",
  },
  {
    year: "—",
    title: "Presentation Skills — Topper, 50/50",
    sub: "Course completion.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="wrap">
        <div className="section-head">
          <span className="section-index">06</span>
          <h2>Learning & achievements</h2>
        </div>

        <div className="achieve-list">
          {ITEMS.map((item) => (
            <div className="achieve-row" key={item.title}>
              <span className="achieve-year">{item.year}</span>
              <div>
                <span className="achieve-title">{item.title}</span>
                <span className="achieve-sub">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
