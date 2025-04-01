import { createContext, useState, useContext } from "react";
import PropTypes from 'prop-types';

// 1. Crear el contexto
const ReservasContext = createContext();

// 2. Crear el provider
export const ReservasProvider = ({ children }) => {
    const [reservas, setReservas] = useState([]);

    const addReserva = (espacioId, dia, hora) => {
        setReservas(prev => [
            ...prev,
            {
                id: Date.now(),
                espacioId,
                dia,
                hora,
                fecha: new Date().toLocaleString()
            }
        ]);
    };

    return (
        <ReservasContext.Provider value={{ reservas, addReserva }}>
            {children}
        </ReservasContext.Provider>
    );
};

ReservasProvider.propTypes = {
    children: PropTypes.node.isRequired
};

// 3. Crear y exportar el hook personalizado
export const useReservasContext = () => {
    const context = useContext(ReservasContext);
    if (!context) {
        throw new Error('useReservasContext debe usarse dentro de un ReservasProvider');
    }
    return context;
};