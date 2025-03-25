import { useEffect, useState } from "react";
import { datosCalendario } from "./datosCalendario";
import "./Calendario.css";

export function Calendario() {
  const [dias, setDias] = useState([]);
  const [horas, setHoras] = useState([]);
  const [disponibilidad, setDisponibilidad] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (Array.isArray(datosCalendario) && datosCalendario.length > 1) {
      setDias(datosCalendario[0]);
      setHoras(datosCalendario[1]);

      // Inicializa disponibilidad solo si los datos están bien formateados
      const inicial = {};
      datosCalendario[1]?.forEach((hora, indexHora) => {
        datosCalendario[0]?.forEach((dia, indexDia) => {
          inicial[`${indexHora}-${indexDia}`] = true; // Disponible por defecto
        });
      });
      setDisponibilidad(inicial);
    } else {
      console.error("Error: datosCalendario no tiene el formato esperado.");
    }

    setCargando(false); // Datos cargados
  }, []);

  const handleClick = (indexHora, indexDia) => {
    if (cargando || !horas.length || !dias.length) return; // Evita clics si no hay datos

    const key = `${indexHora}-${indexDia}`;
    setDisponibilidad((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="calendario-container">
      <h2>Calendario de Disponibilidad</h2>

      {cargando ? (
        <p>Cargando datos...</p>
      ) : (
        <div className="table-responsive">
          <table className={`calendario-tabla ${cargando ? "tabla-disabled" : ""}`}>
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
      )}
    </div>
  );
}
