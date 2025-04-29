import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "../common/Menu/Menu";
import Dashboard from "../common/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Calendario from "../pages/Calendario/Calendario";
import Booking from "../pages/Booking/Booking";

function App() {
  return (
    <Router>
      <Menu />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
