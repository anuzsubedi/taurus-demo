import type { PackageOption } from "@/lib/packages";
import { packages } from "@/lib/packages";

type OptionsSectionProps = {
  selectedOption: PackageOption;
  onSelect: (option: PackageOption) => void;
};

export function OptionsSection({
  selectedOption,
  onSelect,
}: OptionsSectionProps) {
  return (
    <section className="options-section" id="options">
      <div className="container">
        <div className="options-header">
          <div className="mono">Choose your path</div>
          <h2>Pick one. I&apos;ll tailor our 15-minute call around it.</h2>
        </div>
        <div className="options-grid">
          {packages.map((option) => (
            <button
              aria-pressed={selectedOption.id === option.id}
              className={`option-card${
                selectedOption.id === option.id ? " selected" : ""
              }`}
              key={option.id}
              onClick={() => onSelect(option)}
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
  );
}
