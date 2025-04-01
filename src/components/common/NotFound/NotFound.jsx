import { Link } from "react-router-dom";

export const NotFound = () => (
    <div className="container text-center py-5">
        <h1 className="display-1">404</h1>
        <p className="lead">Página no encontrada</p>
        <Link to="/booking" className="btn btn-primary">
            Volver al inicio
        </Link>
    </div>
);