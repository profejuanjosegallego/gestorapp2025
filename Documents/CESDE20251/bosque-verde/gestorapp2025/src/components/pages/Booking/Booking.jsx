import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Menu } from '../../common/Menu/Menu';
import { Footer } from '../../common/Footer/Footer';
import './Booking.css';
import piscinaImg from '../../../assets/img/piscina.jpg';
import jacuzziImg from '../../../assets/img/jacuzzi.png';
import saunaImg from '../../../assets/img/sauna.jpg';

export function Booking() {
  const [searchParams] = useSearchParams();
  const [selectedArea, setSelectedArea] = useState(searchParams.get('area') || 'piscina');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [bookingStatus, setBookingStatus] = useState(null);
  
  // Datos simulados para cada zona
  const areas = {
    piscina: {
      title: 'Piscina',
      description: 'Amplia piscina climatizada con carril de nado y área de recreación',
      capacity: 20,
      icon: 'bi-water',
      image: piscinaImg
    },
    jacuzzi: {
      title: 'Jacuzzi',
      description: 'Jacuzzi con hidromasaje para 6 personas con vista al bosque',
      capacity: 6,
      icon: 'bi-droplet-half',
      image: jacuzziImg
    },
    sauna: {
      title: 'Sauna',
      description: 'Sauna finlandesa con capacidad para 8 personas',
      capacity: 8,
      icon: 'bi-thermometer-high',
      image: saunaImg
    }
  };

  // Horarios disponibles
  const availableTimes = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  // Cambiar área seleccionada
  const handleAreaChange = (area) => {
    setSelectedArea(area);
    setBookingStatus(null);
  };

  // Enviar formulario de reserva
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí iría la lógica para enviar la reserva a un backend
    // Por ahora solo mostramos un mensaje de éxito
    setBookingStatus('success');
    
    // Reiniciar formulario
    setDate('');
    setTime('');
    
    // Scroll al mensaje de éxito
    setTimeout(() => {
      document.getElementById('booking-status').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Obtener fecha mínima (hoy)
  const getMinDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    // Actualizar área seleccionada cuando cambia la URL
    const area = searchParams.get('area');
    if (area && areas[area]) {
      setSelectedArea(area);
    }
  }, [searchParams]);

  return (
    <>
      <Menu />
      
      <div className="booking-header">
        <div className="container">
          <h1 className="text-center pt-5 mt-5">Reserva de Espacios</h1>
          <p className="text-center lead">Gestiona la reserva de nuestras zonas comunes</p>
        </div>
      </div>
      
      <div className="container py-5">
        {/* Selector de áreas */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="area-selector">
              {Object.keys(areas).map((area) => (
                <div 
                  key={area}
                  className={`area-option ${selectedArea === area ? 'active' : ''}`}
                  onClick={() => handleAreaChange(area)}
                >
                  <i className={`bi ${areas[area].icon}`}></i>
                  <span>{areas[area].title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Área seleccionada */}
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="area-details">
              <div className="area-image">
                <img 
                  src={areas[selectedArea].image} 
                  alt={areas[selectedArea].title}
                  className="img-fluid rounded shadow"
                />
              </div>
              <div className="area-info mt-4">
                <h2>
                  <i className={`bi ${areas[selectedArea].icon} me-2`}></i>
                  {areas[selectedArea].title}
                </h2>
                <p className="lead">{areas[selectedArea].description}</p>
                <div className="info-grid">
                  <div className="info-item">
                    <i className="bi bi-people-fill"></i>
                    <span>Capacidad: {areas[selectedArea].capacity} personas</span>
                  </div>
                  <div className="info-item">
                    <i className="bi bi-clock"></i>
                    <span>Horario: 8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="info-item">
                    <i className="bi bi-calendar-check"></i>
                    <span>Reserva por horas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulario de reserva */}
          <div className="col-lg-6">
            <div className="booking-form">
              <h3>Reservar {areas[selectedArea].title}</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">Fecha</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    id="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={getMinDate()}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="time" className="form-label">Hora</label>
                  <select 
                    className="form-select" 
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  >
                    <option value="">Selecciona una hora</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="residents" className="form-label">Número de personas</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    id="residents" 
                    min="1" 
                    max={areas[selectedArea].capacity}
                    placeholder={`Máximo ${areas[selectedArea].capacity}`}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="notes" className="form-label">Notas adicionales (opcional)</label>
                  <textarea 
                    className="form-control" 
                    id="notes" 
                    rows="3"
                    placeholder="Información adicional para tu reserva"
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-success btn-lg">
                    <i className="bi bi-calendar-check me-2"></i>
                    Confirmar Reserva
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Estado de la reserva */}
        {bookingStatus && (
          <div id="booking-status" className="row mt-4">
            <div className="col-12">
              <div className={`alert alert-${bookingStatus === 'success' ? 'success' : 'danger'} d-flex align-items-center`}>
                <i className={`bi ${bookingStatus === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'} me-2`}></i>
                <div>
                  {bookingStatus === 'success' ? (
                    <div>
                      <strong>¡Reserva exitosa!</strong> Has reservado {areas[selectedArea].title} para la fecha seleccionada.
                    </div>
                  ) : (
                    <div>
                      <strong>Error en la reserva.</strong> Por favor intenta nuevamente.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </>
  );
}