import { useEffect,useState } from "react";
import {calendario} from "./datosCalendario"

export function Calendario(){

    const[dias, setDias]=useState([])
    const[horas, setHoras]=useState([])

    useEffect(()=>{
        setDias(calendario[0])
        setHoras(calendario[1])
    })

    //funcion que capture los dos valors (hora y fecha)


    return(

        <>

            <table className="table">
                <thead>
                    <tr>
                        <th>Hora</th>
                        {
                            dias.map((dia)=>{
                                return <th key={dia}>{dia}</th>
                            })
                        }
                    </tr>

                </thead>
                <tbody>

                    {
                        horas.map((hora)=>{
                            return <tr key={hora}>
                                <td>{hora}</td>
                                {
                                    dias.map((dia)=>{
                                        return <td key={dia}>
                                            <button className="btn btn-success">reservar</button>
                                        </td>
                                    })
                                }
                            </tr>
                        })
                    }

                </tbody>
            </table>
        
        </>
    )

}