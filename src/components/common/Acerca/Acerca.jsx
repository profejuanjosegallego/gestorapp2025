export function Acerca() {
    return (
        <section className="container my-5">
            <section className="row align-items-center">
                {/* Imagen representativa */}
                <section className="col-12 col-md-6">
                    <img src="../../../../src/assets/img/parts.webp" alt="Auto de alto rendimiento" className="img-fluid rounded shadow" />
                </section>

                {/* Texto descriptivo */}
                <section className="col-12 col-md-6">
                    <h2 className="fw-bold text-primary">Sobre PerformanceParts</h2>
                    <p>
                        En <strong>PerformanceParts</strong>, llevamos la potencia y la calidad al siguiente nivel.
                        Nos especializamos en la venta de <strong>repuestos de alto rendimiento</strong> para mejorar la velocidad,
                        estabilidad y resistencia de tu vehículo.
                    </p>
                    <p>
                        Desde <strong>motores de alto desempeño</strong> hasta <strong>sistemas de frenos reforzados</strong>,
                        ofrecemos productos diseñados para los verdaderos entusiastas de la velocidad.
                    </p>
                </section>
            </section>
        </section>
    );
}
