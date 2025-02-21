import "./Acerca.css"

export function Acerca(){
    return(

        <section className="container my-5">
            <section className="row">
                <section className="col-12 col-md-6">
                    <img src="../../../../src/assets/img/mascota.webp" alt="imagen" className="img-fluid"/>
                </section>
                <section className="col-12 col-md-6">
                    <h2 className="title-acerca-de">Gestor App</h2>
                    <p className="description-vita-bella">
                    Gestor App de Vita Bella te permite gestionar y reservar las zonas comunes de tu conjunto residencial de manera fácil y rápida. Con solo unos clics, accede a la disponibilidad en tiempo real y asegura tu lugar en la piscina, el salón social, las canchas deportivas y mucho más.
                    </p>
                </section>
            </section>
        </section>
    )
}