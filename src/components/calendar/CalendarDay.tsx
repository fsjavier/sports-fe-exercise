import { formatDate, isTodayDate } from "../../utils/dateHelper";

type CalendarDayProps = {
  day: Date;
  onClick: () => void;
  isSelected: boolean;
  isCurrentMonth: boolean;
  eventCount: number;
};

export default function CalendarDay({
  day,
  onClick,
  isSelected,
  isCurrentMonth,
  eventCount,
}: CalendarDayProps) {
  const isToday = isTodayDate(day);
  const dateCalendar = formatDate(day, "d");

  return (
    <div
      onClick={onClick}
      className={`
        p-2 border
        ${!isCurrentMonth && "text-gray-400"}
        ${isSelected && "bg-blue-200"}
        ${isToday && "font-bold"}
        hover:bg-gray-100 cursor-pointer transition-colors duration-200`}
    >
      <div className="text-right">{dateCalendar}</div>
      {eventCount > 0 && (
        <div className="mt-1 text-xs text-blue-600 font-semibold">
          {eventCount} event{eventCount > 1 ? "s" : ""}
        </div>
      )}
    </div>
  );
}
