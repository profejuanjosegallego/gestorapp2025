import './Banner.css';

export function Banner() {
  return (
    <>
      <section className="banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1 className="banner-title">Bienvenido a Sukhdev</h1>
          <p className="banner-subtitle">
            Descubre el lujo en cada detalle y vive una experiencia inolvidable en nuestro hotel.
          </p>
          <p className="banner-description">
            Con habitaciones elegantes, gastronomía exquisita y un servicio de clase mundial, 
            Hotel Lux es el lugar perfecto para tu descanso. ¡Reserva ahora y disfruta de una 
            estadía inigualable!
          </p>
          <button className="banner-cta">Reservar ahora</button>
        </div>
      </section>
    </>
  );
}