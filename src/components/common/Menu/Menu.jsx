import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export function Menu() {
  const [scrolled, setScrolled] = useState(false);
  
  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          {/* Logo con gradiente */}
          <Link className="navbar-brand fw-bold" to="/home">
            <span className="brand-text">Gestor</span>
            <span className="brand-highlight">App</span>
          </Link>
          
          {/* Botón hamburguesa personalizado */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarContent">
            {/* Enlaces principales */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  <i className="bi bi-house-door me-1"></i>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking">
                  <i className="bi bi-calendar-check me-1"></i>
                  Reservas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dash">
                  <i className="bi bi-calendar-week me-1"></i>
                  Calendario
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/formulario">
                  <i className="bi bi-pencil-square me-1"></i>
                  Nueva Reserva
                </Link>
              </li>
            </ul>
            
            {/* Búsqueda y botón de acción */}
            <div className="d-flex align-items-center gap-3">
              <div className="search-container">
                <input
                  className="form-control search-input"
                  type="search"
                  placeholder="Buscar..."
                  aria-label="Search"
                />
                <button className="search-icon" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
              <button className="btn action-button d-none d-lg-block" type="button">
                <i className="bi bi-plus-lg me-1"></i>
                Crear
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}