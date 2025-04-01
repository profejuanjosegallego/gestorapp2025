import { datosAPI } from "../DashBoard/DatosJSON";
import { useNavigate } from "react-router-dom";
import './BookingCards.css';

export const Booking = () => {
    const navigate = useNavigate();

    return (
        <div className="booking-container">
            <div className="booking-grid">
                {datosAPI.map((espacio) => (
                    <div className="booking-card" key={espacio.id}>
                        <div className="booking-card-img-container">
                            <img 
                                src={espacio.foto || "https://via.placeholder.com/300x200?text=Sin+Imagen"} 
                                className="booking-card-img" 
                                alt={espacio.nombreEspacio}
                            />
                        </div>
                        <div className="booking-card-body">
                            <h3 className="booking-card-title">{espacio.nombreEspacio}</h3>
                            <p className="booking-card-text">{espacio.descripcion}</p>
                            <div className="booking-card-footer">
                                <button 
                                    onClick={() => navigate(`/dashboard/${espacio.id}`)}
                                    className="booking-card-btn"
                                >
                                    Ver Horarios
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};