import { samplesHref } from "@/lib/site";

export function DemoPreviewSection() {
  return (
    <section className="demo-preview" id="samples">
      <div className="container">
        <div className="mono">Curious what this looks like?</div>
        <h2>See the demo samples</h2>
        <p>
          Six sample concepts - headshot suites, brand identity boards,
          marketing assets, LinkedIn systems, 3D brand experiences, and editorial
          layouts.
        </p>
        <a className="btn demo-button" href={samplesHref}>
          View Demo Samples <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
