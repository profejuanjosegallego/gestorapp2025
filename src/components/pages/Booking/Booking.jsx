import { useNavigate } from "react-router-dom";
import { Menu } from "../../common/Menu/Menu";
import Footer from "../../common/Footer/Footer";
import { datosApi } from "../Dashboard/DatosJSON"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./Booking.css";

export const Booking = () => {
  const navigate = useNavigate();

  return (
    <>
      <br /><br /><br />
      <section className="container mt-4">
        <section className="row row-cols-1 row-cols-md-3 g-4">
          {datosApi.map((espacio) => {
            return (
              <section className="col" key={espacio.id}>
                <div className="card shadow-sm h-100 p-4">
                  <img src={espacio.imagen} className="card-img-top" alt={espacio.nombreEspacio} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{espacio.nombreEspacio}</h5>
                    <p className="card-text">{espacio.descripcion}</p>
                    <button 
                      className="btn btn-primary"
                      onClick={() => navigate("/dashboard", { state: { espacio } })} // Pasar el espacio directamente
                    >
                      Reserva
                    </button>
                  </div>
                </div>
              </section>
            );
          })}
        </section>
      </section>
      <Menu />
      <Footer />
    </>
  );
};

export default Booking;
