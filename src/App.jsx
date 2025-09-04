import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Marketplace from "./pages/Marketplace";
import Pricing from "./pages/Pricing";
import GetStarted from "./pages/GetStarted";
import CreateCard from "./pages/CreateCard";
import ScheduleCard from "./pages/ScheduleCard";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/create-card" element={<CreateCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
