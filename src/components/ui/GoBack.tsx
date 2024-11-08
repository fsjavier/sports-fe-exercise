import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface GoBackProps {
  title: string;
}

export default function GoBack({ title }: GoBackProps) {
  return (
    <Link
      to="/"
      className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-4"
    >
      <ArrowLeft className="mr-2" size={20} />
      Back to {title}
    </Link>
  );
}
