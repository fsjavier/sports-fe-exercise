import { SportEvent } from "../types";

/**
 * Check if the event has the required data to be displayed
 * in the EventDetailPage. Required data: homeTeam, awayTeam, dateVenue.
 * All other data is optional and handled in the components.
 */
export function validatedDetailSportEvent(event: SportEvent): boolean {
  if (!event.homeTeam || !event.awayTeam || !event.dateVenue) return false;
  return true;
}
