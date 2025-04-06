import './prueba.css'
import { useState,useEffect } from 'react'

export const Prueba = ()=>{
    const[getContador,setContador]=useState(0)
    //let nombre = "david"
    let contador = 0 
    function sumar(){
        setContador(getContador+1)
    }

    useEffect(()=>{
        alert("ahhhh cambiaron el contador")
    },[getContador])

    function restar(){
        setContador(getContador-1)
    }
    return(
        //fragmento
        <>
        <h2>El contador esta en : {getContador}</h2>
        <button className="btn btn-primary my-5" onClick={sumar}>Incrementar</button><button onClick={restar} className="btn btn-danger my-5">Decrementar</button>
        </>
    )
}