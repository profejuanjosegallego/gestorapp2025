// src/components/EspacioBuscador.jsx
import React from 'react';
import { Search, Filter } from 'lucide-react';

const EspacioBuscador = ({ filters, setFilters }) => {
    const diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleDayChange = (dia) => {
        setFilters(prev => {
            const newDias = prev.dias.includes(dia)
                ? prev.dias.filter(d => d !== dia)
                : [...prev.dias, dia];
            return { ...prev, dias: newDias };
        });
    };

    const handleReset = () => {
        setFilters({
            nombre: '',
            capacidadMin: '',
            capacidadMax: '',
            dias: [],
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Search size={20} className="mr-2" />
                Buscar espacios
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Filtro por nombre */}
                <div className="mb-3">
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={filters.nombre}
                        onChange={handleInputChange}
                        placeholder="Buscar por nombre..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Filtro por capacidad mínima */}
                <div className="mb-3">
                    <label htmlFor="capacidadMin" className="block text-sm font-medium text-gray-700 mb-1">
                        Capacidad mínima
                    </label>
                    <input
                        type="number"
                        id="capacidadMin"
                        name="capacidadMin"
                        value={filters.capacidadMin}
                        onChange={handleInputChange}
                        placeholder="Mínimo de personas"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Filtro por capacidad máxima */}
                <div className="mb-3">
                    <label htmlFor="capacidadMax" className="block text-sm font-medium text-gray-700 mb-1">
                        Capacidad máxima
                    </label>
                    <input
                        type="number"
                        id="capacidadMax"
                        name="capacidadMax"
                        value={filters.capacidadMax}
                        onChange={handleInputChange}
                        placeholder="Máximo de personas"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {/* Filtro por días disponibles */}
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Calendar size={16} className="mr-1" />
                    Días disponibles
                </label>
                <div className="flex flex-wrap gap-2">
                    {diasSemana.map(dia => (
                        <button
                            key={dia}
                            type="button"
                            onClick={() => handleDayChange(dia)}
                            className={`px-3 py-1 text-sm rounded-full ${filters.dias.includes(dia)
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            {dia.charAt(0).toUpperCase() + dia.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Botón para resetear filtros */}
            <div className="mt-4 flex justify-end">
                <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Limpiar filtros
                </button>
            </div>
        </div>
    );
};

export default EspacioBuscador;