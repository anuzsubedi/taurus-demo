const mailtoHref =
  "mailto:admin@taurusai.io?subject=TERA%20package%20demo&body=Hi%20Effin%2C%20I%20looked%20at%20the%20TERA%20package%20demo.%20Let's%20talk.";

export default function Home() {
  return (
    <main className="tera-page">
      <header className="tera-header" aria-label="NEXUS page navigation">
        <div className="header-pill">
          <a className="logo" href="#top" aria-label="NEXUS by Taurus Ai home">
            NEXUS <span>by Taurus Ai</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#packages">Packages</a>
            <a href="#samples">Samples</a>
            <a href="#process">Process</a>
          </nav>
          <a className="btn btn-small" href={mailtoHref}>
            Contact
          </a>
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="mono hero-kicker">
              Prepared for Tera Gillen-Petrozzi
            </p>
            <h1 id="hero-title">Let&apos;s build something that matches your energy.</h1>
            <p className="hero-lede">
              You&apos;re a lot of extra - in the best way. Cherish Inc,
              LaSalle Living, your coaching. We build the platform that makes
              all of it unmistakable.
            </p>
            <div className="hero-actions" aria-label="Hero actions">
              <a className="btn" href="#packages">
                Choose your path <span aria-hidden="true">-&gt;</span>
              </a>
              <a className="btn btn-ghost" href="#samples">
                See samples
              </a>
            </div>
          </div>

          <figure className="quote-preview">
            <blockquote>
              &quot;I watched your story - the tiny fierce bull who made it to
              final three. That determination doesn&apos;t stop when the cameras
              turn off.&quot;
            </blockquote>
            <figcaption>- Effin Fernandez</figcaption>
          </figure>
        </div>
      </section>

      <section className="anchor-band" aria-label="Demo anchors">
        <a id="packages" href={mailtoHref}>
          <span className="mono">Packages</span>
          <strong>Choose your path</strong>
        </a>
        <a id="samples" href={mailtoHref}>
          <span className="mono">Samples</span>
          <strong>Preview the work</strong>
        </a>
        <a id="process" href={mailtoHref}>
          <span className="mono">Process</span>
          <strong>Start the call</strong>
        </a>
      </section>
    </main>
  );
}
