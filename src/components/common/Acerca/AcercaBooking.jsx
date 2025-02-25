import React, { useState } from 'react';
import './BookingStyles.css';

export function AcercaBooking(){
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        zone: '',
        date: '',
        time: '',
    });

    const zones = [
        { value: 'salon', label: 'Salón Comunal' },
        { value: 'gimnasio', label: 'Gimnasio' },
        { value: 'piscina', label: 'Piscina' },
        { value: 'parque', label: 'Parque Infantil' },
        { value: 'jardines', label: 'Jardines y Áreas Verdes' },
        { value: 'sala', label: 'Sala de Estudio' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reserva enviada:', formData);
        // Aquí puedes agregar la lógica para enviar el formulario
    };

    return (
       
        <div>
            //
            <h1 className='title'>Reservas de Zonas Comunes</h1>
            <p className='subtitle'>Utiliza el siguiente formulario para solicitar una reserva.</p>
            <img className="responsive-image" src="../../../../src/assets/img/banner2.jpg" alt="imagen" />
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input type="text" name="name" onChange={handleChange} required />

                <label>Correo Electrónico:</label>
                <input type="email" name="email" onChange={handleChange} required />

                <label>Seleccione la Zona Común:</label>
                <select name="zone" onChange={handleChange} required>
                    <option value="">--Seleccione--</option>
                    {zones.map(zone => (
                        <option key={zone.value} value={zone.value}>{zone.label}</option>
                    ))}
                </select>

                <label>Fecha de Reserva:</label>
                <input type="date" name="date" onChange={handleChange} required />

                <label>Hora de Reserva:</label>
                <input type="time" name="time" onChange={handleChange} required />

                <button type="submit">Enviar Solicitud de Reserva</button>
            </form>

          
        </div>
    );
};
