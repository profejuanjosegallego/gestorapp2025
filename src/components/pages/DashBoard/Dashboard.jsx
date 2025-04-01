import { Calendario } from "../../common/Calendario/Calendario";
import { datosAPI } from "./DatosJSON";

export const DashBoard = () => (
    <div className="container py-4">
        <h2 className="mb-4">Calendarios de Reservas</h2>
        {datosAPI.map((espacio) => (
            <div key={espacio.id} className="mb-5 border p-3 rounded">
                <h3 className="text-center">{espacio.nombreEspacio}</h3>
                <Calendario espacioId={espacio.id} />
            </div>
        ))}
    </div>
);