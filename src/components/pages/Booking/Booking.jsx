import { datosAPI } from "../DashBoard/DatosJSON";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

export const Booking = () => {
    const navigate = useNavigate(); // Hook para navegar

    const handleReservar = () => {
        navigate("/dashboard"); // Redirige al Dashboard
    };

    return (
        <>
            <section className="container">
                <section className="row row-cols-1 row-cols-md-3 g-3">
                    {datosAPI.map(function (espacioFisico) {
                        return (
                            <section className="col" key={espacioFisico.id}>
                                <div className="card shadow h-100 p-4">
                                    {/* Foto en la parte superior */}
                                    <div className="row mb-3">
                                        <div className="col-12 text-center">
                                            <img
                                                src={espacioFisico.foto}
                                                className="img-fluid rounded"
                                                
                                            />

                                            
                                        </div>
                                    </div>
                                    {/* Información debajo */}
                                    <div className="row">
                                        <div className="col-12">
                                            <h3 className="fw-bold">
                                                {espacioFisico.nombreEspacio}
                                            </h3>
                                            <p>{espacioFisico.descripcion}</p>
                                            <button
                                                className="btn btn-primary"
                                                onClick={handleReservar} // Llama al manejador
                                            >
                                                Reservar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </section>
            </section>
        </>
    );
};