import { Link } from "react-router-dom";
import notFoundImage from "../../../../src/assets/img/imagen-404png.png"; // Ajusta la ruta según dónde lo pongas

export function NotFound() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#fff",
                color: "#235A2E",
                textAlign: "center",
                padding: "2rem"
            }}
        >
            <img
                src={notFoundImage}
                alt="Página no encontrada"
                style={{
                    maxWidth: "400px",
                    width: "100%",
                    marginBottom: "2rem"
                }}
            />
            <Link to="/home">
                <button
                    style={{
                        backgroundColor: "#968C4F",
                        color: "white",
                        border: "none",
                        padding: "0.8rem 1.5rem",
                        fontSize: "1rem",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "background-color 0.3s"
                    }}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = "#7e7740"}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = "#968C4F"}
                >
                    Volver al inicio
                </button>
            </Link>
        </div>
    );
}
