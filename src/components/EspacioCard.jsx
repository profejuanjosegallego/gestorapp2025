// src/components/EspacioCard.jsx
import React from 'react';
import { Users, Calendar, Building } from 'lucide-react';

const EspacioCard = ({ espacio }) => {
    const { nombreEspacio, descripcion, capacidad, calendario, foto } = espacio;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Imagen */}
            <div className="h-48 overflow-hidden">
                {foto && foto !== "NAN" ? (
                    <img
                        src={foto}
                        alt={`${nombreEspacio}`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                ) : (
                    <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                        <Building size={64} className="text-gray-400" />
                    </div>
                )}
            </div>

            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{nombreEspacio}</h2>
                <p className="text-gray-600 mb-3">{descripcion}</p>

                <div className="flex items-center text-gray-500 mb-2">
                    <Users size={18} className="mr-2" />
                    <span>Capacidad: {capacidad} personas</span>
                </div>

                <div className="mt-4">
                    <h3 className="text-sm font-semibold flex items-center mb-2">
                        <Calendar size={16} className="mr-2" />
                        Horarios disponibles:
                    </h3>
                    <ul className="text-sm text-gray-600">
                        {calendario.map((horario, index) => (
                            <li key={index} className="mb-1">
                                <span className="capitalize">{horario.dia}</span>: {horario.hora}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EspacioCard;