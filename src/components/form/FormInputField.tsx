import { ChangeEvent } from "react";

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export default function FormInputField({
  id,
  name,
  label,
  type,
  value,
  placeholder,
  onChange,
  required = false,
  minLength,
  maxLength,
  min,
  max,
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-muted-900">
        {label} {required && <span className="text-accent-900 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`mt-1 p-1 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-secondary-500`}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
      />
    </div>
  );
}
