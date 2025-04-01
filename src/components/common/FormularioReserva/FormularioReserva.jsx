import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './FormularioReserva.css';

export function FormularioReserva() {
    // Estado inicial con valores recuperados de localStorage
    const initialFormState = {
        responsable: '',
        contacto: '',
        correo: '',
        apartamento: '',
        dia: '',
        hora: '',
        consideraciones: ''
    };

    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    // Cargar datos persistentes al montar el componente
    useEffect(() => {
        const loadSavedData = () => {
            try {
                const savedData = localStorage.getItem('reservaData');
                if (savedData) {
                    const parsedData = JSON.parse(savedData);
                    if (parsedData && typeof parsedData === 'object') {
                        setFormData(prev => ({
                            ...initialFormState,
                            ...parsedData
                        }));
                    }
                }
            } catch (error) {
                console.error("Error al cargar datos guardados:", error);
                localStorage.removeItem('reservaData');
            }
        };

        loadSavedData();
    }, []);

    // Guardar datos en localStorage cuando cambian (con debounce)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (Object.keys(formData).length > 0) {
                try {
                    localStorage.setItem('reservaData', JSON.stringify(formData));
                } catch (error) {
                    console.error("Error al guardar datos:", error);
                }
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [formData]);

    // Validación mejorada
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.responsable.trim()) {
            newErrors.responsable = 'Por favor ingrese el nombre del responsable';
        }
        
        if (!formData.contacto.trim()) {
            newErrors.contacto = 'El número de contacto es requerido';
        } else if (!/^\d{10}$/.test(formData.contacto)) {
            newErrors.contacto = 'Ingrese un número de 10 dígitos';
        }
        
        if (!formData.correo.trim()) {
            newErrors.correo = 'El correo electrónico es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
            newErrors.correo = 'Ingrese un correo válido (ejemplo@dominio.com)';
        }
        
        if (!formData.apartamento) {
            newErrors.apartamento = 'El número de apartamento es requerido';
        } else if (formData.apartamento < 1) {
            newErrors.apartamento = 'Ingrese un número válido';
        }
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (!formData.dia) {
            newErrors.dia = 'Seleccione una fecha';
        } else if (new Date(formData.dia) < today) {
            newErrors.dia = 'La fecha no puede ser anterior a hoy';
        }
        
        if (!formData.hora) {
            newErrors.hora = 'Seleccione una hora';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'apartamento' && value && !/^\d*$/.test(value)) {
            return;
        }
        
        if (name === 'contacto' && value && !/^\d*$/.test(value)) {
            return;
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setIsLoading(true);
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            localStorage.removeItem('reservaData');
            setFormData(initialFormState);
            
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 5000);
            
        } catch (error) {
            console.error('Error al enviar:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClearForm = () => {
        if (window.confirm('¿Está seguro que desea limpiar el formulario?')) {
            localStorage.removeItem('reservaData');
            setFormData(initialFormState);
            setErrors({});
        }
    };

    return (
        <motion.section 
            className="formulario-reserva-container"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className="formulario-reserva" variants={itemVariants}>
                <div className="form-header">
                    <motion.h2 
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <i className="bi bi-calendar2-check-fill me-2"></i>
                        Registra tu reserva
                    </motion.h2>
                    <p className="text-muted">
                        <i className="bi bi-info-circle-fill me-2"></i>
                        Complete todos los campos requeridos (*)
                    </p>
                    <hr />
                </div>
                
                <AnimatePresence>
                    {isSubmitted && (
                        <motion.div 
                            className="alert alert-success alert-dismissible fade show"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ type: "spring" }}
                        >
                            <i className="bi bi-check-circle-fill me-2"></i>
                            ¡Reserva enviada con éxito! Recibirá un correo de confirmación.
                            <button 
                                type="button" 
                                className="btn-close" 
                                onClick={() => setIsSubmitted(false)}
                            ></button>
                        </motion.div>
                    )}
                </AnimatePresence>
                
                <form onSubmit={handleSubmit}>
                    {/* Campo Responsable */}
                    <motion.div 
                        className={`form-group ${errors.responsable ? 'has-error' : ''}`}
                        variants={itemVariants}
                    >
                        <label htmlFor="responsable" className="form-label">
                            <i className="bi bi-person-fill input-icon"></i>
                            Responsable de la Reserva *
                        </label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-person-badge"></i>
                            </span>
                            <input
                                type="text"
                                id="responsable"
                                name="responsable"
                                className="form-control"
                                placeholder="Nombre completo"
                                value={formData.responsable}
                                onChange={handleChange}
                            />
                        </div>
                        <AnimatePresence>
                            {errors.responsable && (
                                <motion.span 
                                    className="error-message"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    <i className="bi bi-exclamation-triangle-fill me-1"></i>
                                    {errors.responsable}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    
                    {/* Campo Contacto */}
                    <motion.div 
                        className={`form-group ${errors.contacto ? 'has-error' : ''}`}
                        variants={itemVariants}
                    >
                        <label htmlFor="contacto" className="form-label">
                            <i className="bi bi-telephone-fill input-icon"></i>
                            Contacto *
                        </label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-phone"></i>
                            </span>
                            <input
                                type="tel"
                                id="contacto"
                                name="contacto"
                                className="form-control"
                                placeholder="Número de teléfono (10 dígitos)"
                                value={formData.contacto}
                                onChange={handleChange}
                                maxLength="10"
                            />
                        </div>
                        <AnimatePresence>
                            {errors.contacto && (
                                <motion.span 
                                    className="error-message"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    <i className="bi bi-exclamation-triangle-fill me-1"></i>
                                    {errors.contacto}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    
                    {/* Campo Correo */}
                    <motion.div 
                        className={`form-group ${errors.correo ? 'has-error' : ''}`}
                        variants={itemVariants}
                    >
                        <label htmlFor="correo" className="form-label">
                            <i className="bi bi-envelope-fill input-icon"></i>
                            Correo Electrónico *
                        </label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-at"></i>
                            </span>
                            <input
                                type="email"
                                id="correo"
                                name="correo"
                                className="form-control"
                                placeholder="correo@ejemplo.com"
                                value={formData.correo}
                                onChange={handleChange}
                            />
                        </div>
                        <AnimatePresence>
                            {errors.correo && (
                                <motion.span 
                                    className="error-message"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    <i className="bi bi-exclamation-triangle-fill me-1"></i>
                                    {errors.correo}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    
                    {/* Campo Apartamento */}
                    <motion.div 
                        className={`form-group ${errors.apartamento ? 'has-error' : ''}`}
                        variants={itemVariants}
                    >
                        <label htmlFor="apartamento" className="form-label">
                            <i className="bi bi-building-fill input-icon"></i>
                            Apartamento *
                        </label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-123"></i>
                            </span>
                            <input
                                type="number"
                                id="apartamento"
                                name="apartamento"
                                className="form-control"
                                placeholder="Número de apartamento"
                                value={formData.apartamento}
                                onChange={handleChange}
                                min="1"
                            />
                        </div>
                        <AnimatePresence>
                            {errors.apartamento && (
                                <motion.span 
                                    className="error-message"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    <i className="bi bi-exclamation-triangle-fill me-1"></i>
                                    {errors.apartamento}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    
                    {/* Campos Fecha y Hora */}
                    <motion.div className="row" variants={itemVariants}>
                        <div className={`col-md-6 form-group ${errors.dia ? 'has-error' : ''}`}>
                            <label htmlFor="dia" className="form-label">
                                <i className="bi bi-calendar2-week-fill input-icon"></i>
                                Día *
                            </label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-calendar-date"></i>
                                </span>
                                <input
                                    type="date"
                                    id="dia"
                                    name="dia"
                                    className="form-control"
                                    value={formData.dia}
                                    onChange={handleChange}
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>
                            <AnimatePresence>
                                {errors.dia && (
                                    <motion.span 
                                        className="error-message"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                    >
                                        <i className="bi bi-exclamation-triangle-fill me-1"></i>
                                        {errors.dia}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>
                        
                        <div className={`col-md-6 form-group ${errors.hora ? 'has-error' : ''}`}>
                            <label htmlFor="hora" className="form-label">
                                <i className="bi bi-clock-fill input-icon"></i>
                                Hora *
                            </label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-watch"></i>
                                </span>
                                <input
                                    type="time"
                                    id="hora"
                                    name="hora"
                                    className="form-control"
                                    value={formData.hora}
                                    onChange={handleChange}
                                />
                            </div>
                            <AnimatePresence>
                                {errors.hora && (
                                    <motion.span 
                                        className="error-message"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                    >
                                        <i className="bi bi-exclamation-triangle-fill me-1"></i>
                                        {errors.hora}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                    
                    {/* Campo Consideraciones */}
                    <motion.div className="form-group" variants={itemVariants}>
                        <label htmlFor="consideraciones" className="form-label">
                            <i className="bi bi-chat-square-text-fill input-icon"></i>
                            Consideraciones Especiales
                        </label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-pencil-square"></i>
                            </span>
                            <textarea
                                id="consideraciones"
                                name="consideraciones"
                                className="form-control"
                                rows="3"
                                placeholder="Alguna consideración especial..."
                                value={formData.consideraciones}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </motion.div>
                    
                    {/* Botones de acción */}
                    <motion.div 
                        className="d-flex gap-2 mt-4"
                        variants={itemVariants}
                    >
                        <motion.button 
                            type="submit" 
                            className="btn btn-primary flex-grow-1 submit-btn"
                            disabled={isLoading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isLoading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                    Procesando...
                                </>
                            ) : (
                                <>
                                    <i className="bi bi-send-check-fill me-2"></i>
                                    Confirmar Reserva
                                </>
                            )}
                        </motion.button>
                        
                        <motion.button 
                            type="button" 
                            className="btn btn-outline-secondary"
                            onClick={handleClearForm}
                            disabled={isLoading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <i className="bi bi-trash-fill me-2"></i>
                            Limpiar
                        </motion.button>
                    </motion.div>
                </form>
            </motion.div>
            
            <motion.div 
                className="form-image"
                variants={itemVariants}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <img 
                    src="../../../../src/assets/img/reserva.webp" 
                    alt="Reserva de espacios" 
                    className="img-fluid rounded shadow"
                    onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
                    }}
                />
            </motion.div>
        </motion.section>
    );
}