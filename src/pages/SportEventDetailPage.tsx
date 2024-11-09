import { useParams } from "react-router-dom";
import { SportEvent } from "../types";
import { validatedDetailSportEvent } from "../utils/sportDataCheckHelper";
import { useSportEvents } from "../hooks/useSportEvents";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingMessage from "../components/ui/LoadingMessage";
import SportEventNotFound from "../components/sportEvents/SportEventNotFound";
import SportEventMissingData from "../components/sportEvents/SportEventMissingData";
import SportEventDetailView from "../components/sportEvents/SportEventDetailView";

export default function EventDetailPage() {
  const { id } = useParams();
  const { data: events, isLoading, isError, error } = useSportEvents();
  const event: SportEvent | undefined = events?.find(
    (e: SportEvent) => e.id === id
  );

  if (isLoading) return <LoadingMessage />;
  if (isError && error)
    return <ErrorMessage header="There was an error" message={error.message} />;
  if (!event) return <SportEventNotFound />;

  const isEventValid = validatedDetailSportEvent(event);
  if (!isEventValid) return <SportEventMissingData />;

  return <SportEventDetailView event={event} />;
}
