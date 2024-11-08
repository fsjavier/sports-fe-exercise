import SportEventsList from "../sportEvents/SportEventsList";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import { useCalendar } from "../../context/CalendarContext";
import LoadingMessage from "../ui/LoadingMessage";
import ErrorMessage from "../ui/ErrorMessage";

export default function Calendar() {
  const { isLoading, isError, error } = useCalendar();

  if (isLoading) return <LoadingMessage />;
  if (isError && error)
    return <ErrorMessage header="Error" message={error.message} />;

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
