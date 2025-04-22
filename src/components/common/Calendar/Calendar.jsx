import { useState, useEffect } from "react";
import "./Calendar.css";
import { calendar } from "./dataCalendar";
import { useNavigate } from "react-router-dom";

export const Calendar = ({ nombreEspacio }) => {
    const [dias, setDias] = useState([]);
    const [horas, setHoras] = useState([]);

    const navegador = useNavigate();

    useEffect(() => {
        setDias(calendar[0]);
        setHoras(calendar[1]);
        limpiarReservasPasadas()
    }, []);

    function crearReserva(dia, hora) {
        navegador("/formulario", { state: { dia, hora, espacio: nombreEspacio } });
    }

    const diasSemana = {
        domingo: 0,
        lunes: 1,
        martes: 2,
        miercoles: 3,
        jueves: 4,
        viernes: 5,
        sabado: 6
    }

    function parseHora(horaStr) {
        const [h, m] = horaStr.split(":");
        return { horas: parseInt(h), minutis: parseInt(m) }
    }

    function limpiarReservasPasadas() {
        const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
        const ahora = new Date();

        const reservasValidas = reservas.filter((reserva) => {
            const diaReserva = diasSemana[reserva.dia?.toLowerCase()];
            if (diaReserva === undefined) return true;
            const hoy = ahora.getDay();
            const { horas, minutos } = parseHora(reserva.hora);
            if (diaReserva < hoy) return false;
            if (diaReserva > hoy) return true;
            // Si es hoy, comparar hora actual
            if (
                horas < ahora.getHours() ||
                (horas === ahora.getHours() && minutos <= ahora.getMinutes())
            ) {
                return false;
            }
            return true;
        });
        localStorage.setItem("reservas", JSON.stringify(reservasValidas));
    }
    

    function estaOcupado(dia, hora) {
        const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

        return reservas.some(
            (reserva) =>
                reserva.espacio?.toLowerCase() === nombreEspacio.toLowerCase() &&
                reserva.dia?.toLowerCase() == dia.toLowerCase() &&
                reserva.hora === hora

        );
        }

    const espacioId = nombreEspacio.toLowerCase().replace(/\s+/g, "-")


    return (
        <>
            <div id={espacioId} className="mb-5 border p-3 rounded shadow-sm bg-light">
                <h3 className="text-center text-success mb-3">{nombreEspacio}</h3>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover text-center">
                        <thead className="table-dark">
                            <tr>
                                <th>Time</th>
                                {dias.map((dia) => (
                                    <th key={dia}>{dia}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {horas.map((hora) => (
                                <tr key={hora}>
                                    <td><strong>{hora}</strong></td>
                                    {dias.map((dia) => {
                                        return (
                                            <td key={`${dia}-${hora}`}>
                                                <button
                                                    className={`btn ${estaOcupado(dia, hora) ? "btn-danger" : "btn-success"}`}
                                                    onClick={() => crearReserva(dia, hora)}
                                                    disabled={estaOcupado(dia,hora)}
                                                >
                                                    {estaOcupado(dia, hora) ? "Ocupado" : "Reservar"}
                                                </button>
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
