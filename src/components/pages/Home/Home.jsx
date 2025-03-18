import Menu from "../../common/Menu/Menu";
import { Acerca } from "../../common/Acerca/Acerca";
import { Footer } from "../../common/Footer/Footer";
import Dashboard from "../../common/Dashboard/Dashboard"; // Asegúrate de que la ruta es correcta
import { Banner } from "../../common/Banner/Banner";

export function Home() {
  return (
    <>
      <Menu />
      <main>
        {/* Se muestra aquí, verifica que no esté en Menu.jsx */}
        <Banner/>
        <Acerca />
        <section>
          <Dashboard />
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Home;
