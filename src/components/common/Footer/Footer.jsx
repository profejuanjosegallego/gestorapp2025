import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección de Logo y Descripción */}
        <div className="footer-section">
          <h2 className="logo">GestorApp</h2>
          <p>Gestiona y reserva los espacios comunes de tu unidad residencial de manera fácil y rápida.</p>
        </div>

        {/* Sección de Contacto */}
        <div className="footer-section">
          <h3>Contacto</h3>
          <p><FaMapMarkerAlt /> Calle 123, Ciudad, País</p>
          <p><FaPhoneAlt /> +57 123 456 7890</p>
          <p><FaEnvelope /> contacto@GestorApp.com</p>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Parte Inferior */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ReserVivo - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
