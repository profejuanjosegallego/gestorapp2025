import './Footer.css'; // Archivo CSS para estilos
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; // Íconos de React Icons

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Columna 1: Información de contacto */}
          <div className="col-12 col-md-4 footer-col">
            <h4 className="footer-titulo">Contacto</h4>
            <ul className="footer-lista">
              <li>
                <FaMapMarkerAlt className="footer-icono" />
                <span>Cl. 38 Sur #46 76, Zona 8, Envigado, Antioquia</span>
              </li>
              <li>
                <FaPhone className="footer-icono" />
                <span>+123 456 7890</span>
              </li>
              <li>
                <FaEnvelope className="footer-icono" />
                <span>info@sukhdev.com</span>
              </li>
            </ul>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="col-12 col-md-4 footer-col">
            <h4 className="footer-titulo">Enlaces Rápidos</h4>
            <ul className="footer-lista">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/acerca">Acerca de</a>
              </li>
              <li>
                <a href="/servicios">Servicios</a>
              </li>
              <li>
                <a href="/contacto">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div className="col-12 col-md-4 footer-col">
            <h4 className="footer-titulo">Síguenos</h4>
            <div className="footer-redes">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="footer-redes-icono" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="footer-redes-icono" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="footer-redes-icono" />
              </a>
            </div>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="footer-derechos">
          <p>&copy; {new Date().getFullYear()} Hotel Sukhdev. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}