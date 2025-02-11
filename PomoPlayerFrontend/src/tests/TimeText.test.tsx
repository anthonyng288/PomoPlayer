import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";
import TimeTextComponent from "../components/TimeTextComponent";

afterEach(() => {
  cleanup();
});

describe("TimeText", () => {
  it("Should render with default time of 30:00", () => {
    render(<TimeTextComponent />);
    expect(screen.getByText("30:00")).toBeInTheDocument();
  });

  it("Should render with time of 10 minutes with prop value of 600", () => {
    render(<TimeTextComponent time={600} />);
    expect(screen.getByText("10:00")).toBeInTheDocument();
  });

  it("Should render with time of 61:01 minutes with prop value of 3661", () => {
    render(<TimeTextComponent time={3661} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "61:01"
    );
  });

  it("Should render default value when time is a negative", () => {
    render(<TimeTextComponent time={-200} />);
    expect(screen.getByText("30:00")).toBeInTheDocument();
  });

  it("Should handle large values with 7200 displaying 120:00", () => {
    render(<TimeTextComponent time={7200} />);
    expect(screen.getByText("120:00")).toBeInTheDocument();
  });
});
