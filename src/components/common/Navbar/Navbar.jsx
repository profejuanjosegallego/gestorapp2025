import { useState } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

export function Navbar({ setBusqueda }) {
  const [texto, setTexto] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setTexto(value);
    setBusqueda(value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBusqueda(texto);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* Tu logo, enlaces, etc. */}

        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={texto}
            onChange={handleChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}


Navbar.propTypes = {
  setBusqueda: PropTypes.func.isRequired,
};

