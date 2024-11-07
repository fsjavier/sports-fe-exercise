import { formatDate, isCurrentMonth } from "../../utils/dateHelper";
import CalendarDay from "./CalendarDay";
import { useCalendar } from "../../context/CalendarContext";

export default function CalendarGrid() {
  const {
    calendarDays,
    selectedDate,
    currentDate,
    handleSelectDate,
    getEventsForDate,
  } = useCalendar();

  return (
    <div className="grid grid-cols-7 gap-2">
      {calendarDays.map((day) => {
        const dayEvents = getEventsForDate(day);
        const eventCount = dayEvents.length;
        const isSelected =
          formatDate(day, "yyyy-MM-dd") ===
          formatDate(selectedDate, "yyyy-MM-dd");

        return (
          <CalendarDay
            key={day.toString()}
            day={day}
            eventCount={eventCount}
            isCurrentMonth={isCurrentMonth(day, currentDate)}
            onClick={() => handleSelectDate(day)}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
}
