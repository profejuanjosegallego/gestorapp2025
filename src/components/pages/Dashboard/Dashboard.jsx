import { useLocation } from "react-router-dom";
import { Calendario } from "../../common/Calendario/Calendario";
import "./Dashboard.css";

export const Dashboard = () => {
  const location = useLocation();
  const espacioSeleccionado = location.state?.espacio;

  // Verificar si el id existe antes de continuar
  if (!espacioSeleccionado) {
    return <div>Id no proporcionado</div>; // Muestra un mensaje si no se pasa el ID
  }

  // Verificar si el espacio fue encontrado
  if (!espacioSeleccionado) {
    return <div>Espacio no encontrado</div>;
  }

  return (
    <>
      <br /><br /><br />
      {espacioSeleccionado && (
        <div className="text-center text-muted mb-3">
          <h2>Estás Reservando: {espacioSeleccionado.nombreEspacio}</h2>
          <p>{espacioSeleccionado.descripcion}</p>
          <p>Capacidad: {espacioSeleccionado.capacidad}</p>
        </div>
      )}
      <div className="container my-5">
        <Calendario />
      </div>
    </>
  );
};

export default Dashboard;
