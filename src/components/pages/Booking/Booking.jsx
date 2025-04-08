import { useNavigate } from "react-router-dom";
import { datosAPI } from "../DashBoard/DatosJSON";
import './BookingCards.css';

export const Booking = () => {
    const navigate = useNavigate();

    const handleReservar = (espacioId) => {
        // Redirige directamente al calendario del espacio
        navigate(`/dash/${espacioId}`);
    };

    return (
        <div className="booking-container">
            <h1 className="booking-title">Seleccione un espacio para reservar</h1>
            <div className="booking-grid">
                {datosAPI.map((espacio) => (
                    <div 
                        key={espacio.id} 
                        className="booking-card"
                    >
                        <div className="card-image-container">
                            <img 
                                src={espacio.foto} 
                                alt={espacio.nombreEspacio}
                                className="card-image"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://via.placeholder.com/300x200?text=Sin+Imagen';
                                }}
                            />
                            <div className="card-badge">Capacidad: {espacio.capacidad}</div>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">{espacio.nombreEspacio}</h3>
                            <p className="card-description">{espacio.descripcion}</p>
                            <button 
                                className="card-button"
                                onClick={() => handleReservar(espacio.id)}
                            >
                                Reservar ahora
                                <span className="button-icon">→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};