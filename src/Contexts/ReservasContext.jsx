import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from 'prop-types';

const ReservasContext = createContext();

export const ReservasProvider = ({ children }) => {
    const [reservas, setReservas] = useState(() => {
        try {
            const stored = localStorage.getItem("reservas");
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error("Error loading reservations:", error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("reservas", JSON.stringify(reservas));
    }, [reservas]);

    const addReserva = (espacioId, dia, hora, datosUsuario = {}) => {
        const nuevaReserva = {
            id: Date.now(),
            espacioId: String(espacioId),
            dia,
            hora,
            ...datosUsuario,
            fecha: new Date().toISOString()
        };
        
        setReservas(prev => [...prev, nuevaReserva]);
        return nuevaReserva;
    };

    const estaReservado = (espacioId, dia, hora) => {
        return reservas.some(r => 
            String(r.espacioId) === String(espacioId) && 
            r.dia === dia && 
            r.hora === hora
        );
    };

    return (
        <ReservasContext.Provider value={{ 
            reservas, 
            addReserva, 
            estaReservado,
            totalReservas: reservas.length
        }}>
            {children}
        </ReservasContext.Provider>
    );
};

export const useReservasContext = () => {
    const context = useContext(ReservasContext);
    if (!context) {
        throw new Error('useReservasContext must be used within a ReservasProvider');
    }
    return context;
};

ReservasProvider.propTypes = {
    children: PropTypes.node.isRequired
};