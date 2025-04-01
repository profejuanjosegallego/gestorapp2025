import { useState } from "react";
import PropTypes from 'prop-types';
import { calendario } from "./datosCalendario";
import { useReservasContext } from "../../../Contexts/ReservasContext";

/**
 * Componente Calendario para mostrar horarios y manejar reservas.
 * @param {number} espacioId - ID del espacio físico a reservar.
 */
export const Calendario = ({ espacioId }) => {
    // Estados para días y horas (inicializados desde datosCalendario.js)
    const [dias] = useState(calendario[0]);
    const [horas] = useState(calendario[1]);
    
    // Contexto para manejar reservas
    const { addReserva } = useReservasContext();

    /**
     * Maneja el click en botón de reserva.
     * @param {string} dia - Día seleccionado (ej: "Lunes").
     * @param {string} hora - Hora seleccionada (ej: "10:00 - 11:00").
     */
    const handleReservar = (dia, hora) => {
        addReserva(espacioId, dia, hora);
        alert(`✅ Reserva agregada:\nEspacio: ${espacioId}\nDía: ${dia}\nHora: ${hora}`);
    };

    return (
        <table className="table table-bordered table-hover">
            <thead className="table-dark">
                <tr>
                    <th>Hora</th>
                    {dias.map((dia) => (
                        <th key={dia}>{dia}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {horas.map((hora) => (
                    <tr key={hora}>
                        <td className="fw-bold">{hora}</td>
                        {dias.map((dia) => (
                            <td key={`${dia}-${hora}`}>
                                <button
                                    onClick={() => handleReservar(dia, hora)}
                                    className="btn btn-sm btn-success w-100 py-2"
                                    aria-label={`Reservar ${dia} a las ${hora}`}
                                >
                                    Reservar
                                </button>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

// Validación de props con PropTypes
Calendario.propTypes = {
    espacioId: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired
};

// Valor por defecto (opcional)
Calendario.defaultProps = {
    espacioId: 0 // Solo si espacioId puede ser opcional
};