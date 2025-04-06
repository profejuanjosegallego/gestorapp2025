import { useEffect, useState } from "react";
import { calendario } from "./datosCalendario"; // Make sure this import is correct
import { useLocation, useNavigate } from "react-router-dom";
import "./calendario.css";
import { datosAPI } from "../DashBoard/DatosJSON";

export function Calendario() {
  const datosGuardados = localStorage.getItem("datos");
  const dato = datosGuardados ? JSON.parse(datosGuardados) : datosAPI;
  const location = useLocation();
  // const datosGuardados = JSON.parse(localStorage.getItem("datos")) || datosAPI;
  const { datos } = location.state || datosAPI;
  const {nombreEspacio} = location.state || []
  const [dias, setDias] = useState([]);
  const [horas, setHoras] = useState([]);
  const [espacios, setEspacios] = useState([]);
  const [nombreEspacios, setNombreEspacios] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    console.log("Datos del calendario:", calendario);
    setDias([...calendario[0]]);
    setHoras([...calendario[1]]);
    if(nombreEspacio && nombreEspacio.length >0){
    setNombreEspacios(nombreEspacio)
    
  
  }
    if (datos && datos.length > 0) {
      setEspacios(datos);
    }else{
      setEspacios(datosAPI);
    }
  }, []);


  function capturarReserva(diaReserva, horaReserva, nombreEspacio) {
    navigation("/formulario", {
      state: { diaReserva, horaReserva, nombreEspacio },
    });
  }

  // function estaReservado(dia, hora,) {

  //   return datosAPI.some((espacio) =>
  //     espacio.calendario.some(
  //       (reserva) =>
  //         reserva.dia.toLowerCase() === dia.toLowerCase() &&
  //         reserva.hora === hora

  //     )
  //   );
  // }

  function estaReservado(dia, hora, nombreEspacio) {
    return espacios.some(function (espacio) {
      return espacio.calendario.some(function (reserva) {
        return (
          reserva.dia.toLowerCase() === dia.toLowerCase() &&
          reserva.hora === hora &&
          espacio.nombreEspacio === nombreEspacio
        );
      });
    });
  }
  return (
    <div className="espacios-container">
      {espacios.length > 0 ? (
        espacios.map((espacio) => (
          <div key={espacio.id} className="espacio-section">
            <h2 className="espacio-title">
              {espacio.nombreEspacio || "Sin nombre"}
            </h2>

            <table className="table">
              <thead>
                <tr>
                  <th>Hora</th>
                  {dias.map((dia) => (
                    <th key={dia}>{dia}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {horas.map((hora) => (
                  <tr key={hora}>
                    <td>{hora}</td>
                    {dias.map((dia) => (
                      <td key={dia}>
                        <button
                          className={`btn ${
                            estaReservado(dia, hora, espacio.nombreEspacio)
                              ? "btn-danger"
                              : "btn-success"
                          }`}
                          onClick={() =>
                            capturarReserva(dia, hora, espacio.nombreEspacio)
                          }
                        >
                          Reservar
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p>Cargando espacios...</p>
      )}
    </div>
  );
}
