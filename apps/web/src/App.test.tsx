import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("Phase 1 planning prototype", () => {
  it("clearly identifies itself as a non-functional planning prototype", () => {
    render(<App />);
    expect(screen.getAllByText(/planning prototype/i).length).toBeGreaterThan(
      0,
    );
    expect(screen.getByText(/no wallet is connected/i)).toBeTruthy();
  });

  it("shows proposed values and placeholder journeys without financial actions", () => {
    render(<App />);
    expect(screen.getByText("200 USDT")).toBeTruthy();
    expect(screen.getByText("100–10,000 USDT")).toBeTruthy();
    expect(screen.getByText("12 months")).toBeTruthy();
    expect(screen.getByText("No actions are enabled")).toBeTruthy();
  });
});
