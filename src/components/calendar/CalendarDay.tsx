import { formatDate } from "../../utils/DateHelper";

type CalendarDayProps = {
  day: Date;
};

export default function CalendarDay({ day }: CalendarDayProps) {
  return <div>{formatDate(day, "d")}</div>;
}
