import type { PackageOption } from "@/lib/packages";
import { buildCtaHref } from "@/lib/packages";
import { samplesHref } from "@/lib/site";

type CtaSectionProps = {
  selectedOption: PackageOption;
};

export function CtaSection({ selectedOption }: CtaSectionProps) {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Ready to start?</h2>
        <p>Or just show up at 2:30. I&apos;ll be ready either way.</p>
        <div className="cta-actions">
          <a className="btn" href={buildCtaHref(selectedOption)}>
            I Want This <span aria-hidden="true">&rarr;</span>
          </a>
          <a className="btn btn-ghost" href={samplesHref}>
            Preview the samples <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
