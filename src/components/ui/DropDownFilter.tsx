import { ChangeEvent } from "react";

interface DropDownFilterProps {
  label: string;
  filter: string;
  setFilter: (filter: string) => void;
  filterOptions: { value: string; label: string }[];
}

export default function DropDownFilter({
  label,
  filter,
  setFilter,
  filterOptions,
}: DropDownFilterProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div className="mb-4 flex flex-col w-full justify-center items-center">
      <label
        htmlFor={label}
        className="text-sm font-medium text-muted-900 mb-1"
      >
        {label}
      </label>
      <select
        id={label}
        value={filter}
        onChange={handleChange}
        className="mt-1 p-2 w-full sm:w-2/3 rounded-md shadow-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
