import { useState } from 'react';
import { Link } from 'react-router-dom';
import piscinaImg from '../../../assets/img/piscina.jpg'
import jacuzziImg from '../../../assets/img/jacuzzi.png'
import saunaImg from "../../../assets/img/sauna.jpg";
import './Dashboard.css';

export function Dashboard() {
  // Estado para controlar la zona seleccionada
  const [selectedZone, setSelectedZone] = useState(null);
  
  // Datos de las zonas
  const zones = [
    {
      id: 'piscina',
      name: 'Piscina',
      description: 'Amplia piscina climatizada con carril de nado y área de recreación. Disfruta de momentos refrescantes en cualquier temporada.',
      image: piscinaImg,
      icon: 'bi-water',
      availability: '80%',
      schedule: '8:00 AM - 8:00 PM',
      color: '#3498db'
    },
    {
      id: 'jacuzzi',
      name: 'Jacuzzi',
      description: 'Jacuzzi con hidromasaje para 6 personas con vista al bosque. Relájate con chorros terapéuticos mientras contemplas la naturaleza.',
      image: jacuzziImg,
      icon: 'bi-droplet-half',
      availability: '60%',
      schedule: '8:00 AM - 8:00 PM',
      color: '#9b59b6'
    },
    {
      id: 'sauna',
      name: 'Sauna',
      description: 'Sauna finlandesa con capacidad para 8 personas. Disfruta de las propiedades terapéuticas del calor seco para tu salud y bienestar.',
      image: saunaImg,
      icon: 'bi-thermometer-high',
      availability: '75%',
      schedule: '9:00 AM - 7:00 PM',
      color: '#e74c3c'
    }
  ];

  // Función para cambiar la zona seleccionada
  const handleZoneClick = (zoneId) => {
    setSelectedZone(zoneId === selectedZone ? null : zoneId);
  };

  return (
    <section className="dashboard-section py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="section-title">Nuestros Espacios</h2>
            <div className="divider mx-auto"></div>
            <p className="lead">Descubre y reserva nuestras zonas comunes</p>
          </div>
        </div>

        <div className="row">
          {zones.map((zone) => (
            <div key={zone.id} className="col-md-4 mb-4">
              <div 
                className={`zone-card ${selectedZone === zone.id ? 'selected' : ''}`}
                onClick={() => handleZoneClick(zone.id)}
                style={{'--zone-color': zone.color}}
              >
                <div className="zone-icon">
                  <i className={`bi ${zone.icon}`}></i>
                </div>
                <div className="zone-image">
                  <img src={zone.image} alt={zone.name} className="img-fluid" />
                  <div className="zone-availability" style={{width: zone.availability}}></div>
                </div>
                <div className="zone-content">
                  <h3>{zone.name}</h3>
                  <p className="zone-schedule">
                    <i className="bi bi-clock me-2"></i>
                    {zone.schedule}
                  </p>
                  <p className="zone-description">{zone.description}</p>
                  
                  <div className="zone-footer">
                    <div className="availability-info">
                      <span>Disponibilidad</span>
                      <span className="availability-percentage">{zone.availability}</span>
                    </div>
                    <Link to={`/booking?area=${zone.id}`} className="btn btn-primary">
                      <i className="bi bi-calendar2-plus me-2"></i>
                      Reservar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <Link to="/booking" className="btn btn-success btn-lg">
              <i className="bi bi-calendar-check me-2"></i>
              Ver todas las zonas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}