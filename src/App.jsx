import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/common/Menu/Menu";
import { Home } from "./components/pages/Home/Home";
import { Dashboard } from "./components/pages/Dashboard/Dashboard";
import { ReservaForm } from "./components/pages/Reservas/ReservaForm";
import { Tabla } from "./components/pages/Tabla/Tabla";

export function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reservar" element={<ReservaForm />} />
        <Route path="/tabla" element={<Tabla />} />

      </Routes>
    </>
  );
}

