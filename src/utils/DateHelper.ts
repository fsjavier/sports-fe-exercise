import { eachDayOfInterval, endOfMonth, startOfMonth, format } from "date-fns";

export function getMonthDays(date: Date) {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  return eachDayOfInterval({ start: monthStart, end: monthEnd });
}

export const formatDate = (date: Date, formatString: string) =>
  format(date, formatString);
