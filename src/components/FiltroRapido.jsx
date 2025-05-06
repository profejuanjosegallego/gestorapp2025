// src/components/FiltroRapido.jsx
import React from 'react';
import { Tag } from 'lucide-react';

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
                <Tag size={16} className="mr-2 text-blue-500" />
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

export default FiltroRapido;