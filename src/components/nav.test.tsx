import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Nav } from "./nav";

const { usePathname } = vi.hoisted(() => ({
  usePathname: vi.fn(() => "/"),
}));

vi.mock("next/navigation", () => ({ usePathname }));

describe("Nav", () => {
  beforeEach(() => {
    usePathname.mockReturnValue("/");
  });

  it("provides the four required destinations", () => {
    render(<Nav />);

    expect(screen.getByRole("link", { name: "Saras" })).toHaveAttribute(
      "href",
      "https://saras.works",
    );
    expect(screen.getByRole("link", { name: "Masala Dew" })).toHaveAttribute(
      "href",
      "https://masaladew.com",
    );
    expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute(
      "href",
      "/services",
    );
    expect(screen.getByRole("link", { name: "Careers" })).toHaveAttribute(
      "href",
      "/careers",
    );
  });

  it("exposes an accessible mobile menu control", async () => {
    const user = userEvent.setup();
    render(<Nav />);

    const trigger = screen.getByRole("button", { name: "Open navigation menu" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(trigger).toHaveAccessibleName("Close navigation menu");
  });

  it("marks Services visually and semantically active only on its route", () => {
    usePathname.mockReturnValue("/services");
    const { rerender } = render(<Nav />);

    const services = screen.getByRole("link", { name: "Services" });
    expect(services).toHaveAttribute("aria-current", "page");
    expect(services).toHaveAttribute("data-active", "true");
    expect(screen.getByRole("link", { name: "Careers" })).not.toHaveAttribute("aria-current");

    usePathname.mockReturnValue("/services/archive");
    rerender(<Nav />);
    expect(screen.getByRole("link", { name: "Services" })).not.toHaveAttribute("aria-current");
  });

  it.each(["/careers", "/careers/platform-engineer"])(
    "keeps Careers active on %s",
    (pathname) => {
      usePathname.mockReturnValue(pathname);
      render(<Nav />);

      const careers = screen.getByRole("link", { name: "Careers" });
      expect(careers).toHaveAttribute("aria-current", "page");
      expect(careers).toHaveAttribute("data-active", "true");
      expect(screen.getByRole("link", { name: "Services" })).not.toHaveAttribute(
        "aria-current",
      );
    },
  );

  it("puts a skip link before the repeated header navigation", () => {
    const { container } = render(<Nav />);

    const skipLink = screen.getByRole("link", { name: "Skip to content" });
    expect(skipLink).toHaveAttribute("href", "#main-content");
    expect(container.firstElementChild).toBe(skipLink);
  });
});
