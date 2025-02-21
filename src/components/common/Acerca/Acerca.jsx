import React from 'react'
import './Acerca.css'
export const Acerca = () =>{
    return (
        <div className="container">
            <h1 className="title">Acerca de las Zonas Comunes</h1>
            <p className="text">
                En nuestra unidad residencial, entendemos que las zonas comunes son el corazón de la comunidad, un espacio donde los residentes pueden interactuar, relajarse y disfrutar de diversas actividades. Estas áreas están diseñadas para fomentar un ambiente amigable y colaborativo, donde todos los miembros de la comunidad puedan sentirse cómodos y bienvenidos.
            </p>
            
            <h2 className="subtitle">Zonas Comunes</h2>
            <ul className="list">
                <li className="list-item">
                    <h3 className="item-title">Salón Comunal</h3>
                    <p className="text">
                        Un espacio versátil que ofrece un ambiente acogedor para reuniones, eventos y celebraciones. Equipado con cómodos asientos, mesas y tecnología audiovisual.
                    </p>
                </li>
                <li className="list-item">
                    <h3 className="item-title">Gimnasio</h3>
                    <p className="text">
                        Equipado con máquinas de última generación y espacios para diversas actividades físicas, ideal para entrenamientos individuales o clases grupales.
                    </p>
                </li>
                <li className="list-item">
                    <h3 className="item-title">Piscina</h3>
                    <p className="text">
                        Un lugar perfecto para relajarse y disfrutar del sol, con áreas separadas para nadar y descansar, y actividades recreativas durante la temporada.
                    </p>
                </li>
                <li className="list-item">
                    <h3 className="item-title">Parque Infantil</h3>
                    <p className="text">
                        Diseñado para los más pequeños, con juegos, columpios y áreas verdes, permitiendo a los niños jugar y socializar en un entorno seguro.
                    </p>
                </li>
                <li className="list-item">
                    <h3 className="item-title">Jardines y Áreas Verdes</h3>
                    <p className="text">
                        Proporcionan un entorno natural y tranquilo, ideales para paseos y picnics. Se organizan actividades comunitarias para fomentar el cuidado del medio ambiente.
                    </p>
                </li>
                <li className="list-item">
                    <h3 className="item-title">Sala de Estudio</h3>
                    <p className="text">
                        Un espacio silencioso y cómodo para estudiantes y profesionales, con acceso a Wi-Fi y recursos de lectura para una mejor concentración.
                    </p>
                </li>
            </ul>

            <h2 className="subtitle">Conclusión</h2>
            <p className="text">
                Las zonas comunes de nuestra unidad residencial no solo son espacios físicos, sino también lugares donde se construyen relaciones y se crea un sentido de comunidad. Invitamos a todos los residentes a aprovechar al máximo estas áreas y participar en las actividades organizadas, contribuyendo así a la vida comunitaria.
            </p>
        </div>
    );
}