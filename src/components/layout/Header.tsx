import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-blue-600 opacity-95 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-md sm:text-xl font-bold">
            Sport Events Calendar
          </h1>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
