import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

export function FormularioReserva() {

    // 1. Variables de estado para los campos del formulario
    const [getResponsableReserva, setResponsableReserva] = useState('')
    const [getContactoReserva, setContactoReserva] = useState('')
    const [getCorreoReserva, setCorreoReserva] = useState('')
    const [getApartamentoReserva, setApartamentoReserva] = useState('')
    const [getDiaReserva, setDiaReserva] = useState('')
    const [getHoraReserva, setHoraReserva] = useState('')
    const [getConsideracionesReserva, setConsideracionReserva] = useState('')

    // 2. Estado para almacenar el JSON del formulario
    const [getdatosFormulario, setDatosFormulario] = useState(null)

    // 3. Estado para controlar si se ha enviado el formulario
    const [formularioHaSidoEnviado, setFormularioHaSidoEnviado] = useState(false)

    // 4. Cargar datos desde URL (día y hora)
    const receptor = useLocation()
    const { dia, hora } = receptor.state || {}

    useEffect(() => {
        if (dia && hora) {
            setDiaReserva(dia)
            setHoraReserva(hora)
        }
    }, [dia, hora])

    // 5. Cargar campos desde localStorage al iniciar
    useEffect(() => {
        setResponsableReserva(localStorage.getItem("form_responsable") || "")
        setContactoReserva(localStorage.getItem("form_contacto") || "")
        setCorreoReserva(localStorage.getItem("form_correo") || "")
        setApartamentoReserva(localStorage.getItem("form_apartamento") || "")
        setConsideracionReserva(localStorage.getItem("form_consideraciones") || "")
    }, [])

    // 6. Guardar en localStorage cada vez que cambia un campo
    useEffect(() => localStorage.setItem("form_responsable", getResponsableReserva), [getResponsableReserva])
    useEffect(() => localStorage.setItem("form_contacto", getContactoReserva), [getContactoReserva])
    useEffect(() => localStorage.setItem("form_correo", getCorreoReserva), [getCorreoReserva])
    useEffect(() => localStorage.setItem("form_apartamento", getApartamentoReserva), [getApartamentoReserva])
    useEffect(() => localStorage.setItem("form_consideraciones", getConsideracionesReserva), [getConsideracionesReserva])

    // 7. Capturar y validar datos del formulario
    function capturarDatosFormulario(evento) {
        evento.preventDefault()

        const datos = {
            responsable: getResponsableReserva,
            contacto: getContactoReserva,
            correo: getCorreoReserva,
            apartamento: getApartamentoReserva,
            dia: getDiaReserva,
            hora: getHoraReserva,
            consideraciones: getConsideracionesReserva
        }

        setDatosFormulario(datos)
        setFormularioHaSidoEnviado(true)

        // Limpiar localStorage
        localStorage.removeItem("form_responsable")
        localStorage.removeItem("form_contacto")
        localStorage.removeItem("form_correo")
        localStorage.removeItem("form_apartamento")
        localStorage.removeItem("form_consideraciones")

        // Opcional: limpiar campos después del envío
        setResponsableReserva("")
        setContactoReserva("")
        setCorreoReserva("")
        setApartamentoReserva("")
        setConsideracionReserva("")

        alert("✅ Reserva enviada correctamente")
        console.log("Reserva enviada:", datos)
    }

    return (
        <>
            <br /><br />
            <section className="container">
                <section className="row">
                    <section className="col-12 col-md-8">
                        <h3>Registra tu reserva</h3>
                        <hr />
                        <form className="border rounded p-4 shadow" onSubmit={capturarDatosFormulario}>
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-person-circle"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Responsable Reserva"
                                    value={getResponsableReserva}
                                    onChange={(e) => setResponsableReserva(e.target.value)}
                                />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-phone-fill"></i>
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Contacto Reserva"
                                    value={getContactoReserva}
                                    onChange={(e) => setContactoReserva(e.target.value)}
                                />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-envelope-fill"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo Contacto"
                                    value={getCorreoReserva}
                                    onChange={(e) => setCorreoReserva(e.target.value)}
                                />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-building-fill"></i>
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Apartamento Reserva"
                                    value={getApartamentoReserva}
                                    onChange={(e) => setApartamentoReserva(e.target.value)}
                                />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-calendar-event-fill"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Día Reserva"
                                    value={getDiaReserva}
                                    readOnly
                                />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-clock-fill"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Hora Reserva"
                                    value={getHoraReserva}
                                    readOnly
                                />
                            </div>

                            <div className="mb-3">
                                <div className="form-floating">
                                    <textarea
                                        className="form-control"
                                        value={getConsideracionesReserva}
                                        onChange={(e) => setConsideracionReserva(e.target.value)}
                                    ></textarea>
                                    <label>Consideraciones</label>
                                </div>
                            </div>

                            <button className="btn btn-outline-primary w-100" type="submit">
                                Reservar
                            </button>
                        </form>
                    </section>

                    <section className="col-12 col-md-4 align-self-center">
                        <img src="../../../../src/assets/img/reserva.webp" alt="foto" className="img-fluid" />
                    </section>
                </section>
            </section>
        </>
    )
}
