import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}
