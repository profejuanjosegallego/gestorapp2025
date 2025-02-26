import React, { useState } from "react";
import "./Booking.css";

const Booking = () => {
  const [selectedPart, setSelectedPart] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const parts = [
    { name: "Turbo", price: 500 }, { name: "ECU", price: 300 }, { name: "Escape", price: 200 },
    { name: "Filtro", price: 100 }, { name: "Intercooler", price: 450 }, { name: "Radiador", price: 350 },
    { name: "Bomba de Combustible", price: 275 }, { name: "Injectores", price: 320 }, { name: "Cuerpo de Aceleración", price: 410 },
    { name: "Suspensión Regulable", price: 600 }, { name: "Kit de Embrague", price: 550 }, { name: "Árbol de Levas", price: 400 },
    { name: "Barras Estabilizadoras", price: 380 }, { name: "Frenos Brembo", price: 800 }, { name: "Pastillas Cerámicas", price: 350 },
    { name: "Llantas de Alto Rendimiento", price: 900 }, { name: "Diferencial de Deslizamiento", price: 650 },
    { name: "Alerón de Fibra de Carbono", price: 750 }, { name: "Body Kit Deportivo", price: 1200 },
    { name: "Capó de Fibra de Carbono", price: 1300 }, { name: "Splitter Frontal", price: 450 },
    { name: "Difusor Trasero", price: 550 }, { name: "Volante Deportivo", price: 400 }, { name: "Asientos de Competición", price: 1000 },
    { name: "Arneses de Seguridad", price: 300 }, { name: "Roll Cage", price: 1500 }, { name: "Kit de Luces LED", price: 250 },
    { name: "Parrilla Delantera Personalizada", price: 400 }, { name: "Filtro de Aire de Alto Flujo", price: 180 }
  ];

  const handlePartChange = (event) => {
    const selected = parts.find((p) => p.name === event.target.value);
    setSelectedPart(selected);
    calculateTotal(selected?.price, quantity);
  };

  const handleQuantityChange = (event) => {
    const qty = parseInt(event.target.value, 10);
    setQuantity(qty);
    calculateTotal(selectedPart?.price, qty);
  };

  const handleReserve = () => {
    if (!selectedPart || !phone || !email || !address) {
      setMessage("⚠️ Por favor, completa todos los campos.");
      return;
    }
    setMessage(`✅ ¡Tus repuestos han sido reservados!`);
  };

  const calculateTotal = (price, qty) => {
    if (price && qty) {
      setTotalPrice(price * qty);
    }
  };

  return (
    <div className="booking-container">
      <h2 className="booking-title">Reservar Repuestos</h2>
      <form className="booking-form">
        <label>Selecciona el repuesto:</label>
        <select onChange={handlePartChange}>
          <option value="">-- Seleccionar --</option>
          {parts.map((part) => (
            <option key={part.name} value={part.name}>
              {part.name} - ${part.price}
            </option>
          ))}
        </select>

        <label>Cantidad:</label>
        <input type="number" min="1" value={quantity} onChange={handleQuantityChange} />

        <label>Teléfono:</label>
        <input type="tel" placeholder="Tu número de teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label>Correo Electrónico:</label>
        <input type="email" placeholder="Tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Dirección de Envío:</label>
        <input type="text" placeholder="Tu dirección" value={address} onChange={(e) => setAddress(e.target.value)} />

        <button type="button" onClick={handleReserve}>Reservar</button>
      </form>

      {totalPrice > 0 && <p className="total-price">💰 Precio Total: ${totalPrice}</p>}
      {message && <p className="booking-message">{message}</p>}
    </div>
  );
};

export default Booking;
