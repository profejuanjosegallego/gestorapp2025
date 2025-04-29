/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react"

export function Catalogo() {


    const [datosAPI, setDatosApi] = useState(null)
    const [estadoCarga, setEstadoCarga] = useState(false)

    useEffect(() => {


        fetch("https://api.pexels.com/v1/search?query=car&per_page=10", {
            method: "GET",
            headers: { Authorization: "MpN28GfGH7whbVLIphb28M2wybmVJffkG1ynsJRUOKfqqd6EyxNZQXv7" }
        })
            .then(function (respuesta) {
                return respuesta.json()
            })
            .then(function (respuesta) {
                console.log(respuesta.photos)
                setDatosApi(respuesta.photos)
                setEstadoCarga(true)
            })


    }, [])


    if (estadoCarga) {

        return (


            <>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4">
                        {
                            datosAPI.map(function (foto) {
                                return (
                                    <div className="col">
                                        <div className="card">
                                            <img src={foto.src.landscape} alt="" />
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </div>
                </div>


            </>
        )

    } else {
        return (
            <>
                <h1>Cargando..</h1>
            </>
        )
    }




}