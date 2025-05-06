// src/pages/Facilities.jsx
import React, { useState, useEffect } from 'react';
import facilitiesData from '../lib/facilitiesData';
import EspacioCard from '../components/EspacioCard';
import { Search, Filter, Calendar } from 'lucide-react';

const Espacios = () => {
    // Estado para los filtros
    const [filters, setFilters] = useState({
        nombre: '',
        capacidadMin: '',
        capacidadMax: '',
        dias: [],
    });

    // Estado para los espacios filtrados
    const [espaciosFiltrados, setEspaciosFiltrados] = useState(facilitiesData);

    // Estado para el ordenamiento
    const [ordenActual, setOrdenActual] = useState('default');

    // Estado para la categoría activa (filtro rápido)
    const [activeCategory, setActiveCategory] = useState('todos');

    // Estado para indicar si está cargando
    const [isLoading, setIsLoading] = useState(false);

    // Función para aplicar los filtros
    useEffect(() => {
        // Indicar que está cargando
        setIsLoading(true);

        // Usamos setTimeout para simular una carga y hacer más visible el efecto del loading
        const timeoutId = setTimeout(() => {
            // Primero filtramos los espacios
            let filteredEspacios = facilitiesData.filter(espacio => {
                // Filtrar por nombre
                const nombreMatch = espacio.nombreEspacio.toLowerCase().includes(filters.nombre.toLowerCase());

                // Filtrar por capacidad mínima
                const capacidadMinMatch = !filters.capacidadMin || espacio.capacidad >= parseInt(filters.capacidadMin);

                // Filtrar por capacidad máxima
                const capacidadMaxMatch = !filters.capacidadMax || espacio.capacidad <= parseInt(filters.capacidadMax);

                // Filtrar por días
                const diasMatch = filters.dias.length === 0 || espacio.calendario.some(cal =>
                    filters.dias.includes(cal.dia)
                );

                // Filtrar por categoría (filtro rápido)
                let categoriaMatch = true;
                if (activeCategory !== 'todos') {
                    if (activeCategory === 'conference') {
                        categoriaMatch = espacio.nombreEspacio.toLowerCase().includes('conference');
                    } else if (activeCategory === 'event') {
                        categoriaMatch = espacio.nombreEspacio.toLowerCase().includes('event');
                    } else if (activeCategory === 'garden') {
                        categoriaMatch = espacio.nombreEspacio.toLowerCase().includes('garden');
                    } else if (activeCategory === 'sports') {
                        categoriaMatch = espacio.nombreEspacio.toLowerCase().includes('sports');
                    }
                }

                // Retornar true si coincide con todos los filtros
                return nombreMatch && capacidadMinMatch && capacidadMaxMatch && diasMatch && categoriaMatch;
            });

            // Luego aplicamos el ordenamiento seleccionado
            filteredEspacios = ordenarEspacios(filteredEspacios, ordenActual);

            setEspaciosFiltrados(filteredEspacios);
            setIsLoading(false);
        }, 400); // Pequeña demora para mostrar el estado de carga

        // Limpieza del timeout si el componente se desmonta o los filtros cambian antes de que termine
        return () => clearTimeout(timeoutId);
    }, [filters, ordenActual, activeCategory]);

    // Función para ordenar los espacios
    const ordenarEspacios = (espacios, orden) => {
        const espaciosOrdenados = [...espacios];

        switch (orden) {
            case 'nombre-asc':
                return espaciosOrdenados.sort((a, b) =>
                    a.nombreEspacio.localeCompare(b.nombreEspacio));
            case 'nombre-desc':
                return espaciosOrdenados.sort((a, b) =>
                    b.nombreEspacio.localeCompare(a.nombreEspacio));
            case 'capacidad-asc':
                return espaciosOrdenados.sort((a, b) =>
                    a.capacidad - b.capacidad);
            case 'capacidad-desc':
                return espaciosOrdenados.sort((a, b) =>
                    b.capacidad - a.capacidad);
            case 'horarios-asc':
                return espaciosOrdenados.sort((a, b) =>
                    a.calendario.length - b.calendario.length);
            case 'horarios-desc':
                return espaciosOrdenados.sort((a, b) =>
                    b.calendario.length - a.calendario.length);
            default:
                return espaciosOrdenados;
        }
    };

    // Componente de búsqueda interno
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

    // Componente de ordenamiento interno
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
            <div className="flex items-center justify-end">
                <div className="flex items-center">
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

    // Componente de filtro rápido interno
    const FiltroRapido = ({ activeCategory, setActiveCategory }) => {
        const categorias = [
            { id: 'todos', nombre: 'Todos' },
            { id: 'conference', nombre: 'Salas de conferencia' },
            { id: 'event', nombre: 'Salones de eventos' },
            { id: 'garden', nombre: 'Áreas al aire libre' },
            { id: 'sports', nombre: 'Áreas deportivas' }
        ];

        return (
            <div className="mb-6">
                <div className="flex items-center mb-3">
                    <Filter size={16} className="mr-2 text-blue-500" />
                    <h3 className="text-sm font-medium text-gray-700">Filtros rápidos:</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                    {categorias.map(categoria => (
                        <button
                            key={categoria.id}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === categoria.id
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            onClick={() => setActiveCategory(categoria.id)}
                        >
                            {categoria.nombre}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Nuestros Espacios</h1>

            {/* Componente de búsqueda */}
            <EspacioBuscador filters={filters} setFilters={setFilters} />

            {/* Filtro rápido por categoría */}
            <FiltroRapido activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

            {/* Información de resultados y ordenamiento */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                {/* Contador de resultados */}
                <p className="font-medium text-gray-600 mb-2 md:mb-0">
                    {isLoading ? (
                        <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Buscando espacios...
                        </span>
                    ) : (
                        <span>
                            {espaciosFiltrados.length} {espaciosFiltrados.length === 1 ? 'espacio encontrado' : 'espacios encontrados'}
                        </span>
                    )}
                </p>

                {/* Componente de ordenamiento */}
                <EspacioOrdenador ordenActual={ordenActual} setOrdenActual={setOrdenActual} />
            </div>

            {/* Grid de espacios con estado de carga */}
            {isLoading ? (
                <div className="flex justify-center items-center py-16">
                    <div className="text-center">
                        <svg className="animate-spin h-12 w-12 text-blue-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="text-lg text-gray-600">Cargando espacios...</p>
                    </div>
                </div>
            ) : espaciosFiltrados.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {espaciosFiltrados.map((espacio) => (
                        <EspacioCard key={espacio.id} espacio={espacio} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-gray-100 rounded-lg">
                    <p className="text-lg text-gray-600">No se encontraron espacios con los filtros seleccionados.</p>
                    <button
                        onClick={() => {
                            setFilters({
                                nombre: '',
                                capacidadMin: '',
                                capacidadMax: '',
                                dias: [],
                            });
                            setActiveCategory('todos');
                        }}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Limpiar todos los filtros
                    </button>
                </div>
            )}
        </div>
    );
};

export default Espacios;