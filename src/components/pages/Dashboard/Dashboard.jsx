import { Link } from "react-router-dom";
import "./Dashboard.css"; 

export function Dashboard() {
  return (
    <div className="container dashboard-container">
      <div className="row justify-content-center">
        {/* Columna izquierda - Reservas de Cabañas */}
        <div className="col-md-5 text-center">
          <img src="https://img.alohacamp.com/0tLcDnaH-dP4zOs3yQJz5-PKNTaQZXuFuRifFR4CaTg/resize:fill:514:334/enlarge:1/czM6Ly9hbG9oYS5pbWFnZXMvcHJvcGVydGllcy9kMTc3ZmI4NWY1NzA3NGZlNDQ3ZmExMWU4Mjc0ZDA5ZThjMGViODBhLmpwZw" alt="Cabaña" className="img-fluid rounded" />
          <h2 className="mt-3">GestorApp</h2>
          <p>Reserva la cabaña perfecta para tu descanso.</p>
          <Link to="/reservar" className="btn btn-primary">Reservar</Link>
        </div>

        {/* Columna derecha - Otros Servicios */}
        <div className="col-md-5 text-center">
          <h2 className="mt-3">Otros Servicios</h2>
          <p><strong>Spa:</strong> Relájate con nuestros servicios de spa exclusivos.</p>
          <p><strong>Horarios de Atención:</strong></p>
          <ul className="list-unstyled">
            <li>Lunes a Viernes: 9:00 AM - 8:00 PM</li>
            <li>Sábados y Domingos: 10:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


