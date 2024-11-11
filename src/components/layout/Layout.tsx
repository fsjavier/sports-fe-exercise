import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-0.5 sm:px-4 py-8 mt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
