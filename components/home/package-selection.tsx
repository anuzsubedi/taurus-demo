"use client";

import { useState } from "react";

import { CtaSection } from "@/components/home/cta-section";
import { OptionsSection } from "@/components/home/options-section";
import { packages, type PackageOption } from "@/lib/packages";

export function PackageSelection() {
  const [selectedOption, setSelectedOption] = useState<PackageOption>(
    packages[0],
  );

  return (
    <>
      <OptionsSection
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <CtaSection selectedOption={selectedOption} />
    </>
  );
}
