import { describe, it, expect } from "vitest";
import { validatedDetailSportEvent } from "./sportDataCheckHelper";
import { SportEvent } from "../types";

describe("validatedDetailSportEvent", () => {
  it("returns true when all required fields are present", () => {
    const event = {
      dateVenue: "2024-11-10",
      homeTeam: {
        name: "Test Team A",
        officialName: "Test Team A",
        slug: "test-team-a",
      },
      awayTeam: {
        name: "Test Team B",
        officialName: "Test Team B",
        slug: "test-team-b",
      },
    };
    expect(validatedDetailSportEvent(event as SportEvent)).toBe(true);
  });

  it("returns false if homeTeam is missing", () => {
    const event = {
      dateVenue: "2024-11-10",
      awayTeam: {
        name: "Test Team B",
        officialName: "Test Team B",
        slug: "test-team-b",
      },
    };
    expect(validatedDetailSportEvent(event as SportEvent)).toBe(false);
  });

  it("returns false if awayTeam is missing", () => {
    const event = {
      dateVenue: "2024-11-10",
      homeTeam: {
        name: "Test Team A",
        officialName: "Test Team A",
        slug: "test-team-a",
      },
    };
    expect(validatedDetailSportEvent(event as SportEvent)).toBe(false);
  });

  it("returns false if dateVenue is missing", () => {
    const event = {
      homeTeam: {
        name: "Test Team A",
        officialName: "Test Team A",
        slug: "test-team-a",
      },
      awayTeam: {
        name: "Test Team B",
        officialName: "Test Team B",
        slug: "test-team-b",
      },
    };
    expect(validatedDetailSportEvent(event as SportEvent)).toBe(false);
  });
});
