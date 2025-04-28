import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/home.jsx";
import { DashBoard } from "../pages/dashboard/dashboard.jsx";
import { Menu } from "../common/Menu/menu.jsx";
import { Booking } from "../pages/Booking/booking.jsx";
import { NotFound } from "../common/NotFound/notfound.jsx";
import { ReservasProvider } from "../../Contexts/reservascontext.jsx";
import { FormularioReserva } from "../common/FormularioReserva/formularioreserva.jsx";

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