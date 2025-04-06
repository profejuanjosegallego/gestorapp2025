import './NotFoundPage.css';

export function NotFoundPage() {
    return (
        <div className="container-404">
            <div className="content-box">
                <h1 className="error-code">404</h1>
                <p className="error-message">¡Oops! La página que buscas no existe.</p>
                <a href="/" className="back-button">Volver al Inicio</a>
            </div>
        </div>
    );
}
