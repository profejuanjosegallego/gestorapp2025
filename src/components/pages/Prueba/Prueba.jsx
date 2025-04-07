import React, { useState, useEffect } from 'react';

export const Prueba = () => {

    // let nombre = "carlos";
    const[getContador,setContador]=useState(0)

let contador = 0;

useEffect(() => {
    alert("ahhhhh cambio el contador")
}, [getContador]);

    function sumar() {  
        setContador(getContador +1)
      }
    
    function restar() {
        setContador(getContador-1)
    }
  
    return (
    <>
        <h2>el contador esta en: {getContador} </h2>
        <button onClick={sumar} className="btn btn-primary my-5" >incrementar</button>
        <button onClick={restar} className="btn btn-danger my-5"> decrementar</button>
    </>
  );
}