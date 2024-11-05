import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./pages/Calendar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}
