import { eachDayOfInterval, endOfMonth, startOfMonth, format } from "date-fns";
import CalendarDay from "./CalendarDay";

function getMonthDays(date: Date) {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  return eachDayOfInterval({ start: monthStart, end: monthEnd });
}

export const formatDate = (date: Date, formatString: string) =>
  format(date, formatString);

export default function Calendar() {
  const currentDate = new Date();
  const monthDays = getMonthDays(currentDate);

  return (
    <div>
      <h2>{formatDate(currentDate, "MMMM yyyy")}</h2>
      <div className="grid grid-cols-7 gap-2">
        {monthDays.map((day) => (
          <CalendarDay key={day.toISOString()} day={day} />
        ))}
      </div>
    </div>
  );
}
