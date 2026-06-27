const processSteps = [
  {
    number: "01",
    title: "Strategy Session",
    description:
      "We define your visual north star - audience, positioning, competitive landscape, and the one feeling every piece of content should evoke.",
  },
  {
    number: "02",
    title: "Asset Production",
    description:
      "Headshots, brand board, product photography, social templates - all generated, refined, and delivered in your brand's custom style.",
  },
  {
    number: "03",
    title: "Systems & Deployment",
    description:
      "Reusable templates, prompt libraries, brand guidelines - so Cherish Inc and LaSalle Living maintain consistency across every channel.",
  },
] as const;

export function ProcessSection() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="mono">How it works</div>
        <h2>From brief to brand in three moves</h2>
        <div className="process-grid">
          {processSteps.map((step) => (
            <div className="process-card" key={step.number}>
              <div className="num">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
