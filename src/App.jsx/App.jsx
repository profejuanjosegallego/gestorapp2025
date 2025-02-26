import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/common/Menu/Menu";
import Home from "./components/pages/Home/Home";
import Catalogo from "./components/pages/Catalogo/Catalogo";
import Booking from "./components/pages/Booking/Booking";
import Contacto from "./components/pages/Contacto/Contacto";

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
};

export default App;
