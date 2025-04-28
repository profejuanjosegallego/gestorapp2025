import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useReservasContext } from "../../../Contexts/ReservasContext";
import { datosAPI } from "../../pages/DashBoard/DatosJSON";
import { DIAS, HORAS } from "../Calendario/datosCalendario";
import { FaCheckCircle, FaTimesCircle, FaTimes } from 'react-icons/fa';
import './FormularioReserva.css';

export const FormularioReserva = () => {
    const { espacioId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { addReserva, estaReservado } = useReservasContext();
    
    // Estado para las alertas personalizadas
    const [showAlert, setShowAlert] = useState({
        visible: false,
        message: '',
        type: '' // 'success' o 'error'
    });

    // Datos pasados desde el calendario
    const { diaSeleccionado, horaSeleccionada } = location.state || {};
    const camposPreseleccionados = diaSeleccionado && horaSeleccionada;

    const [formData, setFormData] = useState({
        responsable: '',
        contacto: '',
        correo: '',
        espacio: espacioId || '',
        dia: diaSeleccionado || '',
        hora: horaSeleccionada || '',
        consideraciones: ''
    });

    // Mostrar alerta personalizada
    const mostrarAlerta = (message, type) => {
        setShowAlert({ visible: true, message, type });
        setTimeout(() => setShowAlert(prev => ({ ...prev, visible: false })), 5000);
    };

    useEffect(() => {
        const espacioNoValido = !espacioId && !formData.espacio;
        if (espacioNoValido) {
            mostrarAlerta('No se ha seleccionado un espacio válido', 'error');
            navigate('/booking');
        }

        const savedData = localStorage.getItem('reservaData');
        if (savedData) {
            try {
                const parsedData = JSON.parse(savedData);
                setFormData(prev => ({
                    ...prev,
                    ...parsedData,
                    espacio: parsedData.espacio || espacioId || prev.espacio,
                    dia: diaSeleccionado || parsedData.dia || prev.dia,
                    hora: horaSeleccionada || parsedData.hora || prev.hora
                }));
            } catch (error) {
                console.error("Error loading form data:", error);
            }
        }
    }, [espacioId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.espacio || !formData.dia || !formData.hora) {
            mostrarAlerta('Por favor complete todos los campos requeridos', 'error');
            return;
        }

        if (estaReservado(formData.espacio, formData.dia, formData.hora)) {
            mostrarAlerta("Este horario ya está reservado", 'error');
            return;
        }

        addReserva(
            formData.espacio,
            formData.dia,
            formData.hora,
            {
                responsable: formData.responsable,
                contacto: formData.contacto,
                correo: formData.correo,
                consideraciones: formData.consideraciones
            }
        );

        localStorage.removeItem('reservaData');
        mostrarAlerta("Reserva realizada exitosamente", 'success');
        setTimeout(() => navigate(`/dash/${formData.espacio}`), 2000);
    };

    const espacioActual = datosAPI.find(e => String(e.id) === String(formData.espacio));

    return (
        <div className="formulario-reserva-container">
            {/* Alerta personalizada */}
            {showAlert.visible && (
                <div className={`custom-alert ${showAlert.type}`}>
                    {showAlert.type === 'success' ? (
                        <FaCheckCircle size={20} />
                    ) : (
                        <FaTimesCircle size={20} />
                    )}
                    <span>{showAlert.message}</span>
                    <button onClick={() => setShowAlert(prev => ({ ...prev, visible: false }))}>
                        <FaTimes size={16} />
                    </button>
                </div>
            )}

            <div className="formulario-reserva">
                <h2>Reservar: {espacioActual?.nombreEspacio}</h2>
                
                <form onSubmit={handleSubmit}>
                    {!espacioId && (
                        <div className="form-group">
                            <label>Espacio:</label>
                            <select
                                name="espacio"
                                value={formData.espacio}
                                onChange={handleChange}
                                required
                                disabled={!!espacioId}
                            >
                                <option value="">Seleccione un espacio...</option>
                                {datosAPI.map(espacio => (
                                    <option key={espacio.id} value={espacio.id}>
                                        {espacio.nombreEspacio}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    <div className="form-group">
                        <label>Día:</label>
                        {camposPreseleccionados ? (
                            <input
                                type="text"
                                name="dia"
                                value={formData.dia}
                                readOnly
                                className="campo-bloqueado"
                            />
                        ) : (
                            <select
                                name="dia"
                                value={formData.dia}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Seleccione un día...</option>
                                {DIAS.map(dia => (
                                    <option key={dia} value={dia}>{dia}</option>
                                ))}
                            </select>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Hora:</label>
                        {camposPreseleccionados ? (
                            <input
                                type="text"
                                name="hora"
                                value={formData.hora}
                                readOnly
                                className="campo-bloqueado"
                            />
                        ) : (
                            <select
                                name="hora"
                                value={formData.hora}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Seleccione una hora...</option>
                                {HORAS.map(hora => (
                                    <option 
                                        key={hora} 
                                        value={hora}
                                        disabled={estaReservado(formData.espacio, formData.dia, hora)}
                                    >
                                        {hora} {estaReservado(formData.espacio, formData.dia, hora) ? "(Reservado)" : ""}
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Responsable:</label>
                        <input
                            type="text"
                            name="responsable"
                            value={formData.responsable}
                            onChange={handleChange}
                            required
                            placeholder="Nombre completo"
                        />
                    </div>

                    <div className="form-group">
                        <label>Contacto:</label>
                        <input
                            type="tel"
                            name="contacto"
                            value={formData.contacto}
                            onChange={handleChange}
                            required
                            placeholder="Teléfono o celular"
                        />
                    </div>

                    <div className="form-group">
                        <label>Correo electrónico:</label>
                        <input
                            type="email"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                            required
                            placeholder="ejemplo@correo.com"
                        />
                    </div>

                    <div className="form-group">
                        <label>Consideraciones especiales:</label>
                        <textarea
                            name="consideraciones"
                            value={formData.consideraciones}
                            onChange={handleChange}
                            placeholder="Detalles adicionales de tu reserva"
                        />
                    </div>

                    <div className="form-actions">
                        <button 
                            type="button" 
                            className="btn-cancelar"
                            onClick={() => navigate(-1)}
                        >
                            Cancelar
                        </button>
                        <button type="submit" className="btn-reservar">
                            Confirmar Reserva
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};