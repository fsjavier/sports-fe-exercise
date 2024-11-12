import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SportEventDetailView from "./SportEventDetailView";
import { EventSport, EventStatus, SportEvent } from "../../types";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={["/event/1"]}>{children}</MemoryRouter>
    </QueryClientProvider>
  );
};

describe("SportEventDetailView", () => {
  it("displays played game correctly with result", () => {
    const mockEventPlayed: SportEvent = {
      id: "1",
      sport: EventSport.Football,
      status: EventStatus.Played,
      timeVenueUTC: "15:00",
      dateVenue: "2024-11-10",
      homeTeam: {
        name: "Home Team",
        officialName: "Home Team",
        slug: "home-team",
      },
      awayTeam: {
        name: "Away Team",
        officialName: "Away Team",
        slug: "away-team",
      },
      result: {
        homeGoals: 2,
        awayGoals: 1,
      },
      originCompetitionName: "Test Competition",
      originCompetitionId: "test-competiton",
      season: 2024,
    };
    render(<SportEventDetailView event={mockEventPlayed} />, {
      wrapper: Wrapper,
    });
    expect(screen.getByText("Home Team (N/A)")).toBeInTheDocument();
    expect(screen.getByText("Away Team (N/A)")).toBeInTheDocument();
    expect(screen.getByText("Result")).toBeInTheDocument();
    expect(screen.getByText("Played")).toBeInTheDocument();
  });

  it("displays scheduled game correctly without result", () => {
    const mockEventScheduled: SportEvent = {
      id: "1",
      sport: EventSport.Football,
      status: EventStatus.Scheduled,
      timeVenueUTC: "15:00",
      dateVenue: "2024-12-20",
      homeTeam: {
        name: "Home Team",
        officialName: "Home Team",
        slug: "home-team",
      },
      awayTeam: {
        name: "Away Team",
        officialName: "Away Team",
        slug: "away-team",
      },
      result: {
        homeGoals: 2,
        awayGoals: 1,
      },
      originCompetitionName: "Test Competition",
      originCompetitionId: "test-competiton",
      season: 2024,
    };
    render(<SportEventDetailView event={mockEventScheduled} />, {
      wrapper: Wrapper,
    });
    expect(screen.getByText("Home Team (N/A)")).toBeInTheDocument();
    expect(screen.getByText("Away Team (N/A)")).toBeInTheDocument();
    expect(screen.queryByText("Result")).not.toBeInTheDocument();
    expect(screen.getByText("Scheduled")).toBeInTheDocument();
  });
});
