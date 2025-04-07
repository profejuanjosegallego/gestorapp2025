import {Routes, Route} from "react-router-dom"
import {Home} from "../pages/Home/Home"
import {Dashboard} from "../pages/Dashboard/Dashboard"
import {Booking} from "../pages/Booking/Booking"

import { Prueba } from "../pages/Prueba/Prueba"
// import { FormularioReserva } from "../common/FormularioReserva/FormularioReserva"

import { Menu } from "../common/Menu/Menu"

export function Rutas() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/prueba" element={<Prueba />} />
      </Routes>
    </>
  );
}