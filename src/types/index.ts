export interface SportEvent {
  season: number;
  status: string;
  timeVenueUTC: string;
  dateVenue: string;
  stadium: string | null;
  homeTeam: Team;
  awayTeam: Team;
  result: Result;
  stage: Stage;
  group: string | null;
  originCompetitionId: string;
  originCompetitionName: string;
  id: string;
}

export interface Team {
  name: string;
  officialName: string;
  slug: string;
}

export interface Stage {
  id: string;
  name: string;
  ordering: number;
}

export interface Result {
  homeGoals: number;
  awayGoals: number;
  winner: string;
  message: string | null;
  goals: string[];
  yellowCards: string[];
  secondYellowCards: string[];
  directRedCards: string[];
}
