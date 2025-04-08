import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import { datosAPI } from "../../pages/DashBoard/DatosJSON";

export function FormularioReserva() {
  const [getResponsableReserva, setResponsableReserva] = useState('');
  const [getContactoReserva, setContactoReserva] = useState('');
  const [getCorreoReserva, setCorreoReserva] = useState('');
  const [getApartamentoReserva, setApartamentoReserva] = useState('');
  const [getDiaReserva, setDiaReserva] = useState('');
  const [getHoraReserva, setHoraReserva] = useState('');
  const [getConsideracionesReserva, setConsideracionReserva] = useState('');

  const [formularioHaSidoEnviado, setFormularioHaSidoEnviado] = useState(false);
  const [bookingConfirmado, setBookingConfirmado] = useState(null);

  const receptor = useLocation();
  const navigate = useNavigate(); //  Hook para redireccionar
  const { dia, hora } = receptor.state || {};

  useEffect(() => {
    if (dia && hora) {
      setDiaReserva(dia);
      setHoraReserva(hora);
    }
  }, [dia, hora]);

  function capturarDatosFormulario(event) {
    event.preventDefault();

    const reserva = {
      responsable: getResponsableReserva,
      contacto: getContactoReserva,
      correo: getCorreoReserva,
      apartamento: getApartamentoReserva,
      dia: getDiaReserva,
      hora: getHoraReserva,
      consideraciones: getConsideracionesReserva
    };

    // Suponiendo que reservas en el primer espacio físico (id:1)
    datosAPI[0].calendario.push({
      dia: getDiaReserva,
      hora: getHoraReserva
    });

    setBookingConfirmado(reserva);
    setFormularioHaSidoEnviado(true);

    // Redirigir tras 1 segundo 
    setTimeout(() => {
      navigate("/booking"); 
    }, 1000);
  }

  return (
    <>
      <br /><br />
      <section className="container">
        <section className="row">
          <section className="col-12 col-md-8">
            <h3>Registra tu reserva</h3>
            <hr />

            {formularioHaSidoEnviado && bookingConfirmado ? (
              <div className="alert alert-success">
                <h5>✅ Reserva confirmada. Redirigiendo...</h5>
              </div>
            ) : (
              <form className="border rounded p-4 shadow" onSubmit={capturarDatosFormulario}>

                <div className="input-group mb-3">
                  <span className="input-group-text"><i className="bi bi-person-circle"></i></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Responsable Reserva"
                    value={getResponsableReserva}
                    onChange={(e) => setResponsableReserva(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text"><i className="bi bi-phone-fill"></i></span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Contacto Reserva"
                    value={getContactoReserva}
                    onChange={(e) => setContactoReserva(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Correo Contacto"
                    value={getCorreoReserva}
                    onChange={(e) => setCorreoReserva(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text"><i className="bi bi-building-fill"></i></span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Apartamento Reserva"
                    value={getApartamentoReserva}
                    onChange={(e) => setApartamentoReserva(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text"><i className="bi bi-calendar-event-fill"></i></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Día Reserva"
                    value={getDiaReserva}
                    readOnly
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text"><i className="bi bi-clock-fill"></i></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Hora Reserva"
                    value={getHoraReserva}
                    readOnly
                  />
                </div>

                <div className="mb-3">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Añade consideraciones"
                      value={getConsideracionesReserva}
                      onChange={(e) => setConsideracionReserva(e.target.value)}
                    ></textarea>
                    <label>Consideraciones</label>
                  </div>
                </div>

                <button className="btn btn-outline-primary w-100" type="submit">Reservar</button>
              </form>
            )}
          </section>

          <section className="col-12 col-md-4 align-self-center">
            <img
              src="../../../../src/assets/img/reserva.webp"
              alt="foto"
              className="img-fluid"
            />
          </section>
        </section>
      </section>
    </>
  );
}
