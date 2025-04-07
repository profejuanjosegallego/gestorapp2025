import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { datosAPI } from "../DashBoard/DatosJSON";

export function FormularioReserva() {
  const location = useLocation();
  const { diaReserva, horaReserva, nombreEspacio,espacios } = location.state || {};
  // const datosGuardados = espacios || datosAPI;
  // const datos = datosGuardados ? JSON.parse(datosGuardados) : datosAPI;
  const [getResponsableReserva, setResponsableReserva] = useState("");
  const [getNumeroApartamento, setNumeroApartamento] = useState("");
  const [getNumeroContacto, setNumeroContacto] = useState("");
  const [getCorreoElectronico, setCorreoElectronico] = useState("");
  const [getDiaReserva, setDiaReserva] = useState("");
  const [getHoraReserva, setHoraReserva] = useState("");
  const [getConsideraciones, setConsideraciones] = useState("");

  const [getDatosFormulario, setDatosFormulario] = useState("");
  const [formularioHaSidoEnviado, setFormularioHaSidoEnviado] = useState(false);
  const navigation = useNavigate()
  const datosGuardados = JSON.stringify(localStorage.getItem("datos")) || datosAPI; 
  const espaciosObtenidos = espacios || datosGuardados
  useEffect(() => {
    if (diaReserva && horaReserva) {
      setDiaReserva(diaReserva);
      setHoraReserva(horaReserva);
      //nombreEspacio
    }
  }, [diaReserva, horaReserva]);

  useEffect(() => {
    if (formularioHaSidoEnviado) {
      console.log("Datos registrados");
    }
  }, [formularioHaSidoEnviado]);
  
  function capturarDatosDelFormulario(evento) {
    evento.preventDefault();
    let datosCapturados = {
      responsable: getResponsableReserva,
      numeroApartamento: getNumeroApartamento,
      numeroContacto: getNumeroContacto,
      correoElectronico: getCorreoElectronico,
      diaReserva: getDiaReserva,
      horaReserva: getHoraReserva,
      consideraciones: getConsideraciones,
    };
    const objeto = {
      dia: getDiaReserva,
      hora: getHoraReserva,
    };
    espaciosObtenidos.some((dato, index) => {
      if (dato.nombreEspacio === nombreEspacio) {
        dato.calendario.push(objeto);
        const confirmarReserva = window.confirm(`Espacio reservado con éxito\n\nDetalles de la reserva:\nEspacio: ${nombreEspacio}\nDía: ${getDiaReserva}\nHora: ${getHoraReserva}\nResponsable: ${getResponsableReserva}`);

    
        // Eliminar el objeto de su posición original
        // espaciosObtenidos.splice(index, 1);
        
        // Agregarlo al inicio del array
        // espaciosObtenidos.unshift(dato);
        
        
        navigation("/dash",{state: {espaciosObtenidos}});
        localStorage.setItem("datos",JSON.stringify(espacios))
        return true; // Detiene el `some` después de encontrar el elemento
      }
    });
    

    setDatosFormulario(datosCapturados);
    setFormularioHaSidoEnviado(true);
  }

  return (
    <>
      <section style={{ marginTop: "100px" }} className="container">
        <section className="row">
          <section className="col-12 col-md-8">
            <h3>Registra tu reserva en nuestro espacio</h3>
            <hr />
            <form
              className="border rounded p-4 shadow"
              onSubmit={capturarDatosDelFormulario}
            >
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-person-circle"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Responsable Reserva"
                  value={getResponsableReserva}
                  onChange={(evento) => {
                    setResponsableReserva(evento.target.value);
                  }}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-buildings-fill"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Número Apartamento"
                  value={getNumeroApartamento}
                  onChange={(evento) => {
                    setNumeroApartamento(evento.target.value);
                  }}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-phone-vibrate-fill"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Número Contacto"
                  value={getNumeroContacto}
                  onChange={(evento) => {
                    setNumeroContacto(evento.target.value);
                  }}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Correo electrónico"
                  value={getCorreoElectronico}
                  onChange={(evento) => {
                    setCorreoElectronico(evento.target.value);
                  }}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-calendar-event-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Dia Reserva"
                  defaultValue={getDiaReserva}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-clock-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Hora Reserva"
                  defaultValue={getHoraReserva}
                />
              </div>
              <div className="mb-3">
                <div className="form-floating">
                  <textarea className="form-control"></textarea>
                  <label>Consideraciones</label>
                </div>
              </div>
              <button type="submit" className="btn btn-outline-primary w-100">
                Reservar
              </button>
            </form>
          </section>
          <section className="col-12 col-md-4 align-self-center">
            <img
              src="https://th.bing.com/th/id/OIP.FZ1_1uj--m4rX6sCaiM_HgHaEK?rs=1&pid=ImgDetMain"
              alt=""
            />
          </section>
        </section>
      </section>
    </>
  );
}
