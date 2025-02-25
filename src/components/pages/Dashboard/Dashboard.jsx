import React, { useState } from "react";
import { Menu } from "../../common/Menu/Menu";
import Footer from "../../common/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";


export function Dashboard() {

  const [showForm, setShowForm] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [reservationData, setReservationData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const formData = new FormData(event.target);
    const data = {
      nombre: formData.get("nombre"),
      apellido: formData.get("apellido"),
      identificacion: formData.get("identificacion"),
      espacio: formData.get("espacio"),
      fecha: formData.get("fecha"),
      hora: formData.get("hora"),
    };

    // Guardar datos y mostrar mensaje de éxito
    setReservationData(data);
    setShowForm(false);
    setReservationSuccess(true);
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-content">
          {/* Carrusel de imágenes */}
          <div id="carouselExample" className="carousel slide dashboard-carousel" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./src/assets/img/Futbol.jpg" className="d-block w-100" alt="Cancha Futbol" />
              </div>
              <div className="carousel-item">
                <img src="./src/assets/img/Baloncesto.jpg" className="d-block w-100" alt="Cancha Baloncesto" />
              </div>
              <div className="carousel-item">
                <img src="./src/assets/img/Piscina.jpg" className="d-block w-100" alt="Piscina" />
              </div>
              <div className="carousel-item">
                <img src="./src/assets/img/Salón.jpg" className="d-block w-100" alt="Salón Social" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>

          {/* Información del Dashboard */}
          <div className="dashboard-text">
            <br />
            <h1 className="dashboard-title">🏆 Reserva Tu Espacio Fácilmente</h1>
            <p className="dashboard-description">
              Reserva el espacio perfecto para disfrutar con tus amigos.
              <p className="dashboard-description">¡Haz tu reserva ahora!</p>
            </p>
            <br />
            <div className="schedule-container">
              <h3 className="schedule-title">📅 Horarios Disponibles</h3>
              <ul className="schedule-list">
                <li> 🕗 Lunes-Miércoles-Viernes: <b>8:00AM a 7:00PM</b></li>
                <li> 🕗 Martes-Jueves: <b>10:00AM a 9:00PM</b></li>
                <li> 🕘 Sábados & Domingos: <b>9:00AM a 8:00PM</b></li>
              </ul>
              <button className="reserve-button" onClick={() => setShowForm(true)}>
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para formulario de reserva */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Reserva tu espacio</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="nombre" placeholder="Nombre" required />
              <input type="text" name="apellido" placeholder="Apellido" required />
              <input type="text" name="identificacion" placeholder="Identificación" required />
              <select name="espacio" required>
                <option disabled selected>Selecciona un Espacio</option>
                <option value="Cancha de Fútbol">Cancha De Fútbol</option>
                <option value="Cancha de Baloncesto">Cancha De Baloncesto</option>
                <option value="Piscina">Piscina</option>
                <option value="Salón Social">Salón Social</option>
              </select>
              <input type="date" name="fecha" required />
              <input type="time" name="hora" required />
              <div className="modal-buttons">
                <button type="submit" className="reserve-button">Confirmar Reserva</button>
                <button type="button" className="close-button" onClick={() => setShowForm(false)}>Cerrar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mensaje de reserva exitosa */}
      {reservationSuccess && reservationData && (
        <div className="reservation-success">
          <form onSubmit={handleSubmit}></form>
          <h2>✅ ¡Reserva Exitosa!</h2>
          <p><strong>Nombre:</strong> {reservationData.nombre} {reservationData.apellido}</p>
          <p><strong>Identificación:</strong> {reservationData.identificacion}</p>
          <p><strong>Espacio:</strong> {reservationData.espacio}</p>
          <p><strong>Fecha:</strong> {reservationData.fecha}</p>
          <p><strong>Hora:</strong> {reservationData.hora}</p>
          <button onClick={() => setReservationSuccess(false)} className="close-button">Cerrar</button>
        </div>
      )}

      <Menu />
      <Footer />
    </>
  );
};

export default Dashboard;
