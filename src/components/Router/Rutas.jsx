import {Routes, Route} from "react-router-dom"
import {Home} from "../pages/Home/Home"
import {DashBoard} from "../pages/DashBoard/Dashboard"
import {Booking} from "../pages/Booking/Booking"

import { Prueba } from "../pages/Prueba/Prueba"
import { FormularioReserva } from "../common/FormularioReserva/FormularioReserva"

import { Menu } from "../common/Menu/Menu"



export function Rutas(){

    return(

        <>

            <Menu></Menu>

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/booking" element={<Booking/>}></Route>
                <Route path="/dashboard" element={<DashBoard/>}></Route>
                <Route path="/pepe" element={<Prueba/>}></Route>
                <Route path="/formulario" element={<FormularioReserva/>}></Route>
            </Routes>

        </>
    )

}