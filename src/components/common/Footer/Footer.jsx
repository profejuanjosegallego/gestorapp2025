import React from "react";
import "./Footer.css";

export function Footer()  {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
      <p>&copy; 2025 GestorApp / Diego Higuita.</p>
    </footer>
  );
};

export default Footer;
