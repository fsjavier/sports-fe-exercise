import { getMonthDays, formatDate } from "../../utils/DateHelper";
import CalendarDay from "./CalendarDay";

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
