export default function Writing() {
  return (
    <section id="writing">
      <div className="wrap">
        <div className="section-head">
          <span className="section-index">04</span>
          <h2>Writing</h2>
          <span className="section-note">Two pieces I wrote alongside my project work</span>
        </div>

        <div className="writing-list">
          <article className="writing-card">
            <p className="writing-kicker">Reflection · RuralCare Connect</p>
            <h3>What I Learned While Building a Healthcare Solution for Rural Areas</h3>
            <p className="writing-excerpt">
              "One thing I learned from this project is that building a
              feature is not the same as solving a problem. Before deciding
              what to build, we had to think about who would actually use it
              and what could go wrong if something as simple as internet
              connectivity was not available."
            </p>
            <p className="writing-topics">
              Rural healthcare access, teleconsultation, triage, referrals,
              and what our student team got wrong before we got it right.
            </p>
          </article>

          <article className="writing-card">
            <p className="writing-kicker">Research & writing sample</p>
            <h3>Why Early-Stage Startups Need More Than a Good Product</h3>
            <p className="writing-excerpt">
              A short piece on why a good product alone rarely carries a
              startup — and why understanding an audience, doing the
              competitor research, and communicating clearly usually matters
              more than posting content often.
            </p>
            <p className="writing-topics">
              Audience research, competitor research, founder storytelling,
              and why useful content beats frequent content. Written as a
              research and writing sample, not from professional experience.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
