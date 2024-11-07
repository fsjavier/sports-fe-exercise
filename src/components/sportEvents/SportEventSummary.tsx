import { Link } from "react-router-dom";
import { SportEvent } from "../../types";

interface SportEventSummaryProps {
  sportEvent: SportEvent;
}

export default function SportEventSummary({
  sportEvent,
}: SportEventSummaryProps) {
  return (
    <li className="border-b pb-2">
      <Link
        to={`/event/${sportEvent.id}`}
        className="block hover:bg-gray-100 p-2 rounded"
      >
        <div className="font-semibold">
          {sportEvent.homeTeam?.name} vs {sportEvent.awayTeam?.name}
        </div>
        <div className="text-sm text-gray-600">{sportEvent.timeVenueUTC}</div>
        <div className="text-sm text-gray-600">
          {sportEvent.originCompetitionName}
        </div>
      </Link>
    </li>
  );
}
