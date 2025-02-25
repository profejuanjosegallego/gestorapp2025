
import React from 'react';
import './Footer.css'; // Asegúrate de tener un archivo CSS para darle estilo al footer

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} GestorAPP. Todos los derechos reservados.</p>
        <nav>
          <ul>
            <li><a href="/about">Sobre Nosotros</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/privacy">Privacidad</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
