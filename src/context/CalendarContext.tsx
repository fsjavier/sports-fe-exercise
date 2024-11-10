import { createContext, ReactNode, useContext, useState } from "react";
import { EventSport, EventStatus, SportEvent } from "../types";
import {
  getCalendarDays,
  getNextMonth,
  getPreviousMonth,
  formatDate,
} from "../utils/dateHelper";
import { useSportEvents } from "../hooks/useSportEvents";

interface CalendarContextType {
  currentDate: Date;
  selectedDate: Date;
  calendarDays: Date[];
  sportEvents: SportEvent[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  handlePreviousMonth: () => void;
  handleNextMonth: () => void;
  handleSelectDate: (date: Date) => void;
  getEventsForDate: (date: Date) => SportEvent[];
  statusFilter: EventStatus;
  sportFilter: EventSport;
  setStatusFilter: (status: EventStatus) => void;
  setSportFilter: (sport: EventSport) => void;
}

const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined
);

interface CalendarProviderProps {
  children: ReactNode;
}

export function CalendarProvider({ children }: CalendarProviderProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [statusFilter, setStatusFilter] = useState(EventStatus.All);
  const [sportFilter, setSportFilter] = useState(EventSport.All);
  const { data: sportEvents, isLoading, isError, error } = useSportEvents();

  const calendarDays = getCalendarDays(currentDate);

  const handlePreviousMonth = () =>
    setCurrentDate(getPreviousMonth(currentDate));
  const handleNextMonth = () => setCurrentDate(getNextMonth(currentDate));
  const handleSelectDate = (date: Date) => setSelectedDate(date);

  const getEventsForDate = (date: Date) => {
    let filteredEvents = sportEvents;

    if (statusFilter !== EventStatus.All) {
      filteredEvents = filteredEvents.filter(
        (event: SportEvent) => event.status === statusFilter
      );
    }

    if (sportFilter !== EventSport.All) {
      filteredEvents = filteredEvents.filter(
        (event: SportEvent) => event.sport === sportFilter
      );
    }

    return filteredEvents?.filter(
      (event: SportEvent) => event.dateVenue === formatDate(date, "yyyy-MM-dd")
    );
  };

  return (
    <CalendarContext.Provider
      value={{
        currentDate,
        selectedDate,
        calendarDays,
        sportEvents,
        isLoading,
        isError,
        error,
        handlePreviousMonth,
        handleNextMonth,
        handleSelectDate,
        getEventsForDate,
        statusFilter,
        sportFilter,
        setStatusFilter,
        setSportFilter,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}

export function useCalendar() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }
  return context;
}
