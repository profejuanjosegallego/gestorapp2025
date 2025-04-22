import {Banner} from "../../common/Banner/Banner"
import {Acerca} from "../../common/Acerca/Acerca"
import { consultarImagenes } from "../../../services/serviciosGaleria"

import { useState, useEffect } from "react"

export function Home(){

    const[datosApi, setDatosApi]=useState(null)
    const[cargando, setCargando]=useState(false)

    useEffect(() =>{
        consultarImagenes()
        .then((datos)=>{
            setDatosApi(datos)
            setCargando(true)
        })
        .catch((mensajeError)=>{
            console.log(mensajeError)
            setCargando(false)
        })
    }, [])


    if(cargando){
        return(

            <>
                <Banner></Banner>
                <Acerca></Acerca>
                <div className="container">
                    <div className="row cols-1 row-cols-md-3 g-3">
                        {
                            datosApi.photos.map((foto)=>{
                                return(
                                    <div className="col">
                                        <div className="card h-100 shadow p-3">
                                            <img src={foto.src.landscape} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    
    }
    else{
        <>
            <h1>Cargando....</h1>
        </>
    }

}