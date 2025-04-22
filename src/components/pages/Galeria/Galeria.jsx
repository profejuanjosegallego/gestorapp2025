import { useState,useEffect } from "react"
import { consultarImagenes } from "../../../services/serviciosGaleria"

export function Galeria(){

    const [datosAPI, setDatosApi]=useState(null)
    const [cargando, setCargando]=useState(false)

    useEffect(()=>{
        consultarImagenes()
        .then((datos)=>{
            setDatosApi(datos)
            setCargando(true)
            console.log(datos)
        })
        .catch((datos)=>{
            console.log(datos)
            setCargando(false)
        })
    },[])

    if(cargando){
        return(
            <>
                <h1>Galeria</h1>
                <hr />

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-3">

                    {datosAPI.photos.map((foto)=>{
                        return(

                            <div className="col">
                                <div className="card h-100 shadow p-5">
                                    <img src={foto.src.landscape} alt="" />
                                    <p>{foto.alt}</p>
                                </div>
                            </div>
                        )
                    })}

                    </div>
                </div>

                
            </>
        )
    }else{
        return(
            <>
                <h1>Estamos cargando...</h1>
            </>
        )
    }


}