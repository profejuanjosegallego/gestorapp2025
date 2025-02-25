import './Acerca.css';
import mascotaImg from '../../../assets/img/mascota.png';

export function Acerca() {
    return (
        <section className="acerca-section py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 text-center mb-4">
                        <h2 className="section-title">Bienvenidos a Bosque Verde</h2>
                        <div className="divider mx-auto"></div>
                    </div>
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <div className="image-container">
                            <img src={mascotaImg} alt="Bosque Verde - Mascota" className="img-fluid rounded shadow" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="content-box">
                            <h3>Un espacio diseñado para ti</h3>
                            <p className="lead">
                                Bosque Verde es una exclusiva unidad residencial campestre situada en un entorno natural privilegiado, donde la tranquilidad y el confort se unen para brindarte la mejor experiencia de vida.
                            </p>
                            <p>
                                Nuestros espacios comunes están diseñados para ofrecerte momentos de relajación y bienestar. Con esta aplicación podrás gestionar de forma sencilla la reserva de nuestras instalaciones.
                            </p>
                            <div className="features-grid">
                                <div className="feature-item">
                                    <i className="bi bi-water text-primary"></i>
                                    <span>Piscina</span>
                                </div>
                                <div className="feature-item">
                                    <i className="bi bi-droplet-half text-primary"></i>
                                    <span>Jacuzzi</span>
                                </div>
                                <div className="feature-item">
                                    <i className="bi bi-thermometer-high text-primary"></i>
                                    <span>Sauna</span>
                                </div>
                            </div>
                            <a href="/booking" className="btn btn-outline-primary mt-3">Conoce más</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}