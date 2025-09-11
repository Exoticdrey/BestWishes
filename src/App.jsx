import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Marketplace from "./pages/Marketplace";
import Pricing from "./pages/Pricing";
import GetStarted from "./pages/GetStarted";
import CreateCard from "./pages/CreateCard";
import SpinWin from "./pages/SpinWin";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import ScheduleCard from "./pages/ScheduleCard";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/spinwin" element={<SpinWin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create-card" element={<CreateCard />} />
        <Route path="/schedule-card" element={<ScheduleCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
