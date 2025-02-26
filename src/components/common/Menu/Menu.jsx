import "./Menu.css";

const Menu = () => {
  return (
    <>
      {/* Menú de navegación */}
      <nav className="navbar navbar-expand-lg menu navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            PerformanceParts
          </a>
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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Catálogo
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Motores
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Suspensión
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Frenos
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Accesorios
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
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
        <h1 className="text-center">Bienvenido a PerformanceParts</h1>
        <p className="text-center">Encuentra los mejores repuestos de alto rendimiento para tu vehículo.</p>
      </main>
    </>
  );
};

// ✅ Exportamos Menu como default
export default Menu;
