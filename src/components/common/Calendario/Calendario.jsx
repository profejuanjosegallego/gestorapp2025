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
  const { espaciosObtenidos } = location.state || dato;
  const { nombreEspacio } = location.state || [];
  const [dias, setDias] = useState([]);
  const [horas, setHoras] = useState([]);
  const [espacios, setEspacios] = useState([]);
  const [nombreEspacios, setNombreEspacios] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    console.log("Datos del calendario:", calendario);
    setDias([...calendario[0]]);
    setHoras([...calendario[1]]);
    if (nombreEspacio && nombreEspacio.length > 0) {
      setNombreEspacios(nombreEspacio);
    }
    if(espaciosObtenidos && espaciosObtenidos.length > 0){
    setEspacios(espaciosObtenidos);
    }else{
      setEspacios(dato)
    }
  }, []);

  function capturarReserva(diaReserva, horaReserva, nombreEspacio) {
    localStorage.clear()
    localStorage.setItem("datos",JSON.stringify(espaciosObtenidos))
    navigation("/formulario", {
      state: { diaReserva, horaReserva, nombreEspacio, espacios },
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
    <div className="espacios-dashboard mt-6">
      {/* Título principal con decoración */}
      <div className="dashboard-header">
        <h1 className="main-title">Gestión de Espacios</h1>
        <div className="title-decoration"></div>
      </div>
      
      {/* Contenedor de espacios con efecto de carga */}
      <div className="espacios-grid">
        {espacios.length > 0 ? (
          espacios.map((espacio) => (
            <div key={espacio.id} className="espacio-card">
              <div className="espacio-header">
                <div className="espacio-icon">
                  <i className="bi bi-building"></i>
                </div>
                <h2 className="espacio-title">
                  {espacio.nombreEspacio || "Sin nombre"}
                </h2>
              </div>
              
              <div className="calendario-container">
                <div className="table-responsive">
                  <table className="table reservation-table">
                    <thead>
                      <tr>
                        <th className="hora-header">Hora</th>
                        {dias.map((dia) => (
                          <th key={dia} className="dia-header">{dia}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {horas.map((hora) => (
                        <tr key={hora} className="hora-row">
                          <td className="hora-cell">{hora}</td>
                          {dias.map((dia) => {
                            const reservado = estaReservado(dia, hora, espacio.nombreEspacio);
                            return (
                              <td key={dia} className="reserva-cell">
                                <button
                                  className={`btn-reserva ${reservado ? "reservado" : "disponible"}`}
                                  onClick={() => capturarReserva(dia, hora, espacio.nombreEspacio)}
                                  disabled={reservado}
                                >
                                  <span className="btn-text">
                                    {reservado ? (
                                      <>
                                        <i className="bi bi-lock-fill"></i>
                                        <span className="text">Ocupado</span>
                                      </>
                                    ) : (
                                      <>
                                        <i className="bi bi-calendar-plus"></i>
                                        <span className="text">Reservar</span>
                                      </>
                                    )}
                                  </span>
                                </button>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="espacio-footer">
                <div className="estado-indicador">
                  <span className="indicador disponible-dot"></span>
                  <span className="indicador-text">Disponible</span>
                </div>
                <div className="estado-indicador">
                  <span className="indicador ocupado-dot"></span>
                  <span className="indicador-text">Ocupado</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Cargando espacios disponibles...</p>
          </div>
        )}
      </div>
    </div>
  );
}