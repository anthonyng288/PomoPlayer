import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import TimerButtons from "../components/TimerButtons";

afterEach(() => {
  cleanup();
});

describe("TimerButtons", () => {
  it("Should render the buttons by default", () => {
    //Mock the functions
    const mockOnStartPause = vi.fn();
    const mockOnReset = vi.fn();

    render(
      <TimerButtons
        isRunning={false}
        onStartPause={mockOnStartPause}
        onReset={mockOnReset}
      />
    );

    expect(screen.getByRole("button", { name: "Start" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Reset" })).toBeInTheDocument();
  });

  it("should render the 'pause' button when isRunning prop is true", () => {
    const mockOnStartPause = vi.fn();
    const mockOnReset = vi.fn();

    render(
      <TimerButtons
        isRunning={false}
        onStartPause={mockOnStartPause}
        onReset={mockOnReset}
      />
    );

    expect(screen.getByRole("button", { name: "Reset" })).toBeInTheDocument();
  });

  it("should call the onStartPause when the Start/Pause hutton is clicked", async () => {
    const mockOnStartPause = vi.fn();
    render(
      <TimerButtons
        isRunning={false}
        onStartPause={mockOnStartPause}
        onReset={vi.fn()}
      />
    );

    await userEvent.click(screen.getByRole("button", { name: "Start" }));

    expect(mockOnStartPause).toBeCalledTimes(1);
  });

  it("Should call the onReset when Reset button is clicked", async () => {
    const mockOnReset = vi.fn();

    render(
      <TimerButtons
        isRunning={false}
        onStartPause={vi.fn()}
        onReset={mockOnReset}
      />
    );

    await userEvent.click(screen.getByRole("button", { name: "Reset" }));

    expect(mockOnReset).toBeCalledTimes(1);
  });
});
