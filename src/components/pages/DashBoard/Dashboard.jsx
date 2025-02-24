import "./Dashboard.css";
import {Footer} from "../../common/Footer/Footer"

export function DashBoard (){

return(

    <>
        <section className="servicios">
      <div className="container">
        <h2 className="servicios-titulo">Nuestros Servicios</h2>
        <p className="servicios-subtitulo">
          Descubre todo lo que tenemos para ofrecerte en Hotel Lux.
        </p>
        <div className="row">
          {/* Tarjeta 1: Habitaciones de lujo */}
          <div className="col-12 col-md-4">
            <div className="servicio-card">
              <img
                src="../../../../src/assets/img/DUF_4113-v-ok-1.jpg" // Cambia esta ruta
                alt="Habitaciones de lujo"
                className="servicio-imagen"
              />
              <h3 className="servicio-titulo">Habitaciones de Lujo</h3>
              <p className="servicio-descripcion">
                Disfruta de nuestras amplias y cómodas habitaciones, diseñadas para tu máximo confort.
              </p>
            </div>
          </div>

          {/* Tarjeta 2: Gastronomía */}
          <div className="col-12 col-md-4">
            <div className="servicio-card">
              <img
                src="../../../../src/assets/img/336329_8555c50dbeb4466aafa9fdd67d57a3e8~mv2.jpg" // Cambia esta ruta
                alt="Gastronomía"
                className="servicio-imagen"
              />
              <h3 className="servicio-titulo">Gastronomía Exquisita</h3>
              <p className="servicio-descripcion">
                Deleita tu paladar con nuestros platos gourmet, preparados por los mejores chefs.
              </p>
            </div>
          </div>

          {/* Tarjeta 3: Spa y Bienestar */}
          <div className="col-12 col-md-4">
            <div className="servicio-card">
              <img
                src="../../../../src/assets/img/ssp0304.jpg" // Cambia esta ruta
                alt="Spa y Bienestar"
                className="servicio-imagen"
              />
              <h3 className="servicio-titulo">Spa y Bienestar</h3>
              <p className="servicio-descripcion">
                Relájate y rejuvenece con nuestros tratamientos de spa y terapias de bienestar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </>
)

}