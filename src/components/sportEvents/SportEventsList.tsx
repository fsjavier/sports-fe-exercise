import { formatDate } from "../../utils/dateHelper";
import SportEventSummary from "./SportEventSummary";
import { useCalendar } from "../../context/CalendarContext";

export default function SportEventsList() {
  const { getEventsForDate, selectedDate } = useCalendar();

  const sportEvents = getEventsForDate(selectedDate);

  return (
    <div className=" shadow-md rounded-lg p-4">
      <h3 className="text-xl font-bold mb-4">
        {formatDate(selectedDate, "MMMM d, yyyy")}
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
