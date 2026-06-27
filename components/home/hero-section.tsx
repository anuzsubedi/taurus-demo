import { samplesHref } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <div className="mono hero-kicker">Prepared for Tera Gillen-Petrozzi</div>
          <h1>Let&apos;s build something that matches your energy.</h1>
          <p>
            You&apos;re a lot of extra - in the best way. Cherish Inc, LaSalle
            Living, your coaching. We build the platform that makes all of it
            unmistakable.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#options">
              Choose your path <span aria-hidden="true">&rarr;</span>
            </a>
            <a className="btn btn-ghost" href={samplesHref}>
              See samples
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="letter-preview">
            &quot;I watched your story - the tiny fierce bull who made it to
            final three. That determination doesn&apos;t stop when the cameras
            turn off.&quot;
            <br />
            <br />
            <strong>- Effin Fernandez</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
