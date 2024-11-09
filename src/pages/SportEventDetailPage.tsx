import { useParams } from "react-router-dom";
import { SportEvent } from "../types";
import { validatedDetailSportEvent } from "../utils/sportDataCheckHelper";
import { capitalizeFirstLetter } from "../utils/textHelper";
import { useSportEvents } from "../hooks/useSportEvents";
import AlertMessage from "../components/ui/AlertMessage";
import GoBack from "../components/ui/GoBack";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingMessage from "../components/ui/LoadingMessage";
import SportEventDetailHeader from "../components/sportEvents/SportEventDetailHeader";
import SportEventDetailInfo from "../components/sportEvents/SportEventDetailInfo";
import SportEventDetailTeamInfo from "../components/sportEvents/SportEventDetailTeamInfo";
import SportEventDetailResult from "../components/sportEvents/SportEventDetailResult";

export default function EventDetailPage() {
  const { id } = useParams();
  const { data: events, isLoading, isError, error } = useSportEvents();

  if (isLoading) return <LoadingMessage />;
  if (isError && error)
    return (
      <>
        <GoBack title="Calendar" />
        <ErrorMessage header="There was an error" message={error.message} />
      </>
    );

  const event = events?.find((e: SportEvent) => e.id === id);
  const validatedStatus = capitalizeFirstLetter(event?.status);

  if (!event) {
    return (
      <>
        <GoBack title="Calendar" />
        <AlertMessage
          header="Event not found."
          message="The requested event could not be found."
        />
      </>
    );
  }

  const isEventValid = validatedDetailSportEvent(event);
  if (!isEventValid) {
    return (
      <>
        <GoBack title="Calendar" />
        <AlertMessage
          header="Event data is missing important information."
          message="Please try again later."
        />
      </>
    );
  }

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
