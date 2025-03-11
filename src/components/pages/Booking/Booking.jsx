import { datosAPI } from "../DashBoard/DatosJSON"


export const Booking=()=>{


    return(
    
        <>

            <section className="container">
                <section className="row row-cols-1 row-cols-md-1 g-3">
                    {
                        datosAPI.map(function(espacioFisico){
                            return(
                                <section className="col">
                                    <div className="card shadow h-100 p-4">
                                        <div className="row">
                                            <div className="col-6">
                                                <p>SIN FOTO</p>
                                            </div>
                                            <div className="col-6">
                                                <h3 className="fw-bold">
                                                    {espacioFisico.nombreEspacio}
                                                </h3>
                                                <p>
                                                    {espacioFisico.descripcion}
                                                </p>
                                                <button className="btn btn-primary">Resrevar</button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )
                        })
                    }
                </section>
            </section>
            
        </>
    )
    
    }