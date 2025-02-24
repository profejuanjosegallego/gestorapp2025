import "./Booking.css";
import {Footer} from "../../common/Footer/Footer"

export function Booking(){

return(

    <>
       
       <section className="booking">
      <div className="container">
        <h2 className="booking-titulo">Reserva tu Estancia</h2>
        <p className="booking-subtitulo">
          Encuentra la habitación perfecta para tu próxima estadía en Sukhdev.
        </p>
        <form className="booking-formulario">
          <div className="row">
            {/* Check-in */}
            <div className="col-12 col-md-6 col-lg-3">
              <label htmlFor="checkin" className="booking-etiqueta">
                Check-in
              </label>
              <input
                type="date"
                id="checkin"
                className="booking-input"
                required
              />
            </div>

            {/* Check-out */}
            <div className="col-12 col-md-6 col-lg-3">
              <label htmlFor="checkout" className="booking-etiqueta">
                Check-out
              </label>
              <input
                type="date"
                id="checkout"
                className="booking-input"
                required
              />
            </div>

            {/* Tipo de habitación */}
            <div className="col-12 col-md-6 col-lg-3">
              <label htmlFor="habitacion" className="booking-etiqueta">
                Tipo de Habitación
              </label>
              <select id="habitacion" className="booking-input" required>
                <option value="">Seleccione una opción</option>
                <option value="sencilla">Habitación Sencilla</option>
                <option value="doble">Habitación Doble</option>
                <option value="suite">Suite</option>
              </select>
            </div>

            {/* Botón de reserva */}
            <div className="col-12 col-md-6 col-lg-3">
              <button type="submit" className="booking-boton">
                Reservar Ahora
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
    <Footer></Footer>
    </>
)

}