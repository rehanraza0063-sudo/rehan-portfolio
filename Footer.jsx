const LINKEDIN_URL = "https://www.linkedin.com/in/rehan-raza-shaikh-3869a7328/";
const GITHUB_URL = "https://github.com/rehanraza0063-sudo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {year} Rehan Raza Shaikh</span>
        <div className="footer-links">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
