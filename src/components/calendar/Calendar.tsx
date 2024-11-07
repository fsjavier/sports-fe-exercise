import { useState } from "react";
import { SportEvent } from "../../types";
import {
  getCalendarDays,
  getNextMonth,
  getPreviousMonth,
  formatDate,
} from "../../utils/DateHelper";
import useSportEvents from "../../hooks/useSportEvents";
import SportEventsList from "../sportEvents/SportEventsList";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { data: sportEvents, isLoading, isError, error } = useSportEvents();
  const calendarDays = getCalendarDays(currentDate);

  const handlePreviousMonth = () => {
    setCurrentDate(getPreviousMonth(currentDate));
  };

  const handleNextMonth = () => {
    setCurrentDate(getNextMonth(currentDate));
  };

  const handleSelectDate = (date: Date) => setSelectedDate(date);

  const getEventsForDate = (date: Date) => {
    return sportEvents?.filter(
      (event: SportEvent) => event.dateVenue === formatDate(date, "yyyy-MM-dd")
    );
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          <div className="shadow-md rounded-lg p-4">
            <CalendarHeader
              handlePreviousMonth={handlePreviousMonth}
              handleNextMonth={handleNextMonth}
              currentDate={currentDate}
            />
            <CalendarGrid
              calendarDays={calendarDays}
              selectedDate={selectedDate}
              currentDate={currentDate}
              handleSelectDate={handleSelectDate}
              getEventsForDate={getEventsForDate}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <SportEventsList
            date={selectedDate}
            sportEvents={getEventsForDate(selectedDate)}
          />
        </div>
      </div>
    </div>
  );
}
