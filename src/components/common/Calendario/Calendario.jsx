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

  console.log("Días:", dias);
  console.log("Horas:", horas);
  console.log("Disponibilidad:", disponibilidad);
  console.log("Cargando:", cargando);

  return (
    <div className="calendario-container">
      <h2>Calendario de Disponibilidad</h2>
      <p>Haz clic en los botones para reservar horarios.</p>

      {cargando ? (
        <p>Cargando datos... Por favor, espera.</p>
      ) : (
        <div className="table-responsive">
          <table className={`calendario-tabla ${cargando ? "tabla-disabled" : ""}`}>
            <thead>
              <tr>
                <th>Hora</th>
                {dias.map((dia, index) => (
                  <th key={`dia-${index}`}>
                    <button onClick={() => handleClick(index)}>{dia}</button>
                  </th>
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
                      <td key={indexDia}>
                        <button onClick={() => handleClick(indexHora, indexDia)} className={estaDisponible ? "btn-disponible" : "btn-reservado"}>
                          {estaDisponible ? "Reservar" : "Reservado"}
                        </button>
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
