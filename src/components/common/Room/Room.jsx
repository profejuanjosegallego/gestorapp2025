import React, { useState } from 'react';
import "./Room.css";

const Room = ({ object }) => {
    const [reserved, setReserved] = useState(false);
    const sentLocal = () => {
        setReserved(true);
        if (!reserved) alert('Reserva exitosa!')
        if (reserved) alert('Ups! Alguien ya reservo este espacio.')
    }
    return (
        <div className="room-card">
            <div className="room-card__image">
                <img className="room-card__img" src={`/src/assets/img/${object.image}`} alt="De Luxe Room" />
            </div>
            <div className="room-card__details">
                <p className="room-card__details-info">{`${object.adults} adults | ${object.childrens} child below ${object.below}`}</p>
                <h2 className="room-card__details-title">{object.name}</h2>
                <p className="room-card__details-price">{`from ${object.price} a night`}</p>
                <button className={reserved ? "room-card__details-button --reserverd" : "room-card__details-button"} onClick={() => sentLocal()}>{reserved ? "Reserved" : "Reserve"}</button>
            </div>
        </div>
    );
};

export default Room;
