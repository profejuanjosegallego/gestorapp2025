import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useReservasContext } from "../../../Contexts/ReservasContext.jsx";
import { DIAS, HORAS } from "./datosCalendario";
import { datosAPI } from "../../pages/dashboard/DatosJSON"; // Importa los datos
import './Calendario.css';

export const Calendario = ({ espacioId }) => {
    const navigate = useNavigate();
    const { estaReservado } = useReservasContext();
    
    // Obtiene el nombre del espacio
    const espacio = datosAPI.find(e => String(e.id) === String(espacioId));
    const nombreEspacio = espacio?.nombreEspacio || 'Espacio no encontrado';

    const handleReservar = (dia, hora) => {
        if (estaReservado(espacioId, dia, hora)) return;
        
        navigate(`/formulario/${espacioId}`, {
            state: {
                diaSeleccionado: dia,
                horaSeleccionada: hora
            }
        });
    };

    return (
        <div className="calendario-container">
            {/* Añade el título del espacio */}
            <h2 className="titulo-espacio">{nombreEspacio}</h2>
            
            <table className="calendario-table">
                <thead className="calendario-header">
                    <tr>
                        <th>Hora</th>
                        {DIAS.map((dia) => (
                            <th key={dia}>{dia}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {HORAS.map((hora) => (
                        <tr key={hora}>
                            <td className="hora-cell">{hora}</td>
                            {DIAS.map((dia) => {
                                const reservado = estaReservado(espacioId, dia, hora);
                                return (
                                    <td key={`${dia}-${hora}`} className="dia-cell">
                                        <button
                                            disabled={reservado}
                                            className={`btn-reserva ${
                                                reservado ? 'btn-reservado' : 'btn-disponible'
                                            }`}
                                            onClick={() => handleReservar(dia, hora)}
                                        >
                                            {reservado ? "Reservado" : "Reservar"}
                                        </button>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

Calendario.propTypes = {
    espacioId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};