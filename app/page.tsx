"use client";

import { useState } from "react";

const contactHref = "mailto:admin@taurusai.io";
const samplesHref = "#samples";

const options = [
  {
    id: "brand",
    name: "The Brand",
    tag: "Starter",
    tagClass: "tag-starter",
    description:
      "Premium website + personal brand suite. Your story, classes, booking, media kit - one polished place that shows the world who you are.",
    features: [
      "Custom Design",
      "Mobile First",
      "SEO",
      "Media Kit",
      "Booking",
      "1 Yr Hosting",
    ],
    price: "$1,500",
    priceNote: "one-time",
  },
  {
    id: "engine",
    name: "The Engine",
    tag: "Growth",
    tagClass: "tag-growth",
    description:
      "AI social media automation. Your voice, your personality - content production, scheduling, and analytics handled by our Social Media Orchestra.",
    features: [
      "Multi-Platform",
      "AI Content",
      "Auto-Schedule",
      "Analytics",
      "Campaign Mgmt",
    ],
    price: "$3,000",
    priceNote: "setup \u00b7 $300/mo",
  },
  {
    id: "fullstack",
    name: "The Full Stack",
    tag: "Best Value",
    tagClass: "tag-full",
    description:
      "Everything. Website + social engine + business automation + video pipeline. One unified system for your entire operation.",
    features: [
      "Website",
      "Social Auto",
      "Biz Ops",
      "Video Pipeline",
      "Email",
      "Priority Support",
    ],
    price: "$7,500",
    priceNote: "setup \u00b7 $500/mo",
  },
];

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const ctaHref = `mailto:admin@taurusai.io?subject=${encodeURIComponent(
    `I want ${selectedOption.name} - Tera`,
  )}&body=${encodeURIComponent(
    `Effin, I looked at the package. I want ${selectedOption.name}. Let's talk at 2:30.`,
  )}`;

  return (
    <>
      <header className="site-header">
        <div className="header-pill">
          <a className="logo" href="#top" aria-label="NEXUS by Taurus Ai">
            NEXUS <span>by Taurus Ai</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#options">Packages</a>
            <a href={samplesHref}>Samples</a>
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
                <a className="btn btn-ghost" href={samplesHref}>
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

        <section className="trust">
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

        <section className="options-section" id="options">
          <div className="container">
            <div className="options-header">
              <div className="mono">Choose your path</div>
              <h2>Pick one. I&apos;ll tailor our 15-minute call around it.</h2>
            </div>
            <div className="options-grid">
              {options.map((option) => (
                <button
                  aria-pressed={selectedOption.id === option.id}
                  className={`option-card${
                    selectedOption.id === option.id ? " selected" : ""
                  }`}
                  key={option.id}
                  onClick={() => setSelectedOption(option)}
                  type="button"
                >
                  <span className={`tag ${option.tagClass}`}>{option.tag}</span>
                  <h3>{option.name}</h3>
                  <p>{option.description}</p>
                  <div className="features">
                    {option.features.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>
                  <div className="price">
                    {option.price} <small>{option.priceNote}</small>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Ready to start?</h2>
            <p>Or just show up at 2:30. I&apos;ll be ready either way.</p>
            <div className="cta-actions">
              <a className="btn" href={ctaHref}>
                I Want This <span aria-hidden="true">&rarr;</span>
              </a>
              <a className="btn btn-ghost" href={samplesHref}>
                Preview the samples <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        <section className="demo-preview" id="samples">
          <div className="container">
            <div className="mono">Curious what this looks like?</div>
            <h2>See the demo samples</h2>
            <p>
              Six sample concepts - headshot suites, brand identity boards,
              marketing assets, LinkedIn systems, 3D brand experiences, and
              editorial layouts.
            </p>
            <a className="btn demo-button" href={samplesHref}>
              View Demo Samples <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </section>

        <section className="process" id="process">
          <div className="container">
            <div className="mono">How it works</div>
            <h2>From brief to brand in three moves</h2>
            <div className="process-grid">
              <div className="process-card">
                <div className="num">01</div>
                <h3>Strategy Session</h3>
                <p>
                  We define your visual north star - audience, positioning,
                  competitive landscape, and the one feeling every piece of
                  content should evoke.
                </p>
              </div>
              <div className="process-card">
                <div className="num">02</div>
                <h3>Asset Production</h3>
                <p>
                  Headshots, brand board, product photography, social templates
                  - all generated, refined, and delivered in your brand&apos;s
                  custom style.
                </p>
              </div>
              <div className="process-card">
                <div className="num">03</div>
                <h3>Systems &amp; Deployment</h3>
                <p>
                  Reusable templates, prompt libraries, brand guidelines - so
                  Cherish Inc and LaSalle Living maintain consistency across
                  every channel.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div>
            <strong>NEXUS</strong> by Taurus Ai -{" "}
            <span>Windsor, Ontario</span>
          </div>
          <div>
            <a href={contactHref}>admin@taurusai.io</a>
            <span className="footer-dot">&middot;</span>
            <span>+1 519-331-3285</span>
          </div>
        </div>
      </footer>
    </>
  );
}
