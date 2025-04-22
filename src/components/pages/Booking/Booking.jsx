import { datosJSON } from "../DashBoard/DatosJSON";
import "./Booking.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";


export const Booking = () => {

    const navegador = useNavigate()

    return (
        <div className="container mt-5">
            <br /><br /><br />
            <h2 className="mb-4">Reserva tu espacio</h2>
            <div className="row">
                {datosJSON.map(({ id, name, fotos, description }) => {
                    return (
                        <div className="col-md-4 mb-4" key={id}>
                            <div className="card h-100 shadow rounded-4">
                                <img src={fotos} className="card-img-top" alt={name} />
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{description}</p>
                                    <Link
                                        to={`/dashboard#${id}`}
                                        className="btn btn-primary w-100 rounded-pill"
                                        id="button-booking"
                                    >
                                        Ver disponibilidad
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <br /><br /><br />
        </div>
    );
};
