import { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CalendarProvider } from "../../context/CalendarContext";
import Calendar from "./Calendar";
import {
  getMonthYear,
  getNextMonth,
  getPreviousMonth,
} from "../../utils/dateHelper";

interface WrapperProps {
  children: ReactNode;
}

vi.mock("../../hooks/useSportEvents", () => ({
  useSportEvents: () => ({
    data: [],
    isLoading: false,
    error: null,
  }),
}));

const Wrapper = ({ children }: WrapperProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CalendarProvider>{children}</CalendarProvider>
    </QueryClientProvider>
  );
};

describe("Calendar Component", () => {
  it("renders the current month", () => {
    render(<Calendar />, { wrapper: Wrapper });

    const monthYear = getMonthYear(new Date());
    expect(screen.getByText(monthYear)).toBeInTheDocument();
  });

  it("allows user to navigate to previous month", async () => {
    render(<Calendar />, { wrapper: Wrapper });

    const prevButton = screen.getByLabelText("Previous month");

    const initialMonth = getMonthYear(new Date());
    const previousMonth = getMonthYear(getPreviousMonth(new Date()));

    await userEvent.click(prevButton);

    expect(screen.getByText(previousMonth)).toBeInTheDocument();
    expect(screen.queryByText(initialMonth)).not.toBeInTheDocument();
  });

  it("allows user to navigate to next month", async () => {
    render(<Calendar />, { wrapper: Wrapper });

    const nextButton = screen.getByLabelText("Next month");

    const initialMonth = getMonthYear(new Date());
    const nextMonth = getMonthYear(getNextMonth(new Date()));

    await userEvent.click(nextButton);

    expect(screen.getByText(nextMonth)).toBeInTheDocument();
    expect(screen.queryByText(initialMonth)).not.toBeInTheDocument();
    screen.debug();
  });
});
