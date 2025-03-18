import { useState } from "react";
import { Link } from "react-router-dom";

export const Prueba = () => {
  let nombre = "Esteban Garcia";

  // Estado para el contador
  const [contador, setContador] = useState(0);

  return (
    <div className="container mt-5">
      <h1>Hola, {nombre} 👋</h1>
      <h2>Contador: {contador}</h2>

      <div>
        <button
          className="btn btn-primary my-2 me-2"
          onClick={() => setContador(contador + 1)}
        >
          Incrementar
        </button>

        <button
          className="btn btn-danger my-2"
          onClick={() => setContador(contador - 1)}
        >
          Decrementar
        </button>
      </div>

      {/* Un enlace de ejemplo */}
      <Link className="btn btn-secondary mt-4" to="/">
        Volver al Inicio
      </Link>
    </div>
  );
};
