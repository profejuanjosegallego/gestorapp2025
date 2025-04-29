import { useState } from "react";
import fondoVideo from "/src/assets/Videos/VID-20250428-WA0014.mp4";
import "./Booking.css";

const Booking = () => {
  const [selectedPart, setSelectedPart] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const parts = [
    { name: "Turbo", price: 2500000 },
    { name: "ECU", price: 1800000 },
    { name: "Escape deportivo", price: 1200000 },
    { name: "Filtro de alto flujo", price: 450000 },
    { name: "Inyectores de alto desempeño", price: 700000 },
    { name: "Intercooler", price: 950000 },
    { name: "Bujías de Iridio", price: 150000 },
    { name: "Radiador de aluminio", price: 800000 },
    { name: "Embrague reforzado", price: 1300000 },
    { name: "Bobinas de encendido de alto rendimiento", price: 550000 },
    { name: "Árbol de levas performance", price: 2200000 },
    { name: "Pistones forjados", price: 3000000 },
    { name: "Bielas forjadas", price: 2700000 },
    { name: "Válvulas de escape de titanio", price: 1600000 },
    { name: "Kit Turbo Completo", price: 8000000 },
    { name: "Kit Suspensión Coilover", price: 6000000 },
    { name: "Kit Big Brake (frenos de alto rendimiento)", price: 7500000 },
    { name: "Kit de Embrague Racing", price: 4000000 },
    { name: "Kit Repro Stage 1", price: 1200000 },
    { name: "Kit Repro Stage 2", price: 2500000 },
    { name: "Kit Repro Stage 3", price: 4500000 },
    { name: "Kit de Distribución reforzada", price: 2200000 },
    { name: "Kit de Admisión directa", price: 1300000 },
    { name: "Volante deportivo", price: 900000 },
    { name: "Pedales Racing en aluminio", price: 250000 },
    { name: "Barra estabilizadora delantera", price: 700000 },
    { name: "Barra estabilizadora trasera", price: 650000 },
    { name: "Llantas forjadas ultralivianas (juego x4)", price: 8500000 },
    { name: "Escape Inoxidable Catback", price: 3500000 },
    { name: "Downpipe deportivo", price: 1800000 },
    { name: "Tapicería en Alcántara para interiores", price: 5000000 },
    { name: "Luces LED y Xenón", price: 600000 },
    { name: "Splitter delantero en fibra de carbono", price: 1200000 },
    { name: "Difusor trasero en fibra de carbono", price: 1400000 },
    { name: "Spoiler trasero ajustable", price: 1700000 },
    { name: "Manómetros (presión turbo, AFR, temp aceite)", price: 800000 }
  ];

  const handlePartChange = (e) => {
    const selected = parts.find(p => p.name === e.target.value);
    setSelectedPart(selected);
  };

  const handleQuantityChange = (e) => {
    const qty = Math.max(1, parseInt(e.target.value, 10) || 1);
    setQuantity(qty);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();

    if (!selectedPart) {
      setMessage("⚠️ Selecciona un repuesto antes de agregarlo.");
      return;
    }

    const existing = cart.find(item => item.name === selectedPart.name);
    let updatedCart;

    if (existing) {
      updatedCart = cart.map(item =>
        item.name === selectedPart.name
          ? {
              ...item,
              quantity: item.quantity + quantity,
              subtotal: (item.quantity + quantity) * item.price
            }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          name: selectedPart.name,
          price: selectedPart.price,
          quantity: quantity,
          subtotal: quantity * selectedPart.price
        }
      ];
    }

    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
    setSelectedPart("");
    setQuantity(1);
    setMessage("");
  };

  const calculateTotalPrice = (items) => {
    const total = items.reduce((sum, item) => sum + item.subtotal, 0);
    setTotalPrice(total);
  };

  const handleRemoveItem = (name) => {
    const updatedCart = cart.filter(item => item.name !== name);
    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
  };

  const handleReserve = () => {
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(phone) || !emailRegex.test(email) || !address.trim() || cart.length === 0) {
      setMessage("⚠️ Completa todos los campos correctamente.");
      return;
    }

    setMessage("✅ ¡Tus repuestos han sido reservados!");
    setCart([]);
    setTotalPrice(0);
    setPhone("");
    setEmail("");
    setAddress("");
  };

  const formatPrice = (price) => {
    return price.toLocaleString("es-CO", { style: "currency", currency: "COP" });
  };

  return (
    <div className="booking-container">
      <h2 className="booking-title">Reservar Repuestos</h2>

      <div className="booking-content animate-fadeInUp">
        <div className="video-section">
          <video className="video-parcial" autoPlay>
            <source src={fondoVideo} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>

        <div className="form-section">
          <label>Selecciona el repuesto:</label>
          <select className="selector-repuestos" onChange={handlePartChange} value={selectedPart?.name || ""}>
            <option value="">-- Seleccionar --</option>
            {parts.map(part => (
              <option key={part.name} value={part.name}>
                {part.name} - {formatPrice(part.price)}
              </option>
            ))}
          </select>

          <label>Cantidad:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />

          <button onClick={handleAddToCart}>Agregar al carrito</button>

          {cart.length > 0 && (
            <div className="cart-container">
              <h3>Repuestos Seleccionados:</h3>
              <ul>
                {cart.map(item => (
                  <li key={item.name} className="cart-item">
                    <span>{item.name} ({item.quantity} x {formatPrice(item.price)})</span>
                    <span>{formatPrice(item.subtotal)}</span>
                    <button onClick={() => handleRemoveItem(item.name)}>Eliminar</button>
                  </li>
                ))}
              </ul>
              <p className="total-price">Total: {formatPrice(totalPrice)}</p>
            </div>
          )}

          <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
            <label>Teléfono:</label>
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Ej: 3101234567" />

            <label>Correo electrónico:</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Ej: correo@dominio.com" />

            <label>Dirección:</label>
            <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Dirección de entrega" />

            <button type="button" onClick={handleReserve} disabled={cart.length === 0}>Reservar</button>
          </form>

          {message && <p className="booking-message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Booking;
