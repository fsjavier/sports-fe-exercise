import SportEventsList from "../sportEvents/SportEventsList";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import { useCalendar } from "../../context/CalendarContext";

export default function Calendar() {
  const { isLoading, isError, error } = useCalendar();

  if (isLoading) return <div>Loading...</div>;
  if (isError && error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          <div className="shadow-md rounded-lg p-4">
            <CalendarHeader />
            <CalendarGrid />
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <SportEventsList />
        </div>
      </div>
    </div>
  );
}
