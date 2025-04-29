import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Booking from "./components/pages/Booking/Booking";
import Menu from "./components/common/Menu/Menu";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Calendario from "./components/pages/Calendario/Calendario";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Menu /> {/* Menú siempre visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
    </Router>
  </React.StrictMode>
);




