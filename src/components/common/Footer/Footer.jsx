import "./Footer.css"

export function Footer() {
    return(
    <>
<section className="footer-custom text-white py-2">
  <section className="container text-center text-md-start">
    <section className="row align-items-center">
      {/* Información del footer */}
      <section className="col-12 col-md-6 text-md-end">
        <h5 className="mb-1">GestorAPP</h5>
        <p className="mb-0 small">&copy; Todos los derechos reservados</p>
        <p className="mb-0 small">Medellín - Colombia</p>
        <p className="mb-0 small">Visítanos.</p>
      </section>

      {/* Redes Sociales */}
      <section className="col-12 col-md-6 text-center text-md-start border-md-start">
        <h6 className="mb-1">Síguenos en nuestras redes sociales</h6>
        <i className="bi bi-whatsapp fs-4 px-1"></i>
        <i className="bi bi-facebook fs-4 px-1"></i>
        <i className="bi bi-instagram fs-4 px-1"></i>
      </section>
    </section>
  </section>
</section>


    </>
)}