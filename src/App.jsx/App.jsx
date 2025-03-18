import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Catalogo from "./components/pages/Catalogo/Catalogo";
import Booking from "./components/pages/Booking/Booking";
import Contacto from "./components/pages/Contacto/Contacto";
import { Prueba } from "./components/Prueba/prueba"; // ⬅️ Corrección aquí

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/prueba" element={<Prueba />} /> {/* ⬅️ Corrección aquí */}
      </Routes>
    </Router>
  );
};

export default App;
