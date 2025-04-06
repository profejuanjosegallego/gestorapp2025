import { useLocation, useNavigate } from "react-router-dom";
import "./Booking.css";
export function Booking() {
  const datosGuardados = localStorage.getItem("datos");
  const datos = datosGuardados ? JSON.parse(datosGuardados) : datosAPI;
  const navigation = useNavigate()
  function reservar(nombreEspacio){
    navigation("/dash",{state:{nombreEspacio}})
  }
  return (
    <section className="container py-4">
      <div className="row row-cols-1 row-cols-md-3 my-5 g-4">
        {datos.map((espacioFisico) => (
          <div className="col" key={espacioFisico.id}>
            <div className="card shadow-lg h-100 border-0 rounded">
              <div className="card-img-top position-relative">
                <img
                  src={espacioFisico.foto}
                  alt={espacioFisico.nombreEspacio}
                  className="img-fluid rounded-top img-fixed"
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h4 className="fw-bold text-primary">
                  {espacioFisico.nombreEspacio}
                </h4>
                <p className="text-muted">{espacioFisico.descripcion}</p>
                <div className="mt-auto">
                  <button onClick={()=>{
                    reservar(espacioFisico.nombreEspacio)
                  }} className="btn btn-primary w-100">Reservar</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
