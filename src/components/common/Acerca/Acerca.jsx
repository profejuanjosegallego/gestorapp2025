import './Acerca.css'; // Archivo CSS para estilos

export function Acerca() {
  return (
    <section className="acerca">
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <img
              src="../../../../src/assets/img/istockphoto-909303600-612x612.jpg"
              alt="Imagen de Hotel Lux"
              className="img-fluid acerca-imagen"
            />
          </div>
          <div className="col-12 col-md-6 acerca-contenido">
            <h2 className="acerca-titulo">Sobre Sukhdev</h2>
            <p className="acerca-texto">
              En Sukhdev, nos dedicamos a ofrecerte una experiencia única y
              memorable. Nuestras habitaciones están diseñadas para brindarte el
              máximo confort, mientras que nuestra gastronomía te deleitará con
              sabores exquisitos. Con un servicio personalizado y atención a cada
              detalle, tu estancia con nosotros será inolvidable.
            </p>
            <button className="acerca-boton">Descubre más</button>
          </div>
        </div>
      </div>
    </section>
  );
}