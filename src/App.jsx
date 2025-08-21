import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateCard from "./pages/CreateCard";
import GetStarted from "./pages/GetStarted";
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
