import React from "react";
import "./Menu.css";

const Menu = () => {
    return (
        <div className="menu">
            <nav className="menu__nav">
                <ul className="menu__list">
                    <li className="menu__item">Home</li>
                    <li className="menu__item">Dashboard</li>
                    <li className="menu__item">Booking</li>
                </ul>
            </nav>
            <div className="menu__search">
                <div className="menu__search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="menu__search-svg" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </div>
                <input className="menu__search-input" type="text" />
            </div>
        </div>
    );
}

export default Menu;
