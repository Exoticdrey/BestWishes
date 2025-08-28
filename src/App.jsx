import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import CreateCard from "./pages/CreateCard";
import ScheduleCard from "./pages/ScheduleCard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/create-card" element={<CreateCard />} />
        <Route path="/schedule-card" element={<ScheduleCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
