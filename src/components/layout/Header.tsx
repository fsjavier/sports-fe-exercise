import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl sm:text-2xl font-bold">
            Sport Events Calendar
          </h1>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
