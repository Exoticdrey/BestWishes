import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateCard from "./pages/CreateCard";
import GetStarted from "./pages/GetStarted";
import "./App.css";
import ScheduleCard from "./pages/ScheduleCard";
// import Login from "./pages/Signup";
import Signup from "./pages/Signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/create-card" element={<CreateCard />} />
        <Route path="/schedule-card" element={<ScheduleCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
