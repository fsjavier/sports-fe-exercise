import { ChangeEvent } from "react";

interface FormSelectFieldProps {
  name: string;
  id: string;
  label: string;
  options: Option[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

interface Option {
  label: string;
  value: string;
}

export default function FormSelectField({
  id,
  name,
  label,
  options,
  value,
  onChange,
  required = false,
}: FormSelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-muted-900">
        {label} {required && <span className="text-accent-900 ml-1">*</span>}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`mt-1 p-1 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-secondary-500`}
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map(
          (option) =>
            option.value !== "all" && (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )
        )}
      </select>
    </div>
  );
}
