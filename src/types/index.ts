export interface SportEvent {
  sport?: EventSport;
  season: number;
  status: EventStatus;
  timeVenueUTC: string;
  dateVenue: string;
  stadium?: string | null;
  homeTeam: Team;
  awayTeam: Team;
  result?: Result;
  stage?: Stage;
  group?: string | null;
  originCompetitionId: string;
  originCompetitionName: string;
  id: string;
}

export enum EventSport {
  Football = "football",
  Basketball = "basketball",
  Hockey = "hockey",
  Rugby = "rugby",
  AmericanFootball = "american-football",
  Other = "other",
}

export enum EventStatus {
  Cancelled = "cancelled",
  Played = "played",
  Scheduled = "scheduled",
}

export interface Team {
  name: string;
  officialName: string;
  slug: string;
  abbreviation?: string;
  teamCountryCode?: string;
  stagePosition?: number | null;
}

export interface Stage {
  id: string;
  name: string;
  ordering: number;
}

export interface Result {
  homeGoals: number;
  awayGoals: number;
  winner?: string | null;
  winnerId?: string | null;
  message?: string | null;
  goals?: string[] | null;
  yellowCards?: string[] | null;
  secondYellowCards?: string[] | null;
  directRedCards?: string[] | null;
  scoreByPeriods?: string[] | null;
}
