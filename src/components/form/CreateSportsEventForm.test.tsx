import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CreateSportsEventForm from "./CreateSportsEventForm";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={["/add-event"]}>{children}</MemoryRouter>
    </QueryClientProvider>
  );
};

describe("CreateSportsEventForm", () => {
  it("renders all fields", () => {
    render(<CreateSportsEventForm />, { wrapper: Wrapper });

    expect(screen.getByText("Sport")).toBeInTheDocument();
    expect(screen.getByText("Home Team")).toBeInTheDocument();
    expect(screen.getByText("Home Team Score")).toBeInTheDocument();
    expect(screen.getByText("Away Team")).toBeInTheDocument();
    expect(screen.getByText("Away Team Score")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Time (UTC)")).toBeInTheDocument();
    expect(screen.getByText("Competition")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Event" })
    ).toBeInTheDocument();
  });

  it("disables submit button when required fields are empty", () => {
    render(<CreateSportsEventForm />, { wrapper: Wrapper });

    const submitButton = screen.getByRole("button", { name: "Add Event" });
    expect(submitButton).toBeDisabled();
  });
});
