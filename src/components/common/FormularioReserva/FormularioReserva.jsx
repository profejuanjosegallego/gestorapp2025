import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";
import { useReservas } from "./Reserva";


export function FormularioReserva() {
  const [showModal, setShowModal] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const location = useLocation();
  const { dia, hora, fecha, espacio } = location.state || {};
  const { agregarReserva } = useReservas();
  const navegador = useNavigate();

  useEffect(() => {
    if (!espacio) {
      navegador("/booking");
    }
  }, [espacio, navegador]);

  const [formData, setFormData] = useState({
    responsable: "",
    contacto: "",
    correo: "",
    apartamento: "",
    diaReserva: "",
    horaReserva: "",
    consideraciones: "",
  });

  const [formularioHaSidoEnviado, setFormularioHaSidoEnviado] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      diaReserva: dia || fecha || "",
      horaReserva: hora || "",
    }));
    if (espacio) {
      setSelectedSpace(espacio);
    }
  }, [dia, hora, fecha, espacio]);

  useEffect(() => {
    if (formularioHaSidoEnviado) {
      console.log("Valor recibido en location.state.espacio:", espacio);
      console.log("Propiedad nombreEspacio:", espacio?.nombreEspacio);
      console.log("Enviando datos al API:", formData);
    }
  }, [formularioHaSidoEnviado, formData, espacio]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const camposRequeridos = [
      "responsable",
      "contacto",
      "correo",
      "apartamento",
      "diaReserva",
      "horaReserva",
    ];

    const hayCamposVacios = camposRequeridos.some(
      (campo) => !formData[campo].trim()
    );

    if (hayCamposVacios) {
      Swal.fire({
        icon: "warning",
        title: "Formulario incompleto",
        text: "Por favor, completa todos los campos obligatorios.",
      });
      return;
    }

    setSelectedDate(formData.diaReserva);
    setSelectedTime(formData.horaReserva);
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSpace(null);
    setSelectedDate("");
    setSelectedTime("");
    navegador("/booking");
  };

  const handleReservar = () => {
    setFormularioHaSidoEnviado(true);
    agregarReserva({
      dia: selectedDate,
      hora: selectedTime,
    });
    Swal.fire({
      title: `Reserva confirmada: \n${selectedSpace.nombreEspacio} para el \n${selectedDate}, \n${selectedTime}`,
      icon: "success",
    });
    handleCloseModal();
  };

  return (
    <>
      <br />
      <br />
      <section className="container">
        <section className="row">
          <section className="col-12 col-md-8">
            <h3>Registra tu reserva</h3>
            <hr />
            <form className="border rounded p-4 shadow" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-person-circle"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="responsable"
                  placeholder="Responsable Reserva"
                  value={formData.responsable}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-phone-fill"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  name="contacto"
                  placeholder="Contacto Reserva"
                  value={formData.contacto}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  name="correo"
                  placeholder="Correo Contacto"
                  value={formData.correo}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-building-fill"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  name="apartamento"
                  placeholder="Apartamento Reserva"
                  value={formData.apartamento}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-calendar-event-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="diaReserva"
                  placeholder="Día Reserva"
                  value={formData.diaReserva}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-clock-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="horaReserva"
                  placeholder="Hora Reserva"
                  value={formData.horaReserva}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    name="consideraciones"
                    placeholder="Consideraciones"
                    value={formData.consideraciones}
                    onChange={handleChange}
                  ></textarea>
                  <label>Consideraciones</label>
                </div>
              </div>

              <button className="btn btn-outline-primary w-100" type="submit">
                Reservar
              </button>
            </form>
          </section>

          <section className="col-12 col-md-4 align-self-center">
            <img src="../../../../src/assets/img/Reserva.png" alt="foto" className="img-fluid" />
          </section>
        </section>
      </section>

      {/* Modal de Confirmación */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <td><strong>Espacio:</strong></td>
                  <td>{selectedSpace?.nombreEspacio || "No especificado"}</td>
                </tr>
                <tr>
                  <td><strong>Fecha:</strong></td>
                  <td>{selectedDate}</td>
                </tr>
                <tr>
                  <td><strong>Hora:</strong></td>
                  <td>{selectedTime}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>¿Deseas confirmar esta reserva?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleReservar}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
