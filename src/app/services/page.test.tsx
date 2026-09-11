import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ServicesPage from "./page";

describe("Services route", () => {
  it("preserves the approved offer copy, guarantee, and contact destination", () => {
    render(<ServicesPage />);

    const main = screen.getByRole("main");
    expect(within(main).getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(within(main).getByRole("heading", { level: 1, name: "Reclaim your hours" })).toBeInTheDocument();
    expect(within(main).getByText("60 MINUTES · 5+ HRS/WEEK BACK OR IT'S FREE · FROM $500")).toBeInTheDocument();
    expect(within(main).getByText("SCOPED PER PROJECT · MONTHLY RETAINERS · FROM $2K")).toBeInTheDocument();
    expect(within(main).getByText(/If it doesn't surface at least five hours a week for your team, the audit is free\./)).toBeInTheDocument();
    expect(within(main).getByRole("link", { name: "contact@sanganak.works →" })).toHaveAttribute(
      "href",
      "mailto:contact@sanganak.works",
    );
    expect(main).toHaveAttribute("id", "main-content");
  });
});