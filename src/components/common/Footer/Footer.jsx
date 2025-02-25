import './Footer.css'
export function Footer(){
    return(
    <>
    <>
  <footer className="bg-dark text-light py-4">
    <div className="container">
      <div className="row">
        {/* Información del edificio */}
        <div className="col-md-4 mb-3">
          <h5>Edificio Central</h5>
          <p>Dirección: Calle 123, Ciudad</p>
          <p>Teléfono: +57 300 123 4567</p>
          <p>Email: contacto@edificiocentral.com</p>
        </div>
        {/* Enlaces rápidos */}
        <div className="col-md-4 mb-3">
          <h5>Enlaces rápidos</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-light text-decoration-none">
                Reservas
              </a>
            </li>
            <li>
              <a href="#" className="text-light text-decoration-none">
                Normas
              </a>
            </li>
            <li>
              <a href="#" className="text-light text-decoration-none">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" className="text-light text-decoration-none">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        {/* Redes sociales */}
        <div className="col-md-4 mb-3">
          <h5>Síguenos</h5>
          <a href="#" className="text-light me-3">
            <i className="fab fa-facebook fa-lg" />
          </a>
          <a href="#" className="text-light me-3">
            <i className="fab fa-twitter fa-lg" />
          </a>
          <a href="#" className="text-light me-3">
            <i className="fab fa-instagram fa-lg" />
          </a>
        </div>
      </div>
      <div className="text-center mt-3">
        <p className="mb-0">
          © 2025 Edificio Central - Todos los derechos reservados
        </p>
      </div>
    </div>
  </footer>
  {/* Agregar Bootstrap y Font Awesome */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  />
</>


        
    </>)

}