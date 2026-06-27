const trustStats = [
  { label: "Platforms", value: "6" },
  { label: "Markets", value: "4" },
  { label: "Revenue Target", value: "$17M" },
  { label: "Based", value: "Windsor, ON" },
] as const;

export function TrustSection() {
  return (
    <section className="trust">
      <div className="container trust-grid">
        {trustStats.map((stat) => (
          <div className="trust-item" key={stat.label}>
            <div className="mono">{stat.label}</div>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
