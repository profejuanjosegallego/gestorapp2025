import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export function FormularioReserva() {
    const [getResponsableReserva, setResponsableReserva] = useState(localStorage.getItem("responsable") || '');
    const [getContactoReserva, setContactoReserva] = useState(localStorage.getItem("contacto") || '');
    const [getCorreoReserva, setCorreoReserva] = useState(localStorage.getItem("correo") || '');
    const [getApartamentoReserva, setApartamentoReserva] = useState(localStorage.getItem("apartamento") || '');
    const [getDiaReserva, setDiaReserva] = useState(localStorage.getItem("dia") || '');
    const [getHoraReserva, setHoraReserva] = useState(localStorage.getItem("hora") || '');
    const [getConsideracionesReserva, setConsideracionReserva] = useState(localStorage.getItem("consideraciones") || '');
    const [mensajeReserva, setMensajeReserva] = useState(null);
    const receptor = useLocation();
    const navigate = useNavigate();
    const { dia, hora, espacio } = receptor.state || {};
    useEffect(() => {
        if (dia && hora) {
            setDiaReserva(dia);
            setHoraReserva(hora);
        }
    }, [dia, hora]);
    useEffect(() => {
        localStorage.setItem("responsable", getResponsableReserva);
    }, [getResponsableReserva]);
    useEffect(() => {
        localStorage.setItem("contacto", getContactoReserva);
    }, [getContactoReserva]);
    useEffect(() => {
        localStorage.setItem("correo", getCorreoReserva);
    }, [getCorreoReserva]);
    useEffect(() => {
        localStorage.setItem("apartamento", getApartamentoReserva);
    }, [getApartamentoReserva]);
    useEffect(() => {
        localStorage.setItem("dia", getDiaReserva);
    }, [getDiaReserva]);
    useEffect(() => {
        localStorage.setItem("hora", getHoraReserva);
    }, [getHoraReserva]);
    useEffect(() => {
        localStorage.setItem("consideraciones", getConsideracionesReserva);
    }, [getConsideracionesReserva]);
    function capturarDatosFormulario(event) {
        event.preventDefault();
        const datos = {
            responsable: getResponsableReserva,
            contacto: getContactoReserva,
            correo: getCorreoReserva,
            apartamento: getApartamentoReserva,
            dia: getDiaReserva,
            hora: getHoraReserva,
            consideraciones: getConsideracionesReserva,
            espacio: espacio
        };
        const reservasExistentes = JSON.parse(localStorage.getItem("reservas")) || [];
        reservasExistentes.push(datos);
        localStorage.setItem("reservas", JSON.stringify(reservasExistentes));
        // Limpiar localStorage
        localStorage.removeItem("responsable");
        localStorage.removeItem("contacto");
        localStorage.removeItem("correo");
        localStorage.removeItem("apartamento");
        localStorage.removeItem("dia");
        localStorage.removeItem("hora");
        localStorage.removeItem("consideraciones");
        // Limpiar estados (resetear formulario)
        setResponsableReserva('');
        setContactoReserva('');
        setCorreoReserva('');
        setApartamentoReserva('');
        setDiaReserva('');
        setHoraReserva('');
        setConsideracionReserva('');
        setMensajeReserva(`:white_check_mark: ¡Reserva para ${espacio} realizada con éxito el ${getDiaReserva} a las ${getHoraReserva}!`);
        setTimeout(() => {
            setMensajeReserva(null);
            navigate("/booking");
        }, 5000);
    }
    return (
        <>
            {mensajeReserva && (
                <div className="toast-container animated-toast position-fixed bottom-0 end-0 p-3">
                    <div className="toast show text-white bg-success border-0 shadow" role="alert">
                        <div className="d-flex">
                            <div className="toast-body d-flex align-items-center gap-2">
                                <i className="bi bi-check-circle-fill fs-5"></i>
                                <span>{mensajeReserva}</span>
                            </div>
                            <button
                                type="button"
                                className="btn-close btn-close-white me-2 m-auto"
                                onClick={() => setMensajeReserva(null)}
                            ></button>
                        </div>
                    </div>
                </div>
            )}
            <br /><br />
            <section className="container">
                <section className="row">
                    <section className="col-12 col-md-8 offset-md-2">
                        <h3>Register your reservation</h3>
                        <hr />
                        <form className="formulario-reserva" onSubmit={capturarDatosFormulario}>
                            <div className="mb-3">
                                <label className="form-label">Responsible</label>
                                <input type="text" className="form-control" required
                                    value={getResponsableReserva}
                                    onChange={(e) => setResponsableReserva(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contact telephone number</label>
                                <input type="text" className="form-control" required
                                    value={getContactoReserva}
                                    onChange={(e) => setContactoReserva(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">E-mail address</label>
                                <input type="email" className="form-control" required
                                    value={getCorreoReserva}
                                    onChange={(e) => setCorreoReserva(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Apartment</label>
                                <input type="text" className="form-control" required
                                    value={getApartamentoReserva}
                                    onChange={(e) => setApartamentoReserva(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Day</label>
                                <input type="text" className="form-control" required
                                    value={getDiaReserva}
                                    onChange={(e) => setDiaReserva(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Time</label>
                                <input type="text" className="form-control" required
                                    value={getHoraReserva}
                                    onChange={(e) => setHoraReserva(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Comments</label>
                                <textarea className="form-control"
                                    value={getConsideracionesReserva}
                                    onChange={(e) => setConsideracionReserva(e.target.value)} />
                            </div>
                            <button className="btn btn-outline-primary w-100" type="submit">Reserve</button>
                            <button
                                type="button"
                                className="btn btn-outline-danger w-100 mt-2"
                                onClick={() => navigate("/booking")}
                            >
                                Cancel
                            </button>
                        </form>
                    </section>
                </section>
            </section>
        </>
    );
}