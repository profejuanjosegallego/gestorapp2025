import "./Dashboard.css";
import { Footer } from "../../common/Footer/Footer";
import { Menu } from "../../common/Menu/Menu";
import { useState } from "react";

export function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const availableDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  const availableHours = [
    "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"
  ];

  const handleReservation = (e) => {
    e.preventDefault();
    if (!selectedDay || !selectedTime) {
      alert("Por favor, selecciona un día y una hora.");
      return;
    }
    alert(`Reserva confirmada para el ${selectedDay} a las ${selectedTime}`);
    setShowForm(false); // Ocultar el formulario después de reservar
    setSelectedDay("");
    setSelectedTime("");
  };

  return (
    <>
      <Menu />
      <div className="dashboard-container">
        {/* Imagen del espacio común */}
        <div className="image-container">
          <img
            src="../../../../src/assets/img/cuartoGamer.jpg"
            alt="Zona Gamer"
            className="dashboard-image"
          />
        </div>

        {/* Card con información */}
        <div className="card text-bg-dark mb-3 content-card">
          <div className="card-header">Cuarto Gamer</div>
          <div className="card-body">
            <p className="card-title">
              🎮 Zona Gamer: Vive la mejor experiencia de juego 🚀
            </p>
            <p className="card-text">
              Disfruta de un espacio diseñado para gamers, con consolas y PCs de alto rendimiento, pantallas HD, iluminación LED y mobiliario ergonómico. Sumérgete en partidas épicas con sonido envolvente y el máximo confort. ⚡ Reserva ahora y juega como un pro.
            </p>
            <h6>Horarios Disponibles:</h6>
            <ul className="schedule-list">
              {availableDays.map((dia) => (
                <li key={dia}>
                  <strong>{dia}:</strong> 08:00 AM - 09:00 PM
                </li>
              ))}
            </ul>

            {/* Botón para abrir/cerrar el formulario */}
            {!showForm ? (
              <button className="reserve-button" onClick={() => setShowForm(true)}>
                Reservar Ahora
              </button>
            ) : (
              <form onSubmit={handleReservation} className="reservation-form">
                <label htmlFor="day-select">Selecciona un día:</label>
                <select id="day-select" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)} required>
                  <option value="">-- Selecciona un día --</option>
                  {availableDays.map((day) => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>

                <label htmlFor="time-select">Selecciona una hora:</label>
                <select id="time-select" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required>
                  <option value="">-- Selecciona una hora --</option>
                  {availableHours.map((hour) => (
                    <option key={hour} value={hour}>{hour}</option>
                  ))}
                </select>

                <button type="submit" className="reserve-button">Confirmar Reserva</button>
                <button type="button" className="cancel-button" onClick={() => setShowForm(false)}>
                  Cancelar
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
