import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from "./components/Menu";

import Dashboard from "./components/Dashboard"; // o la ruta correspondiente
import Home from "./components/Home"; // ejemplo
import Booking from "./components/Booking"; // ejemplo
import Calendario from "./components/common/Calendario/Calendario"; // Import the Calendario component

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendario" element={<Calendario />} /> {/* Add route for Calendario */}
        {/* Rutas de categorías */}
        <Route path="/categorias/motores" element={<div>Motores</div>} />
        <Route path="/categorias/suspension" element={<div>Suspensión</div>} />
        <Route path="/categorias/frenos" element={<div>Frenos</div>} />
        <Route path="/categorias/accesorios" element={<div>Accesorios</div>} />
      </Routes>
    </Router>
  );
}

export default App;
