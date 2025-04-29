import  { useState } from 'react';
import './calendarioAgenda.css';

const CalendarioAgenda = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHours, setSelectedHours] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Función para manejar la selección de fecha
  const handleDateSelect = (e) => {
    setSelectedDate(e.target.value);
  };

  // Función para manejar la selección de horas
  const handleHourSelect = (hour) => {
    if (selectedHours.includes(hour)) {
      setSelectedHours(selectedHours.filter(h => h !== hour));
    } else {
      setSelectedHours([...selectedHours, hour]);
    }
  };

  // Función para manejar la reserva
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva confirmada para ${name} en el día ${selectedDate} para las horas: ${selectedHours.join(', ')}`);
  };

  return (
    <div className="agenda-page">
      {/* Video de fondo */}
      <video className="video-background" autoPlay loop>
        <source src="/src/assets/Videos/VID-20250428-WA0013.mp4" type="video/mp4" />
        Tu navegador no soporta el video de fondo.
      </video>

      {/* Contenido principal de la página */}
      <div className="calendario-container">
        <h2>Calendario de Reservas</h2>

        {/* Selección de fecha */}
        <input 
          type="date" 
          value={selectedDate} 
          onChange={handleDateSelect} 
        />

        {/* Cuadro de horarios disponibles */}
        <div className="horarios">
          {/* Horarios de 8 AM a 6 PM */}
          {Array.from({ length: 11 }, (_, i) => 8 + i).map(hour => (
            <div 
              key={hour} 
              className={`hora ${selectedHours.includes(hour) ? 'seleccionada' : ''}`} 
              onClick={() => handleHourSelect(hour)}
            >
              {hour}:00
            </div>
          ))}
        </div>

        {/* Formulario de reserva */}
        <h3>Formulario de Reserva</h3>
        <section className="formulario-reserva">
          <input 
            type="text" 
            placeholder="Nombre completo" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <div className="formulario-doble">
            <input 
              type="text" 
              placeholder="Teléfono" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <button onClick={handleSubmit}>Reservar</button>
        </section>
      </div>
    </div>
  );
};

export default CalendarioAgenda;
