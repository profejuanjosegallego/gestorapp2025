import "./Menu.css";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
          <img 
              src="../../../assets/img/banner.jpg" // Reemplaza con la ruta de tu logo
              alt="Logo"
              width="30" // Ajusta el tamaño según sea necesario
              height="30" // Ajusta el tamaño según sea necesario
              className="d-inline-block align-text-top"
            />
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
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dash">
                  Link
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
}
