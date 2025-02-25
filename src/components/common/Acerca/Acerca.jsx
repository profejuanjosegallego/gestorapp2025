import "./Acerca.css";
import mascota from "../../../assets/img/mascota2.webp";

export function Acerca() {
  return (
    <section className="container my-5">
      <section className="row align-items-center">
        {/* Imagen */}
        <section className="col-12 col-md-6 text-center">
        <img src={mascota} alt="imagen" className="acerca-imagen img-fluid rounded shadow-lg" />
        </section>

        {/* Texto */}
        <section className="col-12 col-md-6">
          <h2 className="text-primary fw-bold">GestorApp:</h2>
          <p className="text-muted">
            🌿 Bienvenido a GestorApp, la solución perfecta para quienes buscan relajarse sin complicaciones.  
            Nuestra plataforma te permite explorar y reservar fácilmente las mejores cabañas para tu descanso, con solo un clic.
          </p>
          <ul className="list-unstyled">
            <li>🏡 <strong>Encuentra tu refugio ideal:</strong> Desde acogedoras cabañas en la montaña hasta escapadas junto al lago.</li>
            <li>📅 <strong>Reserva sin estrés:</strong> Consulta disponibilidad en tiempo real y asegura tu estadía de manera rápida y segura.</li>
            <li>🔒 <strong>Tranquilidad garantizada:</strong> Con un proceso de reserva confiable y atención personalizada.</li>
          </ul>
          <p className="fw-bold">✨ ¡Explora, elige y relájate con GestorApp! ✨</p>
        </section>
      </section>
    </section>
  );
}
