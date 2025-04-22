import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { DashBoard } from "../pages/DashBoard/DashBoard";

import { Menu } from "../common/Menu/Menu";
import { Footer } from "../common/Footer/Footer";
import { Booking } from "../pages/Booking/Booking";
import { FormularioReserva } from "../common/FormularioReserva/FormularioReserva";
import { NotFound } from "../pages/NotFound/NotFound";

export function Router(){

    return(
        <>
        <Menu></Menu>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/dashboard" element={<DashBoard/>}></Route>
            <Route path="/booking" element={<Booking/>}></Route>
            <Route path="/formulario" element={<FormularioReserva/>}></Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
        </>
    )
}