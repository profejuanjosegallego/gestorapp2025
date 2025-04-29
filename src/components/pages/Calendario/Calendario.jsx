// Calendario.jsx
import { useState } from "react";
import Calendar from 'react-calendar';
import { Form, Button } from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';
import './Calendario.css';

const Calendario = () => {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [reservations, setReservations] = useState([]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleReservation = () => {
    if (!selectedTime) {
      alert('Por favor, selecciona un horario antes de reservar.');
      return;
    }

    const reservation = {
      date: date.toDateString(),
      time: selectedTime,
    };
    setReservations([...reservations, reservation]);
    alert(`Reserva hecha para el ${reservation.date} a las ${reservation.time}`);
  };

  const renderTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 8; hour <= 18; hour++) {
      timeSlots.push(`${hour}:00`);
    }
    return timeSlots.map((time, index) => (
      <option key={index} value={time}>
        {time}
      </option>
    ));
  };

  return (
    <div className="calendar-container">
      <h2>Calendario de Reservas</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        minDate={new Date()}
        tileDisabled={({ date }) => date.getDay() === 0} // Deshabilitar domingos
      />
      
      <div className="reservation-section">
        <h3>Hacer una Reserva</h3>
        <Form>
          <Form.Group controlId="formDate">
            <Form.Label>Fecha seleccionada</Form.Label>
            <Form.Control type="text" value={date.toDateString()} readOnly />
          </Form.Group>

          <Form.Group controlId="formTime">
            <Form.Label>Hora de la Reserva</Form.Label>
            <Form.Control as="select" onChange={handleTimeChange} value={selectedTime}>
              <option value="">Seleccione un horario</option>
              {renderTimeSlots()}
            </Form.Control>
          </Form.Group>

          <Button variant="primary" onClick={handleReservation}>
            Reservar
          </Button>
        </Form>
      </div>

      <div className="reservations-list">
        <h4>Reservas Realizadas</h4>
        <ul>
          {reservations.map((res, index) => (
            <li key={index}>
              {res.date} - {res.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendario;
    