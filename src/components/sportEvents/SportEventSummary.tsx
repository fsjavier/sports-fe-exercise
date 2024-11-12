import { Link } from "react-router-dom";
import { SportEvent } from "../../types";
import {
  capitalizeFirstLetter,
  capitalizeFirstLetterOfEachWord,
} from "../../utils/textHelper";

interface SportEventSummaryProps {
  sportEvent: SportEvent;
}

export default function SportEventSummary({
  sportEvent,
}: SportEventSummaryProps) {
  const validatedHomeTeamName = capitalizeFirstLetterOfEachWord(
    sportEvent.homeTeam?.name
  );
  const validatedAwayTeamName = capitalizeFirstLetterOfEachWord(
    sportEvent.awayTeam?.name
  );
  const validatedSport = capitalizeFirstLetter(sportEvent.sport);
  const validatedCompetitionName = capitalizeFirstLetterOfEachWord(
    sportEvent.originCompetitionName
  );
  const validatedTime = sportEvent.timeVenueUTC || "N/A";
  const validatedStatus = capitalizeFirstLetter(sportEvent.status);

  return (
    <li className="border-b pb-2">
      <Link
        to={`/event/${sportEvent.id}`}
        className="block hover:bg-primary-50 p-2 rounded"
      >
        <div className="font-semibold">
          {validatedHomeTeamName} vs {validatedAwayTeamName}
        </div>
        <div className="text-sm text-muted-500">{validatedSport}</div>
        <div className="text-sm text-muted-500">{validatedTime}</div>
        <div className="text-sm text-muted-500">{validatedCompetitionName}</div>
        <div className="text-sm text-muted-500">{validatedStatus}</div>
      </Link>
    </li>
  );
}
