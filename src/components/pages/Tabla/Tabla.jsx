import "./Tabla.css";

export function Tabla() {
  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  const horas = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM",
    "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"
  ];

  return (
    <div className="tabla-container">
      <h2 className="titulo">Horario de Reservas</h2>
      <table className="tabla">
        <thead>
          <tr>
            <th></th> {/* Espacio para las horas */}
            {dias.map((dia, index) => (
              <th key={index}>{dia}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {horas.map((hora, rowIndex) => (
            <tr key={rowIndex}>
              <td className="hora">{hora}</td>
              {dias.map((dia, colIndex) => {
                const isDisabled =
                  (hora === "9:00 AM" || hora === "7:00 PM") &&
                  (dia === "Sábado" || dia === "Domingo");

                return (
                  <td key={colIndex}>
                    <button className={`reservar-btn ${isDisabled ? "disabled" : ""}`} disabled={isDisabled}>
                      {isDisabled ? "" : "RESERVAR"}
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
}
