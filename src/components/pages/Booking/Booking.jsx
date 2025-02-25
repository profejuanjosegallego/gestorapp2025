import "./Booking.css"

const images = [
    "../../../../src/assets/img/jacuzzi.webp",
    "../../../../src/assets/img/sauna.webp",
    "../../../../src/assets/img/cancha_tennis.webp"
];

export const Booking = () => {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center my-5">
                <div className="custom-container p-4 shadow-lg rounded">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {images.map((src, index) => (
                                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                            <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExample"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExample"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="mb-3 text-center">Reserva tu espacio</h3>
                            <form>
                                <div className="mb-2">
                                    <label className="form-label">Nombre Completo</label>
                                    <input type="text" className="form-control" placeholder="Tu nombre" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Correo</label>
                                    <input type="email" className="form-control" placeholder="tu@email.com" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Espacio a reservar</label>
                                    <select className="form-select">
                                        <option value="">-- Elige una opción --</option>
                                        <option value="spa">Spa</option>
                                        <option value="sauna">Sauna</option>
                                        <option value="jacuzzi">Jacuzzi</option>
                                        <option value="cancha-tenis">Cancha de tenis</option>
                                    </select>
                                </div>

                                <div className="mb-2">
                                    <label className="form-label">Fecha</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100" id="button-booking">Reservar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}