import { formatDate } from "./Calendar";

type CalendarDayProps = {
  day: Date;
};

export default function CalendarDay({ day }: CalendarDayProps) {
  return <div>{formatDate(day, "d")}</div>;
}
