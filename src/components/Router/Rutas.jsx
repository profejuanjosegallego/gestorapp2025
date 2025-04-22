import {Routes, Route} from "react-router-dom"
import {Home} from "../pages/Home/Home"
import {Dashboard} from "../pages/Dashboard/Dashboard"
import {Booking} from "../pages/Booking/Booking"
import { Galeria } from "../pages/Galeria/Galeria"

import { Prueba } from "../pages/Prueba/Prueba"
import { FormularioReserva } from "../common/FormularioReserva/FormularioReserva";

import { Menu } from "../common/Menu/Menu"
import { NotFound } from "../pages/NotFound/NotFound"

export function Rutas() {
  return (
    <>
      <Menu />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/pepe" element={<Prueba />} />
        <Route path="/formulario" element={<FormularioReserva />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta para la página no encontrada */}
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
    </>
  );
}