import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, it, vi } from "vitest";
import TimerButtons from "../components/TimerButtons";

afterEach(() => {
  cleanup();
});

const onStartPause = vi.fn(()=> false);
const onReset = vi.fn(() => );

describe("TimerButtons", () => {
  it("Should render the buttons by default", () => {
    render(<TimerButtons isRunning={true} onStartPause={} onReset={} />);
  });
});
