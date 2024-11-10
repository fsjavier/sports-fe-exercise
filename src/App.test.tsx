import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getMonthYear } from "./utils/dateHelper";
import App from "./App";

describe("App Routing and Navigation", () => {
  it("navigates from HomePage to AddSportEventPage when 'Add Event' link is clicked", async () => {
    render(<App />);

    const addEventLink = screen.getByRole("link", { name: "Add Event" });
    expect(addEventLink).toBeInTheDocument();

    await userEvent.click(addEventLink);

    expect(screen.getByText("Add New Sport Event")).toBeInTheDocument();
  });

  it("navigates from AddSportEventPage to HomePage when 'Home' link is clicked", async () => {
    render(<App />);

    const homeLink = screen.getByRole("link", { name: "Home" });
    await userEvent.click(homeLink);

    const monthYear = getMonthYear(new Date());
    expect(screen.getByText(monthYear)).toBeInTheDocument();
  });
});
