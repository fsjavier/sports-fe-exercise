import { ChevronLeft, ChevronRight } from "lucide-react";
import { getMonthYear } from "../../utils/dateHelper";
import { useCalendar } from "../../context/CalendarContext";

export default function CalendarHeader() {
  const { handlePreviousMonth, handleNextMonth, currentDate } = useCalendar();

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePreviousMonth}
          className="p-2 hover:bg-gray-200 rounded"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold">{getMonthYear(currentDate)}</h2>
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-gray-200 rounded"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="text-center font-bold p-2">
            {day}
          </div>
        ))}
      </div>
    </>
  );
}
