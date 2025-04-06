import {Routes, Route} from "react-router-dom"

import {Home} from "../pages/Home/Home"
import { Dashboard } from "../common/DashBoard/DashBoard"
import { Menu } from "../common/Menu/Menu"
import {Booking} from "../pages/Booking/Booking"
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage"
import { Reservas } from "../pages/Reservas/Reservas"
import { Prueba } from "../pages/Prueba/prueba"
import { FormularioReserva } from "../common/FormularioReserva/FormularioReserva"
export function Router(){
    return(
        <>
            <Menu></Menu>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/dash" element={<Dashboard/>}></Route>
                <Route path="/booking" element={<Booking/>}></Route>
                <Route path="/reserva" element={<Reservas/>}></Route>
                <Route path="/formulario" element={<FormularioReserva/>}></Route>
                <Route path = "/prueba" element={<Prueba/>}></Route>
                <Route path="*" element={<NotFoundPage/>}></Route>
                </Routes>
        </>
    )
}