import './Menu.css';
import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-tree-fill me-2"></i>
            Bosque Verde
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking">
                  Reservar
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Espacios
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/booking?area=sauna">
                      Sauna
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/booking?area=jacuzzi">
                      Jacuzzi
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/booking?area=piscina">
                      Piscina
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
            <div className="d-flex ms-lg-3">
              <button className="btn btn-success" type="button">
                <i className="bi bi-person-circle me-1"></i>
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}