import { SportEvent } from "../../types";
import { capitalizeFirstLetter } from "../../utils/textHelper";
import SportEventDetailHeader from "./SportEventDetailHeader";
import SportEventDetailInfo from "./SportEventDetailInfo";
import SportEventDetailTeamInfo from "./SportEventDetailTeamInfo";
import SportEventDetailResult from "./SportEventDetailResult";

interface SportEventDetailViewProps {
  event: SportEvent;
}

export default function SportEventDetailView({
  event,
}: SportEventDetailViewProps) {
  const validatedStatus = capitalizeFirstLetter(event?.status);

  return (
    <div className="container mx-auto px-4 py-8">
      <SportEventDetailHeader
        homeTeam={event.homeTeam?.name}
        awayTeam={event.awayTeam?.name}
        competitionName={event.originCompetitionName}
      />
      <div className="bg-white shadow-lg rounded-b-lg overflow-hidden">
        <div className="p-6">
          <SportEventDetailInfo
            date={event.dateVenue}
            time={event.timeVenueUTC}
            stage={event.stage?.name}
            stadium={event.stadium}
          />
          <SportEventDetailTeamInfo
            homeTeam={event.homeTeam}
            awayTeam={event.awayTeam}
          />
          {event.status === "played" && (
            <SportEventDetailResult result={event.result} />
          )}
          <div className="mt-6">
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Status:</span> {validatedStatus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
