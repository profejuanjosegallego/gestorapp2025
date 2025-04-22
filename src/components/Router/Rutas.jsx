import {Routes, Route} from "react-router-dom"
import {Home} from "../pages/Home/Home"
import {Dashboard} from "../pages/Dashboard/Dashboard"
import {Booking} from "../pages/Booking/Booking"
import { Prueba } from "../pages/Prueba/Prueba"
import { Menu } from "../common/Menu/Menu"
import { FormularioReserva } from "../common/FormularioReserva/FormularioReserva"
import { Calendario } from "../common/Calendario/Calendario"
import { Error } from "../pages/Error/Error"
import { Galeria } from "../pages/Galeria/Galeria"



export function Rutas(){

    return(

        <>
-
            <Menu></Menu>

            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/booking" element={<Booking/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/prueba" element={<Prueba/>}></Route>
                <Route path="/calerndario" element={<Calendario/>}></Route>
                <Route path="/formulario" element={<FormularioReserva/>}></Route>
                <Route path="/error" element={<Error />}></Route>
                <Route path="/galeria" element={<Galeria />}></Route>
            </Routes>
            

        </>
    )

}