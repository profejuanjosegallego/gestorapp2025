import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      {/* Menú de navegación */}
      <nav className="navbar navbar-expand-lg menu navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            PerformanceParts
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* Link a inicio */}
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Inicio
                </Link>
              </li>

              {/* Categorías */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías (Dash)
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/categorias/motores">
                      Motores
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                    <Link className="dropdown-item" to="/categorias/suspension">
                      Suspensión
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                    <Link className="dropdown-item" to="/categorias/frenos">
                      Frenos
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                    <Link className="dropdown-item" to="/categorias/accesorios">
                      Accesorios
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                    <Link className="dropdown-item" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                    <Link className="dropdown-item" to="/calendario">

                      Calendario
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Link a reservas */}
              <li className="nav-item">
                <Link className="nav-link" to="/booking">
                  Reservar Repuestos (Booking)
                </Link>
              </li>
            </ul>

            {/* Buscador */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar repuestos..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="container mt-5" id="home">
        {/* Aquí puedes cargar el contenido de cada página por rutas */}
      </main>
    </>
  );
};

export default Menu;
