import { SportEvent } from "../../types";
import { formatDate } from "../../utils/DateHelper";
import SportEventSummary from "./SportEventSummary";

interface SportEventsListProps {
  date: Date;
  sportEvents: SportEvent[];
}

export default function SportEventsList({
  date,
  sportEvents,
}: SportEventsListProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-bold mb-4">
        {formatDate(date, "MMMM d, yyyy")}
      </h3>
      {!sportEvents.length && <p>No events scheduled.</p>}
      {sportEvents.length > 0 && (
        <ul className="py-2">
          {sportEvents.map((event) => (
            <SportEventSummary sportEvent={event} key={event.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
