// Add your email address here — it wasn't provided, so it isn't invented.
const EMAIL = ""; // e.g. "rehan@example.com"

const LINKEDIN_URL = "https://www.linkedin.com/in/rehan-raza-shaikh-3869a7328/";
const GITHUB_URL = "https://github.com/rehanraza0063-sudo";

export default function Contact() {
  const emailHref = EMAIL ? `mailto:${EMAIL}` : undefined;

  return (
    <section id="contact" className="contact">
      <div className="wrap contact-inner">
        <h2>Interested in research, technology, content or interesting projects? Let's connect.</h2>

        <div className="contact-actions">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="btn primary">
            LinkedIn
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn">
            GitHub
          </a>
          {emailHref ? (
            <a href={emailHref} className="btn">
              Email me
            </a>
          ) : (
            <span className="btn" style={{ opacity: 0.6, cursor: "default" }} title="Add your email in Contact.jsx">
              Email me
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
