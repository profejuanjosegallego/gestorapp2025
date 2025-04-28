import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { DashBoard } from "../pages/DashBoard/dashboard.jsx";
import { Menu } from "../common/Menu/Menu";
import { Booking } from "../pages/Booking/Booking";
import { NotFound } from "../common/NotFound/NotFound.jsx";
import { ReservasProvider } from "../../Contexts/ReservasContext.jsx";
import { FormularioReserva } from "../common/FormularioReserva/FormularioReserva";

export function Router() {
    return (
        <ReservasProvider>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dash" element={<DashBoard />} />
                <Route path="/dash/:espacioId" element={<DashBoard />} />
                <Route path="/booking" element={<Booking />} />
                {/* Rutas actualizadas para formulario */}
                <Route path="/formulario" element={<FormularioReserva />} />
                <Route path="/formulario/:espacioId" element={<FormularioReserva />} />
                {/* Ruta alternativa en inglés */}
                <Route path="/new-reservation" element={<FormularioReserva />} />
                <Route path="/new-reservation/:espacioId" element={<FormularioReserva />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/dash/:espacioId" element={<DashBoard />} />

            </Routes>
        </ReservasProvider>
    );
}