import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importamos FontAwesome

export const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 - Todos los derechos reservados</p>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </footer>
  );
};

