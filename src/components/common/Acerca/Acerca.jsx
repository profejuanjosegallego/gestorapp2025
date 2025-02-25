import "./Acerca.css"

export function Acerca(){
    return(

        <section className="d-flex justify-content-center my-4">
  <section className="container p-3 shadow-lg rounded" style={{ maxWidth: "80%" }}>
    <section className="row align-items-center">
      <section className="col-12 col-md-5">
        <img 
          src="../../../../src/assets/img/mascota.webp" 
          alt="imagen" 
          className="img-fluid rounded-3"
        />
      </section>

      <section className="col-12 col-md-7">
        <h4 className="text-center mb-2">Gestor App</h4>
        <p className="small text-muted">
          Gestor App de Vita Bella te permite gestionar y reservar las zonas comunes 
          de tu conjunto residencial de manera fácil y rápida. Con solo unos clics, 
          accede a la disponibilidad en tiempo real y asegura tu lugar en la piscina, 
          el salón social, las canchas deportivas y mucho más.
        </p>
      </section>
    </section>
  </section>
</section>

    )
}