import React, { useState } from 'react';

export default function Dashboard() {
  const [message, setMessage] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleReserve = () => {
    setMessage('Reservado');
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="card mb-3" style={{ maxWidth: 800, margin: 'auto' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="../../../../src/assets/img/hoteles-con-jacuzzi-en-la-habitacion-medellin-31.webp" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">RESERVA AQUÌ</h5>
            <p className="card-text">
              reserva tu habitaciòn con jacuzzi en las fechas y horas que esten disponibles
            </p>
            <form>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">Fecha</label>
                <input type="date" className="form-control" id="date" required />
              </div>
              <div className="mb-3">
                <label htmlFor="time" className="form-label">Hora</label>
                <select className="form-control" id="time" value={selectedTime} onChange={handleTimeChange} required>
                  <option value="">Selecciona una hora</option>
                  <option value="08:00">08:00 a.m</option>
                  <option value="09:00">09:00 a.m</option>
                  <option value="10:00">10:00 a.m</option>
                  <option value="11:00">11:00 a.m</option>
                  <option value="12:00">12:00 p.m</option>
                  <option value="13:00">13:00 p.m</option>
                  <option value="14:00">14:00 p.m</option>
                  <option value="15:00">15:00 p.m</option>
                  <option value="16:00">16:00 p.m</option>
                  <option value="17:00">17:00 p.m</option>
                  <option value="18:00">18:00 p.m</option>
                </select>
              </div>
              <button type="button" className="btn btn-primary" onClick={handleReserve}>Reservar</button>
            </form>
            {message && <p className="mt-3 text-success">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
