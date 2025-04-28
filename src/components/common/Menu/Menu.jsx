import "./Menu.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/hotel-sukhdev-creative-logo-design__1_-removebg-preview (1).png";
import { useState } from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";

export function Menu() {
  const [searchQuery, setSearchQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const API_KEY = "moLPxymCyKV85hEdXmPxaDgmRUmqpr13yZGaf1njzWOEiVO0yyFntfR7";
  const API_URL = "https://api.pexels.com/v1/search";

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setShowResults(true);
    setErrorMessage("");

    try {
      const response = await axios.get(`${API_URL}?query=${searchQuery}&per_page=12`, {
        headers: {
          Authorization: API_KEY
        }
      });
      setPhotos(response.data.photos);
      if (response.data.photos.length === 0) {
        setErrorMessage("No se encontraron resultados. Intenta con otro término.");
      }
    } catch (error) {
      console.error("Error fetching photos from Pexels:", error);
      setPhotos([]);
      if (error.response) {
        if (error.response.status === 401) {
          setErrorMessage("API Key inválida. Por favor verifica tu clave de Pexels.");
        } else if (error.response.status === 429) {
          setErrorMessage("Límite de peticiones excedido. Intenta nuevamente más tarde.");
        } else {
          setErrorMessage("Error al conectar con el servicio de imágenes.");
        }
      } else {
        setErrorMessage("Error de conexión. Verifica tu conexión a internet.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const closeResults = () => {
    setShowResults(false);
    setSearchQuery("");
    setPhotos([]);
    setErrorMessage("");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img src={logo} alt="Hotel Logo" className="navbar-logo" />
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
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking">Booking</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dash">Services</Link>
              </li>
            </ul>
            
            <form className="search-form-container" onSubmit={handleSearch}>
              <div className="search-input-wrapper">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Buscar imágenes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button 
                type="submit" 
                className="search-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="search-spinner"></span>
                ) : (
                  <>
                    <i className="bi bi-search search-icon"></i>
                    <span className="search-text">Buscar</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </nav>

      {showResults && (
        <div className="search-results-overlay">
          <div className="search-results-container">
            <button 
              className="close-results-btn" 
              onClick={closeResults}
              aria-label="Cerrar resultados"
            >
              <i className="bi bi-x-lg"></i>
            </button>
            
            <h3 className="results-title">
              Resultados para: <span className="search-term">{searchQuery}</span>
            </h3>
            
            {errorMessage ? (
              <div className="error-message">{errorMessage}</div>
            ) : photos.length > 0 ? (
              <div className="results-grid">
                {photos.map((photo) => (
                  <div key={photo.id} className="photo-card">
                    <img 
                      src={photo.src.medium} 
                      alt={photo.photographer} 
                      loading="lazy"
                    />
                    <div className="photo-footer">
                      <a 
                        href={photo.photographer_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-camera"></i> {photo.photographer}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              !isLoading && <p className="no-results">No se encontraron resultados</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}