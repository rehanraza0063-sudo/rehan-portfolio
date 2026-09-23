const LINKEDIN_URL = "https://www.linkedin.com/in/rehan-raza-shaikh-3869a7328/";
const GITHUB_URL = "https://github.com/rehanraza0063-sudo";

export default function Home() {
  return (
    <section id="top" className="home">
      <div className="wrap">
        <div className="home-grid">
          <div>
            <p className="home-eyebrow">Hi, I'm</p>
            <h1>Rehan Raza Shaikh</h1>
            <p className="home-headline">
              Biomedical Engineering student, working on research, technology
              and content. Building projects, exploring research, and writing
              about what I learn along the way.
            </p>
            <div className="home-actions">
              <a href="#projects" className="btn primary">
                View my work
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="btn">
                LinkedIn
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn">
                GitHub
              </a>
            </div>
          </div>

          <div className="home-aside">
            <dl>
              <dt>Studying</dt>
              <dd>B.Tech, Biomedical Engineering</dd>
              <dt>Institute</dt>
              <dd>Vidyalankar Institute of Technology, Mumbai</dd>
              <dt>Years</dt>
              <dd>2024 – 2028</dd>
              <dt>Also exploring</dt>
              <dd>Computer Science, AI/ML coursework</dd>
              <dt>Currently</dt>
              <dd>Research internship — IIT Bombay × VIT</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
