import "./Dashboard.css"
import { Calendar } from "../../common/Calendar/Calendar.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import { datosJSON } from "./DatosJSON.js";

export const DashBoard = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "")
            const element = document.getElementById(id)
            if(element){
                setTimeout(() => {
                    element.scrollIntoView({ behavior : "smooth" })
                }, 100)
            }
        }
    }, [location])

    return (

       <div className="container mt-5 pt-5">
        <h2 className="text-center mb-4">Calendario de reservas</h2>
        {datosJSON.map(({id, name}) => (
            <Calendar key={id} nombreEspacio={name} />
        ))}

       </div>
    )
}
