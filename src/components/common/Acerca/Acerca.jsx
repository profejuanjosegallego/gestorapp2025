import "./Acerca.css"

export function Acerca() {
    return (

        <section className="container my-5">
            <section className="row">
                <section className="col-12 col-md-6">
                    <img src="../../../../src/assets/img/mascota.jpg" alt="imagen" className="img-fluid" />
                </section>
                <section className="col-12 col-md-6">
                    <p className="reserva-title">GestorApp</p>
                    <br />
                    <p className="reserva-texto">
                        ¿Necesitas un lugar para relajarte o disfrutar con amigos? Con nuestra aplicación,
                        reserva fácilmente espacios como la piscina, canchas deportivas o salones de eventos.
                        Olvídate de largas gestiones y asegura tu lugar con solo unos clics. Planifica tu
                        tiempo de descanso de forma rápida y organizada.
                    </p>
                </section>
            </section>
        </section>
    )
}