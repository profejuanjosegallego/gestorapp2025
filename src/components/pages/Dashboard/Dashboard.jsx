import { Link } from "react-router-dom";
import "./Dashboard.css";

export function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
      
        <img src="https://i0.wp.com/botanicoglamping.com/wp-content/uploads/2022/09/DSC08523-1-scaled.jpg?resize=1200%2C900&ssl=1" alt="GestorApp" className="dashboard-image" />

        {/* Contenido al lado derecho */}
        <div className="dashboard-text">
          <h1>GestorApp</h1>
          <p>Reserva la cabaña perfecta para tu descanso.</p>
          <Link to="/reservar" className="btn btn-primary">Reservar</Link>
        </div>
      </div>
    </div>
  );
}
