import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { DashBoard } from "../pages/DashBoard/DashBoard";
import { Menu } from "../common/Menu/Menu";
import { Booking } from "../pages/Booking/Booking";
import { NotFound } from "../common/NotFound/NotFound.jsx"; // Nuevo componente 404
import { ReservasProvider } from "../../Contexts/ReservasContext.jsx"; // Proveedor de reservas
import { FormularioReserva } from "../common/FormularioReserva/FormularioReserva"

export function Router() {
    return (
        <ReservasProvider> {/* Envuelve todo para manejar reservas globalmente */}
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dash" element={<DashBoard />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="*" element={<NotFound />} /> {/* Ruta 404 */}
                <Route path="/formulario" element={<FormularioReserva/>}/>
            </Routes>
        </ReservasProvider>
    );
}