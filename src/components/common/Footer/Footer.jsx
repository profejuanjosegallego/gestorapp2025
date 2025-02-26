import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-1">© 2024 PerformanceParts. Todos los derechos reservados.</p>
        <p className="mb-0">
          <a href="#" className="text-white me-3">Política de Privacidad</a> |
          <a href="#" className="text-white ms-3">Términos y Condiciones</a>
        </p>
      </div>
    </footer>
  );
}
