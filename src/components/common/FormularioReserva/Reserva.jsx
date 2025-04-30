import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ReservaContext = createContext();

export function ReservaProvider({ children }) {
  const [reservas, setReservas] = useState([]);

  const agregarReserva = (nueva) => {
    setReservas((prev) => [...prev, nueva]);
  };

  return (
    <ReservaContext.Provider value={{ reservas, agregarReserva }}>
      {children}
    </ReservaContext.Provider>
  );
}

ReservaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook para acceder al contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useReservas = () => useContext(ReservaContext);
