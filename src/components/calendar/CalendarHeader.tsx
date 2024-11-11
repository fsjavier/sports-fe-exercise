import { ChevronLeft, ChevronRight } from "lucide-react";
import { EventSport, EventStatus } from "../../types";
import { getMonthYear } from "../../utils/dateHelper";
import {
  EVENT_SPORT_OPTIONS,
  EVENT_STATUS_OPTIONS,
} from "../../utils/constants";
import { useCalendar } from "../../context/CalendarContext";

import DropDownFilter from "../ui/DropDownFilter";

export default function CalendarHeader() {
  const {
    handlePreviousMonth,
    handleNextMonth,
    currentDate,
    sportFilter,
    setSportFilter,
    statusFilter,
    setStatusFilter,
  } = useCalendar();

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePreviousMonth}
          className="p-2 hover:bg-primary-50 rounded"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold">{getMonthYear(currentDate)}</h2>
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-primary-50 rounded"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
        <DropDownFilter
          label="Status"
          filter={statusFilter}
          setFilter={(filter) => setStatusFilter(filter as EventStatus)}
          filterOptions={EVENT_STATUS_OPTIONS}
        />
        <DropDownFilter
          label="Sport"
          filter={sportFilter}
          setFilter={(filter) => setSportFilter(filter as EventSport)}
          filterOptions={EVENT_SPORT_OPTIONS}
        />
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
