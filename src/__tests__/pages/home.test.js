import Page from "../../pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
  render(<Page />);

  it("test page component", () => {
    expect(screen.getByText("Demo: Search Target's Product")).toBeInTheDocument();
  })
});