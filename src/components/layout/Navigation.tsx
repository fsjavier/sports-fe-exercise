import { Home, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const navigationItems = [
  { label: "Home", to: "/", icon: Home },
  { label: "Add Event", to: "/add-event", icon: PlusCircle },
];

export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-4">
        {navigationItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.to}
              className="flex items-center hover:text-blue-200 transition-colors"
            >
              <item.icon className="w-5 h-5 mr-1" />
              <span className="hidden sm:block">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
