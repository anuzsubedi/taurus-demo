const contactHref = "mailto:admin@taurusai.io";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="header-pill">
          <a className="logo" href="#top" aria-label="NEXUS by Taurus Ai">
            NEXUS <span>by Taurus Ai</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#options">Packages</a>
            <a href="#samples">Samples</a>
            <a href="#process">Process</a>
          </nav>
          <a className="btn header-contact" href={contactHref}>
            Contact
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-left">
              <div className="mono hero-kicker">
                Prepared for Tera Gillen-Petrozzi
              </div>
              <h1>Let&apos;s build something that matches your energy.</h1>
              <p>
                You&apos;re a lot of extra - in the best way. Cherish Inc,
                LaSalle Living, your coaching. We build the platform that makes
                all of it unmistakable.
              </p>
              <div className="hero-actions">
                <a className="btn" href="#options">
                  Choose your path <span aria-hidden="true">&rarr;</span>
                </a>
                <a className="btn btn-ghost" href="#samples">
                  See samples
                </a>
              </div>
            </div>

            <div className="hero-image">
              <div className="letter-preview">
                &quot;I watched your story - the tiny fierce bull who made it to
                final three. That determination doesn&apos;t stop when the
                cameras turn off.&quot;
                <br />
                <br />
                <strong>- Effin Fernandez</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="letter-section">
          <div className="container">
            <div className="letter-card">
              <div className="greeting">
                You&apos;re a lot of extra - in the best way.
              </div>
              <p>
                I watched your story - the tiny fierce bull who made it to final
                three. That determination doesn&apos;t stop when the cameras
                turn off. It shows up in Cherish Inc, your classes, your family.
              </p>
              <p>
                NEXUS by Taurus Ai builds AI-powered platforms for founders
                like you. We&apos;re based in Windsor - your neighbour. And I
                think what you&apos;re building deserves a presence as bold as
                you are.
              </p>
              <p>
                Pick the path that feels right. I&apos;ll come to our call ready
                to talk about exactly that.
              </p>
              <div className="signoff">
                <strong>Effin Fernandez</strong>
                <br />
                <span>
                  Founder &amp; CEO, TAURUS AI Corp
                  <br />
                  admin@taurusai.io &middot; +1 519-331-3285
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust" id="options">
          <div className="container trust-grid">
            <div className="trust-item">
              <div className="mono">Platforms</div>
              <strong>6</strong>
            </div>
            <div className="trust-item">
              <div className="mono">Markets</div>
              <strong>4</strong>
            </div>
            <div className="trust-item">
              <div className="mono">Revenue Target</div>
              <strong>$17M</strong>
            </div>
            <div className="trust-item">
              <div className="mono">Based</div>
              <strong>Windsor, ON</strong>
            </div>
          </div>
        </section>

        <section className="placeholder-section" id="samples">
          <div className="container">
            <div className="mono">Curious what this looks like?</div>
            <h2>See the demo samples</h2>
          </div>
        </section>

        <section className="placeholder-section" id="process">
          <div className="container">
            <div className="mono">How it works</div>
            <h2>From brief to brand in three moves</h2>
          </div>
        </section>
      </main>
    </>
  );
}
