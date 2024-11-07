import { CalendarProvider } from "../context/CalendarContext";
import Calendar from "../components/calendar/Calendar";

export default function HomePage() {
  return (
    <CalendarProvider>
      <Calendar />
    </CalendarProvider>
  );
}
