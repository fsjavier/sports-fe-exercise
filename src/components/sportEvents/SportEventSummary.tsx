import { Link } from "react-router-dom";
import { SportEvent } from "../../types";

interface SportEventSummaryProps {
  sportEvent: SportEvent;
}

export default function SportEventSummary({
  sportEvent,
}: SportEventSummaryProps) {
  const validatedHomeTeamName = sportEvent.homeTeam?.name || "N/A";
  const validatedAwayTeamName = sportEvent.awayTeam?.name || "N/A";
  const validatedCompetitionName = sportEvent.originCompetitionName || "N/A";
  const validatedTime = sportEvent.timeVenueUTC || "N/A";
  const validatedStatus = sportEvent.status || "N/A";

  return (
    <li className="border-b pb-2">
      <Link
        to={`/event/${sportEvent.id}`}
        className="block hover:bg-primary-50 p-2 rounded"
      >
        <div className="font-semibold">
          {validatedHomeTeamName} vs {validatedAwayTeamName}
        </div>
        <div className="text-sm text-muted-500">{validatedTime}</div>
        <div className="text-sm text-muted-500">{validatedCompetitionName}</div>
        <div className="text-sm text-muted-500">{validatedStatus}</div>
      </Link>
    </li>
  );
}
