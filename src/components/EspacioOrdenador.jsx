// src/components/EspacioOrdenador.jsx
import React from 'react';
import { ArrowUpDown } from 'lucide-react';

const EspacioOrdenador = ({ ordenActual, setOrdenActual }) => {
    const opcionesOrden = [
        { value: 'default', label: 'Por defecto' },
        { value: 'nombre-asc', label: 'Nombre (A-Z)' },
        { value: 'nombre-desc', label: 'Nombre (Z-A)' },
        { value: 'capacidad-asc', label: 'Capacidad (menor a mayor)' },
        { value: 'capacidad-desc', label: 'Capacidad (mayor a menor)' },
        { value: 'horarios-asc', label: 'Menos horarios disponibles' },
        { value: 'horarios-desc', label: 'Más horarios disponibles' },
    ];

    return (
        <div className="flex items-center justify-end mb-4">
            <div className="flex items-center">
                <ArrowUpDown size={18} className="mr-2 text-gray-500" />
                <label htmlFor="ordenar" className="text-sm font-medium text-gray-700 mr-2">
                    Ordenar por:
                </label>
                <select
                    id="ordenar"
                    value={ordenActual}
                    onChange={(e) => setOrdenActual(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {opcionesOrden.map((opcion) => (
                        <option key={opcion.value} value={opcion.value}>
                            {opcion.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default EspacioOrdenador;