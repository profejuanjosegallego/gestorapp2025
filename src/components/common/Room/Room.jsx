import React, { useState } from "react";
import "./Room.css";

const Room = ({ object }) => {
    const [reserved, setReserved] = useState(false);

    const handleReservation = () => {
        if (!reserved) {
            alert("¡Reserva exitosa!");
            setReserved(true);
        } else {
            alert("Ups! Alguien ya reservó este espacio.");
        }
    };

    return (
        <div className="room-card">
            <div className="room-card__image">
                <img
                    className="room-card__img"
                    src={`/img/${object.image}`}
                    alt={object.name}
                />
            </div>
            <div className="room-card__details">
                <p className="room-card__details-info">
                    {`${object.adults} adults | ${object.childrens} child below ${object.below}`}
                </p>
                <h2 className="room-card__details-title">{object.name}</h2>
                <p className="room-card__details-price">
                    {`from ${object.price} a night`}
                </p>
                <button
                    className={`room-card__details-button ${reserved ? "--reserved" : ""}`}
                    onClick={handleReservation}
                >
                    {reserved ? "Reserved" : "Reserve"}
                </button>
            </div>
        </div>
    );
};

export default Room;
