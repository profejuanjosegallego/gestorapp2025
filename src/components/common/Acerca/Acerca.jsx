import './Acerca.css'; // Archivo CSS para estilos

export function Acerca() {
  return (
    <section className="acerca">
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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