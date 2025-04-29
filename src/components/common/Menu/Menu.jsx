import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark fixed-top shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            Performance Parts
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calendario">
                  Agenda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking">
                  Reservar Repuestos
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar repuestos..."
                aria-label="Buscar"
              />
              <button className="btn btn-outline-light" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="container" id="home" style={{ paddingTop: "100px" }}>
        {/* Aquí puedes cargar el contenido de cada página por rutas */}
      </main>
    </>
  );
};

export default Menu;
