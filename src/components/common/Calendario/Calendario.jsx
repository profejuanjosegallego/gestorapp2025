import { useEffect, useState } from "react";
import { datosCalendario } from "./datosCalendario";
import "./Calendario.css";

export function Calendario() {
  const [dias, setDias] = useState([]);
  const [horas, setHoras] = useState([]);
  const [disponibilidad, setDisponibilidad] = useState({});

  useEffect(() => {
    setDias(datosCalendario[0]);
    setHoras(datosCalendario[1]);

    // Inicializa el estado de disponibilidad
    const inicial = {};
    datosCalendario[1].forEach((hora, indexHora) => {
      datosCalendario[0].forEach((dia, indexDia) => {
        inicial[`${indexHora}-${indexDia}`] = true; // true = disponible
      });
    });
    setDisponibilidad(inicial);
  }, []);

  const handleClick = (indexHora, indexDia) => {
    const key = `${indexHora}-${indexDia}`;
    setDisponibilidad((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="calendario-container">
      <h2>Calendario de Disponibilidad</h2>
      <div className="table-responsive">
        <table className="calendario-tabla">
          <thead>
            <tr>
              <th>Hora</th>
              {dias.map((dia, index) => (
                <th key={index}>{dia}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {horas.map((hora, indexHora) => (
              <tr key={indexHora}>
                <td>{hora}</td>
                {dias.map((_, indexDia) => {
                  const key = `${indexHora}-${indexDia}`;
                  const estaDisponible = disponibilidad[key];
                  return (
                    <td
                      key={indexDia}
                      className={`celda-disponible ${
                        estaDisponible ? "" : "celda-reservada"
                      }`}
                      onClick={() => handleClick(indexHora, indexDia)}
                    >
                      {estaDisponible ? "Disponible" : "Reservado"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
