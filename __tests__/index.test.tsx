import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders the navbar", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Poly Area Calc/i,
    });

    expect(heading).toBeInTheDocument();
  });

  describe("file is not selected", () => {
    it("buttons should be disabled", () => {
      render(<Home />);

      const resetButton = screen.getByRole("button", { name: "Reset" });
      expect(resetButton).toBeDisabled();

      const disabledButton = screen.getByRole("button", { name: "Submit" });
      expect(disabledButton).toBeDisabled();
    });
  });

  describe("file is selected", () => {
    it("buttons should be enabled", () => {
      render(<Home />);

      const input = screen.getByLabelText("Select File");
      const event = {
        target: {
          files: ["someFile.json"],
        },
      };
      fireEvent.change(input, event);

      const resetButton = screen.getByRole("button", { name: "Reset" });
      expect(resetButton).not.toBeDisabled();

      const disabledButton = screen.getByRole("button", { name: "Submit" });
      expect(disabledButton).not.toBeDisabled();
    });
  });
});
