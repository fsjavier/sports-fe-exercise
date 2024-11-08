import { ReactNode } from "react";

interface EventDetailIconElementProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export default function EventDetailIconElement({
  icon,
  label,
  value,
}: EventDetailIconElementProps) {
  return (
    <div className="flex items-center">
      {icon}
      <span>
        <span className="font-semibold">{label}:</span> {value}
      </span>
    </div>
  );
}
