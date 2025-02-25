import './Dashboard.css'

export function Dashboard(){

    return(
        <>
        <div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <img
        src="https://watermark.lovepik.com/photo/20211123/large/lovepik-gym-picture_500868937.jpg"
        className="img-fluid rounded"
        alt="Área social"
      />
    </div>
    <div className="col-md-6 d-flex flex-column justify-content-center">
      <h2>Gimnasio</h2>
      <p>
        Realiza tus entrenamientos en el gimnasio de la unidad con entrenadores
        y amigos.
      </p>
      <h5>Horarios</h5>
      <ul>
        <li>Lunes a Viernes: 8:00 AM - 10:00 PM</li>
        <li>Sábados y Domingos: 9:00 AM - 11:00 PM</li>
      </ul>
      <button className="btn btn-primary custom-button">Reservar Ahora</button>
    </div>
  </div>
</div>

        </>
    )

}