import './Banner.css'
import bannerImg from '../../../assets/img/banner.jpg'

export function Banner() {
  return (
    <section className="banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="banner-content">
        <h1 className='text-white'>
          <span className="display-1 fw-bold">Bosque Verde</span>
        </h1>
        <p className="text-white fs-4 mt-3 mb-4">
          Tu espacio de descanso y bienestar
        </p>
        <a href="/booking" className="btn btn-success btn-lg">
          Reserva ahora
          <i className="bi bi-arrow-right-circle ms-2"></i>
        </a>
      </div>
    </section>
  )
}