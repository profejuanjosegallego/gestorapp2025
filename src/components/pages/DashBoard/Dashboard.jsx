import { useState } from 'react';
import { useParams } from "react-router-dom";
import { Calendario } from "../../common/Calendario/Calendario";
import { datosAPI } from "./DatosJSON";




export const DashBoard = () => {
    const { espacioId } = useParams();
    const [expandedEspacios, setExpandedEspacios] = useState({});

    const toggleEspacio = (id) => {
        setExpandedEspacios(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Vista individual de espacio
    if (espacioId) {
        const espacio = datosAPI.find(e => String(e.id) === String(espacioId));
        if (!espacio) return <div>Espacio no encontrado</div>;
        return (
            <div className="dashboard-container single-view">
                <Calendario espacioId={espacioId} />
            </div>
        );
    }

    // Vista general de todos los espacios
    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">Calendario General</h2>
            {datosAPI.map((espacio) => (
                <div key={espacio.id} className="espacio-acordeon">
                    <h3 
                        className="espacio-title"
                        onClick={() => toggleEspacio(espacio.id)}
                    >
                        {espacio.nombreEspacio}
                        <span className="toggle-icon">
                            {expandedEspacios[espacio.id] ? '▼' : '►'}
                        </span>
                    </h3>
                    <div className={`calendario-acordeon-content ${expandedEspacios[espacio.id] ? 'expanded' : ''}`}>
                        {expandedEspacios[espacio.id] && (
                            <Calendario espacioId={espacio.id} />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};