import { Link } from "react-router-dom";
import "./Menu.css";

export function Menu() {
  return (
    <nav className="navbar navbar-expand-lg menu navbar-dark fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/dashboard">Booking</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Glamping
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/cabanas/el-encanto">El Encanto</Link></li>
                <li><Link className="dropdown-item" to="/cabanas/vista-hermosa">Vista Hermosa</Link></li>
                <li><Link className="dropdown-item" to="/cabanas/mirador-valle">Mirador de Valle</Link></li>
                <li><Link className="dropdown-item" to="/cabanas/el-bosque">El Bosque</Link></li>
                <li><Link className="dropdown-item" to="/cabanas/laguna-azul">Laguna Azul</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
