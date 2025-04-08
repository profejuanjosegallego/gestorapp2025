import './Footer.css';

export function Footer() {
  return (
    <footer className="footer mt-auto py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="text-white">Bosque Verde</h5>
            <p className="text-light">
              Unidad Residencial Campestre dedicada a brindar espacios de confort y tranquilidad.
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="text-white">Contáctanos</h5>
            <ul className="list-unstyled text-light">
              <li>Dirección: Km 5 Vía Guarne, Bosque Verde</li>
              <li>Teléfono: (604) 123 4567</li>
              <li>Email: info@bosqueverde.co</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-white">Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Inicio</a></li>
              <li><a href="/booking" className="text-light text-decoration-none">Reservar</a></li>
              <li><a href="#" className="text-light text-decoration-none">Reglamento</a></li>
              <li><a href="#" className="text-light text-decoration-none">Noticias</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center text-light">
            <p className="mb-0">&copy; {new Date().getFullYear()} Bosque Verde. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}