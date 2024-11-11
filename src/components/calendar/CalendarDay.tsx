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
        aspect-square p-2 border-b relative
        ${!isCurrentMonth && "text-muted-100"}
        ${isSelected && "bg-primary-100 rounded-md"}
        ${isToday && "font-bold"}
        hover:bg-primary-50 cursor-pointer transition-colors duration-200`}
    >
      <div className="p-1 text-sm text-center">{dateCalendar}</div>
      {eventCount > 0 && (
        <div className="absolute bottom-2 left-1 right-1">
          <div className="bg-primary-500 h-1 w-full rounded-full sm:h-auto text-white text-xs text-center">
            <span className="hidden sm:inline w-full">
              {eventCount} event{eventCount > 1 ? "s" : ""}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
