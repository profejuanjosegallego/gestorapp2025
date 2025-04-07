import { useState, useEffect } from 'react';
import { calendario } from './datosCalendario';

export function Calendario() {
    const [dias, setDias] = useState([]);
    const [horas, setHoras] = useState([]);

    useEffect(() => {
        setDias(calendario[0]);
        setHoras(calendario[1]);
    }, []);

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Hora</th>
                    {dias.map((dia, index) => (
                        <th key={index}>{dia}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {horas.map((hora, index) => (
                    <tr key={index}>
                        <td>{hora}</td>
                        {dias.map((dia, diaIndex) => (
                            <td key={diaIndex}>
                                <input type="checkbox" />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}