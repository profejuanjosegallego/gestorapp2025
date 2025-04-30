import { useState, useEffect } from "react";
import { consultarImagenes } from "../../../services/serviciosGaleria";

export function Galeria() {
    const [datosAPI, setDatosAPI] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [busqueda, setBusqueda] = useState(""); 

    useEffect(() => {
        if (busqueda.trim() === "") return; 

        const obtenerImagenes = async () => {
            setCargando(true);
            try {
                const datos = await consultarImagenes(busqueda);
                setDatosAPI(datos);
                setCargando(false);
                console.log(datos);
            } catch (error) {
                console.log(error);
                setCargando(false);
            }
        };

        obtenerImagenes();
    }, [busqueda]);

    const handleBusquedaChange = (event) => {
        setBusqueda(event.target.value);
    };

    return (
        <>
            <br />
            <br />
            <br />
            <h1>Galeria</h1>
            <hr />

            {/* Input de búsqueda */}
            <input
                type="text"
                placeholder="Buscar imágenes..."
                value={busqueda}
                onChange={handleBusquedaChange}
                className="form-control mb-4"
            />

            {/* Mostrar mientras carga */}
            {cargando ? (
                <h1>Estamos cargando...</h1>
            ) : (
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        {datosAPI && datosAPI.photos.map((foto, index) => (
                            <div className="col" key={index}>
                                <div className="card h-100 shadow p-5">
                                    <img src={foto.src.landscape} alt={foto.alt} />
                                    <p>{foto.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
