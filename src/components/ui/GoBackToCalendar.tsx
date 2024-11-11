import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function GoBackToCalendar() {
  return (
    <Link
      to="/"
      className="inline-flex items-center text-primary-500 hover:text-primary-900 mb-4"
    >
      <ArrowLeft className="mr-2" size={20} />
      Back to Calendar
    </Link>
  );
}
