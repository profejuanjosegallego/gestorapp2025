import { useState } from "react";
import "./ReservaForm.css";

export function ReservaForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    identificacion: "",
    telefono: "",
    cabana: "",
    fecha: "",
    hora: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reserva realizada:", formData);
    alert("Reserva realizada con éxito");
  };

  return (
    <div className="reserva-form-container">
      <h2>Reservar Cabaña</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre Completo:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Número de Identificación:</label>
          <input type="text" name="identificacion" value={formData.identificacion} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Teléfono:</label>
          <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Cabaña:</label>
          <select name="cabana" value={formData.cabana} onChange={handleChange} required>
            <option value="">Selecciona una cabaña</option>
            <option value="El Encanto">El Encanto</option>
            <option value="Vista Hermosa">Vista Hermosa</option>
            <option value="Mirador de Valle">Mirador de Valle</option>
            <option value="El Bosque">El Bosque</option>
            <option value="Laguna Azul">Laguna Azul</option>
          </select>
        </div>

        <div className="form-group">
          <label>Fecha:</label>
          <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Hora:</label>
          <input type="time" name="hora" value={formData.hora} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-success">Reservar</button>
      </form>
    </div>
  );
}
