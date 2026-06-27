import { contactEmail, contactPhone } from "@/lib/site";

export function LetterSection() {
  return (
    <section className="letter-section">
      <div className="container">
        <div className="letter-card">
          <div className="greeting">
            You&apos;re a lot of extra - in the best way.
          </div>
          <p>
            I watched your story - the tiny fierce bull who made it to final
            three. That determination doesn&apos;t stop when the cameras turn
            off. It shows up in Cherish Inc, your classes, your family.
          </p>
          <p>
            NEXUS by Taurus Ai builds AI-powered platforms for founders like
            you. We&apos;re based in Windsor - your neighbour. And I think what
            you&apos;re building deserves a presence as bold as you are.
          </p>
          <p>
            Pick the path that feels right. I&apos;ll come to our call ready to
            talk about exactly that.
          </p>
          <div className="signoff">
            <strong>Effin Fernandez</strong>
            <br />
            <span>
              Founder &amp; CEO, TAURUS AI Corp
              <br />
              {contactEmail} &middot; {contactPhone}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
