import "./Error.css";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Error() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirige al inicio después de 5 segundos
    const timer = setTimeout(() => {
      navigate('/'); // Redirige a la página principal
    }, 5000);

    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, [navigate]);

  return (
    <div className="container">
      <div className="error-container">
        <h1 className="display-1">Oops!</h1>
        <h2 className="display-4">404 Not Found</h2>
        <div className="error-details mb-4">
          Sorry, an error has occurred. The requested page was not found!
        </div>
        <div className="error-actions d-flex flex-wrap gap-2 justify-content-center">
          {/* Botón de redirección a la página principal */}
          <a href="/home" className="btn btn-primary btn-lg" style={{ width: '240px' }}>
            <svg xmlns="./components/pages/Home/Home" width="16" height="16" fill="currentColor"
              className="bi bi-house me-2" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
            </svg>
            Volver al Inicio
          </a>
        </div>
      </div>
    </div>
  );
}
